const tape = require('tape')
const BN = require('bn.js')
const VM = require('../../dist/index').default
const { createAccount } = require('./utils')
const { keccak256, padToEven } = require('ethereumjs-util')
const Common = require('@ethereumjs/common').default

// Non-protected Create2Address generator. Does not check if buffers have the right padding. Returns a 32-byte buffer which contains the address.
function create2address(sourceAddress, codeHash, salt) {
    let rlp_proc_buffer = Buffer.from('ff', 'hex')
    let hashBuffer = Buffer.concat([rlp_proc_buffer, sourceAddress, salt, codeHash])
    return keccak256(hashBuffer).slice(12)
}

/*
    This test:
        Setups a contract at address 0x00..ff 
        Instantiates the VM at the Constantinople fork
        Calls the address with various arguments (callvalue is used as argument). VMs `runCall` is used.
        The CREATE2 address which the contract creates is checked against the expected CREATE2 value.
*/

tape('Constantinople: EIP-1014 CREATE2 creates the right contract address', async (t) => {
    // setup the accounts for this test
    const caller =          Buffer.from('00000000000000000000000000000000000000ee', 'hex')                   // caller addres
    const contractAddress = Buffer.from('00000000000000000000000000000000000000ff', 'hex')          // contract address 
    // setup the vm
    const vm = new VM({ chain: 'mainnet', hardfork: 'constantinople'})                                   
    const code = "3460008080F560005260206000F3"
    /*
      code:             remarks: (top of the stack is at the zero index)
        CALLVALUE
        PUSH1 0x00
        DUP1
        DUP1
        CREATE2         [0, 0, 0, CALLVALUE]
        PUSH1 0x00
        MSTORE          [0x00, <created address>]
        PUSH1 0x20
        PUSH1 0x00
        RETURN          [0x00, 0x20]
    */

    await vm.stateManager.putContractCode(contractAddress, Buffer.from(code, 'hex'))                // setup the contract code

    let codeHash = keccak256(Buffer.from(''))
    for (let value = 0; value <= 1000; value+=20) {
        // setup the call arguments
        let runCallArgs = {
            caller: caller,                     // call address
            gasLimit: new BN(0xffffffffff),     // ensure we pass a lot of gas, so we do not run out of gas
            to: contractAddress,                // call to the contract address
            value: new BN(value)                // call with this value (the value is used in the contract as an argument, see above's code)
        }

        let hexString = padToEven(value.toString(16));
        let valueBuffer = Buffer.from(hexString, 'hex')
        // pad buffer
        if (valueBuffer.length < 32) {
            let diff = 32 - valueBuffer.length 
            valueBuffer = Buffer.concat([Buffer.alloc(diff), valueBuffer])
        }
        // calculate expected CREATE2 address
        let expectedAddress = create2address(contractAddress, codeHash, valueBuffer)
        // run the actual call
        const res = await vm.runCall(runCallArgs)
        // retrieve the return value and convert it to an address (remove the first 12 bytes from the 32-byte return value)
        const executionReturnValue = res.execResult.returnValue.slice(12)
        if (!expectedAddress.equals(executionReturnValue)) {
            console.log('not equal')
            t.fail("contract address not equal")
        }
    }

    t.pass('CREATE2 creates (empty) contracts at the expected address')

    t.end()
})

tape('Byzantium cannot access Constantinople opcodes', async (t) => {
    t.plan(2)
    // setup the accounts for this test
    const caller =          Buffer.from('00000000000000000000000000000000000000ee', 'hex')                   // caller addres
    const contractAddress = Buffer.from('00000000000000000000000000000000000000ff', 'hex')          // contract address 
    // setup the vm
    const vmByzantium = new VM({ chain: 'mainnet', hardfork: 'byzantium'})      
    const vmConstantinople = new VM({ chain: 'mainnet', hardfork: 'constantinople'})                                   
    const code = "600160011B00"
    /*
      code:             remarks: (top of the stack is at the zero index)
        PUSH1 0x01  
        PUSH1 0x01
        SHL
        STOP
    */

    await vmByzantium.stateManager.putContractCode(contractAddress, Buffer.from(code, 'hex'))                // setup the contract code
    await vmConstantinople.stateManager.putContractCode(contractAddress, Buffer.from(code, 'hex'))                // setup the contract code

    const runCallArgs = {
        caller: caller,                     // call address
        gasLimit: new BN(0xffffffffff),     // ensure we pass a lot of gas, so we do not run out of gas
        to: contractAddress,                // call to the contract address
    }

    const byzantiumResult = await vmByzantium.runCall(runCallArgs)
    const constantinopleResult = await vmConstantinople.runCall(runCallArgs)

    t.assert(byzantiumResult.execResult.exceptionError && byzantiumResult.execResult.exceptionError.error === 'invalid opcode', 'byzantium cannot accept constantinople opcodes (SHL)')
    t.assert(!constantinopleResult.execResult.exceptionError, 'constantinople can access the SHL opcode')

    t.end()
})

tape('Ensure that precompile activation creates non-empty accounts', async (t) => {
    // setup the accounts for this test
    const caller =          Buffer.from('00000000000000000000000000000000000000ee', 'hex')                   // caller addres
    const contractAddress = Buffer.from('00000000000000000000000000000000000000ff', 'hex')          // contract address 
    // setup the vm
    const common = new Common('mainnet', 'istanbul')
    const vmNotActivated = new VM({ common: common})   
    const vmActivated = new VM({ common: common, activatePrecompiles: true})                                   
    const code = "6000808080347300000000000000000000000000000000000000045AF100"
    /*
      idea: call the Identity precompile with nonzero value in order to trigger "callNewAccount" for the non-activated VM and do not deduct this
            when calling from the activated VM. Explicitly check that the difference in gas cost is equal to the common callNewAccount gas.
      code:             remarks: (top of the stack is at the zero index)       
        PUSH1 0x00
        DUP1
        DUP1
        DUP1
        CALLVALUE
        PUSH20 0000000000000000000000000000000000000004
        GAS
        CALL            [gas, 0x00..04, 0, 0, 0, 0, 0]
        STOP
    */

    await vmNotActivated.stateManager.putContractCode(contractAddress, Buffer.from(code, 'hex'))                // setup the contract code
    await vmActivated.stateManager.putContractCode(contractAddress, Buffer.from(code, 'hex'))                // setup the contract code

    // setup the call arguments
    let runCallArgs = {
        caller: caller,                     // call address
        gasLimit: new BN(0xffffffffff),     // ensure we pass a lot of gas, so we do not run out of gas
        to: contractAddress,                // call to the contract address,
        value: new BN(1)
    }

    const resultNotActivated = await vmNotActivated.runCall(runCallArgs)
    const resultActivated = await vmActivated.runCall(runCallArgs)

    const diff = resultNotActivated.gasUsed.sub(resultActivated.gasUsed)
    const expected = common.param('gasPrices', 'callNewAccount')
    
    t.assert(diff.eq(new BN(expected)), "precompiles are activated")

    t.end()
})

tape('Ensure that allow unlimited contract size works', async (t) => {
    // setup the accounts for this test
    const caller1 = Buffer.from('00000000000000000000000000000000000000ee', 'hex')                   // caller addres
    const caller2 = Buffer.from('00000000000000000000000000000000000000ff', 'hex')                   // caller addres
    // setup the vm
    const common = new Common('mainnet', 'istanbul')
    const vm = new VM({ common: common, allowUnlimitedContractSize: true })        
                       
    const codeMessageDeploy = "600D380380600D6000396000F3" + ("00").repeat(24577) // deploy a contract which is too large (by EIP 170)

    /*
        Code:
            PUSH 0x0D (13)  <- 13 is the length of this code
            CODESIZE
            SUB             <- length of the contract to be deployed
            DUP1            <- duplicate the length (we need it again at RETURN)
            PUSH 0x0D (13)  <- offset of the code to be deployed
            PUSH 0          <- memory offset to dump code in
            CODECOPY        <- dump the to-be-deployed code in the memory 
            PUSH 0          
            RETURN          <- deploy contract 
    */

   const codeCreateDeploy = "6010380380601060003960006000F000" + codeMessageDeploy

    /*
        Code:
            PUSH 0x10 (16)  <- 16 is the length of this code
            CODESIZE
            SUB             <- length of the contract to be deployed
            DUP1            <- duplicate the length (we need it again at RETURN)
            PUSH 0x10 (16)  <- offset of the code to be deployed
            PUSH 0          <- memory offset to dump code in
            CODECOPY        <- dump the to-be-deployed code in the memory 
            PUSH 0          
            PUSH 0
            CREATE          <- create the contract (this performs the codeMessageDeploy transaction, but now from a contract)
            STOP
            <after STOP the code of codeMessageDeploy is written>
    */

    let resultMessageDeploy = await vm.runCall({
        caller: caller1, 
        gasLimit: new BN(0xffffffffff),
        to: null,
        value: new BN(0),
        data: Buffer.from(codeMessageDeploy, 'hex')
    })

    let deployedCodeMessageDeploy = await vm.stateManager.getContractCode(resultMessageDeploy.createdAddress)
    t.assert(deployedCodeMessageDeploy.length == 24577, "contract did deploy as expected")

    let resultCreateDeploy = await vm.runCall({
        caller: caller2, 
        gasLimit: new BN(0xffffffffff),
        to: null,
        value: new BN(0),
        data: Buffer.from(codeCreateDeploy, 'hex'),
    })

    let deployedCode = await vm.stateManager.getContractCode(Buffer.from("855c46180b29fa849ced59cc984a0a31332c876c", 'hex'))
    let deployedCodeEmpty = await vm.stateManager.getContractCode(resultCreateDeploy.createdAddress)

    t.assert(deployedCodeEmpty.length == 0, "contract we are calling too should be empty as no code is deployed there")

    t.assert(deployedCode.length == 24577, "contract did deploy as expected")
    t.end()
})