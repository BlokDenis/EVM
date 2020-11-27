import tape from 'tape'
import { Address, BN, MAX_INTEGER, zeros } from 'ethereumjs-util'
import Common from '@ethereumjs/common'
import { Transaction } from '@ethereumjs/tx'
import VM from '../../lib'
import { DefaultStateManager } from '../../lib/state'
import runTx from '../../lib/runTx'
import { createAccount } from './utils'

function setup(vm?: any) {
  if (!vm) {
    const stateManager = new DefaultStateManager({})
    vm = {
      stateManager,
      emit: (e: any, val: any, cb: Function) => {
        cb()
      },
      _emit: () => new Promise((resolve) => resolve()),
    }
  }

  return {
    vm,
    runTx: runTx.bind(vm),
    putAccount: vm.stateManager.putAccount.bind(vm.stateManager),
  }
}

tape('runTx', (t) => {
  const suite = setup()

  t.test('should fail to run without signature', async (st) => {
    const tx = getTransaction(false)
    shouldFail(st, suite.runTx({ tx }), (e: Error) =>
      st.ok(e.message.includes('Invalid Signature'), 'should fail with appropriate error')
    )
    st.end()
  })

  t.test('should fail without sufficient funds', async (st) => {
    const tx = getTransaction(true)
    shouldFail(st, suite.runTx({ tx }), (e: Error) =>
      st.ok(e.message.toLowerCase().includes('enough funds'), 'error should include "enough funds"')
    )
    st.end()
  })
})

tape('should run simple tx without errors', async (t) => {
  const vm = new VM()
  const suite = setup(vm)

  const tx = getTransaction(true)
  const caller = tx.getSenderAddress()
  const acc = createAccount()

  await suite.putAccount(caller, acc)

  const res = await suite.runTx({ tx })
  t.true(res.gasUsed.gt(new BN(0)), 'should have used some gas')

  t.end()
})

tape('should fail when account balance overflows (call)', async (t) => {
  const vm = new VM()
  const suite = setup(vm)

  const tx = getTransaction(true, '0x01')

  const caller = tx.getSenderAddress()
  const from = createAccount()
  await suite.putAccount(caller, from)

  const to = createAccount(new BN(0), MAX_INTEGER)
  await suite.putAccount(tx.to, to)

  const res = await suite.runTx({ tx })

  t.equal(res.execResult!.exceptionError!.error, 'value overflow')
  t.equal((<any>vm.stateManager)._checkpointCount, 0)
  t.end()
})

tape('should fail when account balance overflows (create)', async (t) => {
  const vm = new VM()
  const suite = setup(vm)

  const tx = getTransaction(true, '0x01', true)

  const caller = tx.getSenderAddress()
  const from = createAccount()
  await suite.putAccount(caller, from)

  const contractAddress = new Address(
    Buffer.from('61de9dc6f6cff1df2809480882cfd3c2364b28f7', 'hex')
  )
  const to = createAccount(new BN(0), MAX_INTEGER)
  await suite.putAccount(contractAddress, to)

  const res = await suite.runTx({ tx })

  t.equal(res.execResult!.exceptionError!.error, 'value overflow')
  t.equal((<any>vm.stateManager)._checkpointCount, 0)
  t.end()
})

tape('should clear storage cache after every transaction', async (t) => {
  const common = new Common({ chain: 'mainnet', hardfork: 'istanbul' })
  const vm = new VM({ common })
  const privateKey = Buffer.from(
    'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
    'hex'
  )
  /* Code which is deployed here: 
    PUSH1 01
    PUSH1 00
    SSTORE
    INVALID
  */
  const code = Buffer.from('6001600055FE', 'hex')
  const address = new Address(Buffer.from('00000000000000000000000000000000000000ff', 'hex'))
  await vm.stateManager.putContractCode(address, code)
  await vm.stateManager.putContractStorage(
    address,
    Buffer.from('00'.repeat(32), 'hex'),
    Buffer.from('00'.repeat(31) + '01', 'hex')
  )
  const tx = Transaction.fromTxData(
    {
      nonce: '0x00',
      gasPrice: 1,
      gasLimit: 100000,
      to: address,
    },
    { common }
  ).sign(privateKey)

  await vm.stateManager.putAccount(tx.getSenderAddress(), createAccount())

  await vm.runTx({ tx }) // this tx will fail, but we have to ensure that the cache is cleared

  t.equal((<any>vm.stateManager)._originalStorageCache.size, 0, 'storage cache should be cleared')
  t.end()
})

// Context: This transaction https://etherscan.io/tx/0x57f7f9ec3cd92a908ac05edcb372bf6bb984fec6010a360eab76613fbf3bb23f
// caused a chain split where older versions of Geth reported incorrect results and were dropped of the network
// See also https://blog.ethereum.org/2020/11/12/geth_security_release/, "Geth shallow copy bug"
tape('should test that we are not vulnerable to the shallow-copy bug', async (t) => {
  const contractCreationData = Buffer.from(
    '608060405234801561001057600080fd5b50610347806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a27652314610046578063653721471461017a578063d4b83992146101fd575b600080fd5b6100ff6004803603602081101561005c57600080fd5b810190808035906020019064010000000081111561007957600080fd5b82018360208201111561008b57600080fd5b803590602001918460018302840111640100000000831117156100ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610247565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013f578082015181840152602081019050610124565b50505050905090810190601f16801561016c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018261029e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c25780820151818401526020810190506101a7565b50505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102056102ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60608060008351602085016000f09050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050919050565b60608060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050803b604051925060208301810160405280835280600060208501843c50819250505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea2646970667358221220731b129b6c50f2d740c4b0ceb5ed085ab6675e8417435604bd7f54176212daed64736f6c63430006060033',
    'hex'
  )
  const txData = Buffer.from(
    '3a2765230000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000009b7f0000000000000000000000000000006900000000000000000000000000000000600052601060106010600060007300000000000000000000000000000000000000045af13d7f00000000000000000000000000000420000000000000000000000000000000696000526010600060103e6000517f00000000000000000000000000000000000000000000000000000000000000005560206000f30000000000',
    'hex'
  )

  const common = new Common({ chain: 'mainnet', hardfork: 'muirGlacier' })
  const vm = new VM({ common })
  const privateKey = Buffer.from(
    'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
    'hex'
  )

  const tx1 = Transaction.fromTxData(
    {
      nonce: '0x00',
      gasPrice: 0,
      gasLimit: 2000000,
      to: undefined,
      data: contractCreationData,
    },
    { common }
  ).sign(privateKey)

  const results1 = await vm.runTx({ tx: tx1 })
  const tx2 = Transaction.fromTxData(
    {
      nonce: '0x00',
      gasPrice: 0,
      gasLimit: 1000000,
      to: results1.createdAddress,
      data: txData,
    },
    { common }
  ).sign(privateKey)

  let createdAddress: Address
  vm.on('newContract', (creationData: any) => {
    createdAddress = creationData.address
  })

  await vm.runTx({ tx: tx2 })

  t.ok(
    (await vm.stateManager.getContractStorage(createdAddress!, zeros(32))).toString('hex') ==
      '042000000000000000000000000000000069',
    'storage slot has the correct data'
  )
  t.end()
})

// The following test tries to verify that running a tx
// would work, even when stateManager is not using a cache.
// It fails at the moment, and has been therefore commented.
// Please refer to https://github.com/ethereumjs/ethereumjs-vm/issues/353
/* tape('should behave the same when not using cache', async (t) => {
  const suite = setup()

  const tx = getTransaction(true)
  const acc = createAccount()
  const caller = tx.getSenderAddress()
  await suite.putAccount(caller, acc)
  await suite.cacheFlush()
  suite.vm.stateManager.cache.clear()

  shouldFail(t,
    suite.runTx({ tx }),
    (e) => t.equal(e.message, 'test', 'error should be equal to what the mock runCall returns')
  )

  t.end()
}) */

function shouldFail(st: tape.Test, p: any, onErr: Function) {
  p.then(() => st.fail('runTx didnt return any errors')).catch(onErr)
}

function getTransaction(sign = false, value = '0x00', createContract = false) {
  let to: string | undefined = '0x0000000000000000000000000000000000000000'
  let data = '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'

  if (createContract) {
    to = undefined
    data =
      '0x6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a723158204aed884a44fd1747efccba1447a2aa2d9a4b06dd6021c4a3bbb993021e0a909e64736f6c634300050f0032'
  }

  const txParams = {
    nonce: 0,
    gasPrice: 100,
    gasLimit: 90000,
    to,
    value,
    data,
  }

  const tx = Transaction.fromTxData(txParams)

  if (sign) {
    const privateKey = Buffer.from(
      'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
      'hex'
    )
    return tx.sign(privateKey)
  }

  return tx
}
