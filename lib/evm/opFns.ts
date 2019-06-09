
import BN = require('bn.js')
import * as utils from 'ethereumjs-util'
import { ERROR, VmError } from '../exceptions'
import { RunState } from './loop'

const MASK_160 = new BN(1).shln(160).subn(1)

// Find Ceil(`this` / `num`)
function divCeil(a: BN, b: BN) {
  const div = a.div(b)
  const mod = a.mod(b)

  // Fast case - exact division
  if (mod.isZero()) return div

  // Round up
  return div.isNeg() ? div.isubn(1) : div.iaddn(1)
}

function addressToBuffer(address: BN) {
  return address.and(MASK_160).toArrayLike(Buffer, 'be', 20)
}

export interface SyncOpHandler {
  (runState: RunState): void
}

export interface AsyncOpHandler {
  (runState: RunState): Promise<void>
}

export type OpHandler = SyncOpHandler | AsyncOpHandler

// the opcode functions
export const handlers: { [k: string]: OpHandler } = {
  STOP: async function(runState: RunState) {
    trap(ERROR.STOP)
  },
  ADD: async function(runState: RunState) {
    const stackInput = runState.stack.popN(2)

    const result = (async () => {
      await new Promise(resolve => setTimeout(resolve, 100))
      const [a, b] = await Promise.all(stackInput)
      return a.add(b).mod(utils.TWO_POW256)
    })()
    
    runState.stack.push(result)
  },
  MUL: async function(runState: RunState) {
    const stackInput = runState.stack.popN(2)

    const result = (async () => {
      const [a, b] = await Promise.all(stackInput)
      return a.mul(b).mod(utils.TWO_POW256)
    })()

    runState.stack.push(result)
  },
  SUB: async function(runState: RunState) {
    const stackInput = runState.stack.popN(2)

    const result = (async () => {
      const [a, b] = await Promise.all(stackInput)
      return a.sub(b).toTwos(256)
    })()

    runState.stack.push(result)
  },
  DIV: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    let r
    if (b.isZero()) {
      r = new BN(b)
    } else {
      r = a.div(b)
    }
    runState.stack.push(Promise.resolve(r))
  },
  SDIV: async function(runState: RunState) {
    let [a, b] = await Promise.all(runState.stack.popN(2))
    let r
    if (b.isZero()) {
      r = new BN(b)
    } else {
      a = a.fromTwos(256)
      b = b.fromTwos(256)
      r = a.div(b).toTwos(256)
    }
    runState.stack.push(Promise.resolve(r))
  },
  MOD: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    let r
    if (b.isZero()) {
      r = new BN(b)
    } else {
      r = a.mod(b)
    }
    runState.stack.push(Promise.resolve(r))
  },
  SMOD: async function(runState: RunState) {
    let [a, b] = await Promise.all(runState.stack.popN(2))
    let r
    if (b.isZero()) {
      r = new BN(b)
    } else {
      a = a.fromTwos(256)
      b = b.fromTwos(256)
      r = a.abs().mod(b.abs())
      if (a.isNeg()) {
        r = r.ineg()
      }
      r = r.toTwos(256)
    }
    runState.stack.push(Promise.resolve(r))
  },
  ADDMOD: async function(runState: RunState) {
    const [a, b, c] = await Promise.all(runState.stack.popN(3))
    let r
    if (c.isZero()) {
      r = new BN(c)
    } else {
      r = a.add(b).mod(c)
    }
    runState.stack.push(Promise.resolve(r))
  },
  MULMOD: async function(runState: RunState) {
    const [a, b, c] = await Promise.all(runState.stack.popN(3))
    let r
    if (c.isZero()) {
      r = new BN(c)
    } else {
      r = a.mul(b).mod(c)
    }
    runState.stack.push(Promise.resolve(r))
  },
  EXP: async function(runState: RunState) {
    let [base, exponent] = await Promise.all(runState.stack.popN(2))
    if (exponent.isZero()) {
      runState.stack.push(Promise.resolve(new BN(1)))
      return
    }
    const byteLength = exponent.byteLength()
    if (byteLength < 1 || byteLength > 32) {
      trap(ERROR.OUT_OF_RANGE)
    }
    const gasPrice = runState._common.param('gasPrices', 'expByte')
    const amount = new BN(byteLength).muln(gasPrice)
    runState.eei.useGas(amount)

    if (base.isZero()) {
      runState.stack.push(Promise.resolve(new BN(0)))
      return
    }
    const m = BN.red(utils.TWO_POW256)
    const redBase = base.toRed(m)
    const r = redBase.redPow(exponent)
    runState.stack.push(Promise.resolve(r.fromRed()))
  },
  SIGNEXTEND: async function(runState: RunState) {
    let [k, val] = await Promise.all(runState.stack.popN(2))
    if (k.ltn(31)) {
      const signBit = k
        .muln(8)
        .iaddn(7)
        .toNumber()
      const mask = new BN(1).ishln(signBit).isubn(1)
      if (val.testn(signBit)) {
        val = val.or(mask.notn(256))
      } else {
        val = val.and(mask)
      }
    } else {
      // return the same value
      val = new BN(val)
    }
    runState.stack.push(Promise.resolve(val))
  },
  // 0x10 range - bit ops
  LT: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    const r = new BN(a.lt(b) ? 1 : 0)
    runState.stack.push(Promise.resolve(r))
  },
  GT: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    const r = new BN(a.gt(b) ? 1 : 0)
    runState.stack.push(Promise.resolve(r))
  },
  SLT: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    const r = new BN(a.fromTwos(256).lt(b.fromTwos(256)) ? 1 : 0)
    runState.stack.push(Promise.resolve(r))
  },
  SGT: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    const r = new BN(a.fromTwos(256).gt(b.fromTwos(256)) ? 1 : 0)
    runState.stack.push(Promise.resolve(r))
  },
  EQ: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    const r = new BN(a.eq(b) ? 1 : 0)
    runState.stack.push(Promise.resolve(r))
  },
  ISZERO: async function(runState: RunState) {
    const a = await runState.stack.pop()
    const r = new BN(a.isZero() ? 1 : 0)
    runState.stack.push(Promise.resolve(r))
  },
  AND: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    const r = a.and(b)
    runState.stack.push(Promise.resolve(r))
  },
  OR: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    const r = a.or(b)
    runState.stack.push(Promise.resolve(r))
  },
  XOR: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    const r = a.xor(b)
    runState.stack.push(Promise.resolve(r))
  },
  NOT: async function(runState: RunState) {
    const a = await runState.stack.pop()
    const r = a.notn(256)
    runState.stack.push(Promise.resolve(r))
  },
  BYTE: async function(runState: RunState) {
    const [pos, word] = await Promise.all(runState.stack.popN(2))
    if (pos.gten(32)) {
      runState.stack.push(Promise.resolve(new BN(0)))
      return
    }

    const r = new BN(word.shrn((31 - pos.toNumber()) * 8).andln(0xff))
    runState.stack.push(Promise.resolve(r))
  },
  SHL: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    if (!runState._common.gteHardfork('constantinople')) {
      trap(ERROR.INVALID_OPCODE)
    }
    if (a.gten(256)) {
      runState.stack.push(Promise.resolve(new BN(0)))
      return
    }

    const r = b.shln(a.toNumber()).iand(utils.MAX_INTEGER)
    runState.stack.push(Promise.resolve(r))
  },
  SHR: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    if (!runState._common.gteHardfork('constantinople')) {
      trap(ERROR.INVALID_OPCODE)
    }
    if (a.gten(256)) {
      runState.stack.push(Promise.resolve(new BN(0)))
      return
    }

    const r = b.shrn(a.toNumber())
    runState.stack.push(Promise.resolve(r))
  },
  SAR: async function(runState: RunState) {
    const [a, b] = await Promise.all(runState.stack.popN(2))
    if (!runState._common.gteHardfork('constantinople')) {
      trap(ERROR.INVALID_OPCODE)
    }

    let r
    const isSigned = b.testn(255)
    if (a.gten(256)) {
      if (isSigned) {
        r = new BN(utils.MAX_INTEGER)
      } else {
        r = new BN(0)
      }
      runState.stack.push(Promise.resolve(r))
      return
    }

    const c = b.shrn(a.toNumber())
    if (isSigned) {
      const shiftedOutWidth = 255 - a.toNumber()
      const mask = utils.MAX_INTEGER.shrn(shiftedOutWidth).shln(shiftedOutWidth)
      r = c.ior(mask)
    } else {
      r = c
    }
    runState.stack.push(Promise.resolve(r))
  },
  // 0x20 range - crypto
  SHA3: async function(runState: RunState) {
    const [offset, length] = await Promise.all(runState.stack.popN(2))
    subMemUsage(runState, offset, length)
    let data = Buffer.alloc(0)
    if (!length.isZero()) {
      data = runState.memory.read(offset.toNumber(), length.toNumber())
    }
    // copy fee
    runState.eei.useGas(
      new BN(runState._common.param('gasPrices', 'sha3Word')).imul(divCeil(length, new BN(32))),
    )
    const r = new BN(utils.keccak256(data))
    runState.stack.push(Promise.resolve(r))
  },
  // 0x30 range - closure state
  ADDRESS: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(new BN(runState.eei.getAddress())))
  },
  BALANCE: async function(runState: RunState) {
    const address = await runState.stack.pop()
    const addressBuf = addressToBuffer(address)
    const balance = await runState.eei.getExternalBalance(addressBuf)
    runState.stack.push(Promise.resolve(balance))
  },
  ORIGIN: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getTxOrigin()))
  },
  CALLER: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getCaller()))
  },
  CALLVALUE: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getCallValue()))
  },
  CALLDATALOAD: async function(runState: RunState) {
    let pos = await runState.stack.pop()
    if (pos.gt(runState.eei.getCallDataSize())) {
      runState.stack.push(Promise.resolve(new BN(0)))
      return
    }

    const i = pos.toNumber()
    let loaded = runState.eei.getCallData().slice(i, i + 32)
    loaded = loaded.length ? loaded : Buffer.from([0])
    const r = new BN(utils.setLengthRight(loaded, 32))

    runState.stack.push(Promise.resolve(r))
  },
  CALLDATASIZE: async function(runState: RunState) {
    const r = runState.eei.getCallDataSize()
    runState.stack.push(Promise.resolve(r))
  },
  CALLDATACOPY: async function(runState: RunState) {
    let [memOffset, dataOffset, dataLength] = await Promise.all(runState.stack.popN(3))

    subMemUsage(runState, memOffset, dataLength)
    runState.eei.useGas(
      new BN(runState._common.param('gasPrices', 'copy')).imul(divCeil(dataLength, new BN(32))),
    )

    const data = getDataSlice(runState.eei.getCallData(), dataOffset, dataLength)
    const memOffsetNum = memOffset.toNumber()
    const dataLengthNum = dataLength.toNumber()
    runState.memory.extend(memOffsetNum, dataLengthNum)
    runState.memory.write(memOffsetNum, dataLengthNum, data)
  },
  CODESIZE: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getCodeSize()))
  },
  CODECOPY: async function(runState: RunState) {
    let [memOffset, codeOffset, length] = await Promise.all(runState.stack.popN(3))

    subMemUsage(runState, memOffset, length)
    runState.eei.useGas(
      new BN(runState._common.param('gasPrices', 'copy')).imul(divCeil(length, new BN(32))),
    )

    const data = getDataSlice(runState.eei.getCode(), codeOffset, length)
    const memOffsetNum = memOffset.toNumber()
    const lengthNum = length.toNumber()
    runState.memory.extend(memOffsetNum, lengthNum)
    runState.memory.write(memOffsetNum, lengthNum, data)
  },
  EXTCODESIZE: async function(runState: RunState) {
    const address = await runState.stack.pop()
    const size = await runState.eei.getExternalCodeSize(address)
    runState.stack.push(Promise.resolve(size))
  },
  EXTCODECOPY: async function(runState: RunState) {
    let [address, memOffset, codeOffset, length] = await Promise.all(runState.stack.popN(4))

    // FIXME: for some reason this must come before subGas
    subMemUsage(runState, memOffset, length)
    // copy fee
    runState.eei.useGas(
      new BN(runState._common.param('gasPrices', 'copy')).imul(divCeil(length, new BN(32))),
    )

    const code = await runState.eei.getExternalCode(address)

    const data = getDataSlice(code, codeOffset, length)
    const memOffsetNum = memOffset.toNumber()
    const lengthNum = length.toNumber()
    runState.memory.extend(memOffsetNum, lengthNum)
    runState.memory.write(memOffsetNum, lengthNum, data)
  },
  EXTCODEHASH: async function(runState: RunState) {
    let address = await runState.stack.pop()
    if (!runState._common.gteHardfork('constantinople')) {
      trap(ERROR.INVALID_OPCODE)
    }

    const addressBuf = addressToBuffer(address)
    const empty = await runState.eei.isAccountEmpty(addressBuf)
    if (empty) {
      runState.stack.push(Promise.resolve(new BN(0)))
      return
    }

    const code = await runState.eei.getExternalCode(address)
    if (code.length === 0) {
      runState.stack.push(Promise.resolve(new BN(utils.KECCAK256_NULL)))
      return
    }

    runState.stack.push(Promise.resolve(new BN(utils.keccak256(code))))
  },
  RETURNDATASIZE: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getReturnDataSize()))
  },
  RETURNDATACOPY: async function(runState: RunState) {
    let [memOffset, returnDataOffset, length] = await Promise.all(runState.stack.popN(3))

    if (returnDataOffset.add(length).gt(runState.eei.getReturnDataSize())) {
      trap(ERROR.OUT_OF_GAS)
    }

    subMemUsage(runState, memOffset, length)
    runState.eei.useGas(
      new BN(runState._common.param('gasPrices', 'copy')).mul(divCeil(length, new BN(32))),
    )

    const data = getDataSlice(runState.eei.getReturnData(), returnDataOffset, length)
    const memOffsetNum = memOffset.toNumber()
    const lengthNum = length.toNumber()
    runState.memory.extend(memOffsetNum, lengthNum)
    runState.memory.write(memOffsetNum, lengthNum, data)
  },
  GASPRICE: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getTxGasPrice()))
  },
  // '0x40' range - block operations
  BLOCKHASH: async function(runState: RunState) {
    const number = await runState.stack.pop()

    const diff = runState.eei.getBlockNumber().sub(number)
    // block lookups must be within the past 256 blocks
    if (diff.gtn(256) || diff.lten(0)) {
      runState.stack.push(Promise.resolve(new BN(0)))
      return
    }

    const hash = await runState.eei.getBlockHash(number)
    runState.stack.push(Promise.resolve(hash))
  },
  COINBASE: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getBlockCoinbase()))
  },
  TIMESTAMP: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getBlockTimestamp()))
  },
  NUMBER: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getBlockNumber()))
  },
  DIFFICULTY: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getBlockDifficulty()))
  },
  GASLIMIT: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.eei.getBlockGasLimit()))
  },
  // 0x50 range - 'storage' and execution
  POP: async function(runState: RunState) {
    await runState.stack.pop()
  },
  MLOAD: async function(runState: RunState) {
    const pos = await runState.stack.pop()
    subMemUsage(runState, pos, new BN(32))
    const word = runState.memory.read(pos.toNumber(), 32)
    runState.stack.push(Promise.resolve(new BN(word)))
  },
  MSTORE: async function(runState: RunState) {
    let [offset, word] = await Promise.all(runState.stack.popN(2))
    const buf = word.toArrayLike(Buffer, 'be', 32)
    subMemUsage(runState, offset, new BN(32))
    const offsetNum = offset.toNumber()
    runState.memory.extend(offsetNum, 32)
    runState.memory.write(offsetNum, 32, buf)
  },
  MSTORE8: async function(runState: RunState) {
    let [offset, byte] = await Promise.all(runState.stack.popN(2))

    // NOTE: we're using a 'trick' here to get the least significant byte
    // NOTE: force cast necessary because `BN.andln` returns number but
    // the types are wrong
    const buf = Buffer.from([(byte.andln(0xff) as unknown) as number])
    subMemUsage(runState, offset, new BN(1))
    const offsetNum = offset.toNumber()
    runState.memory.extend(offsetNum, 1)
    runState.memory.write(offsetNum, 1, buf)
  },
  SLOAD: async function(runState: RunState) {
    let keyP = runState.stack.pop()
    const p = (async () => {
      await new Promise(resolve => setTimeout(resolve, 100))
      const key = await keyP
      const keyBuf = key.toArrayLike(Buffer, 'be', 32)
  
      const value = await runState.eei.storageLoad(keyBuf)
      const valueBN = value.length ? new BN(value) : new BN(0)
      return valueBN
    })()
    
    runState.stack.push(p)

    // let key = await runState.stack.pop()
    // const keyBuf = key.toArrayLike(Buffer, 'be', 32)

    // const value = await runState.eei.storageLoad(keyBuf)
    // const valueBN = value.length ? new BN(value) : new BN(0)
    // runState.stack.push(Promise.resolve(valueBN))
  },
  SSTORE: async function(runState: RunState) {
    if (runState.eei.isStatic()) {
      trap(ERROR.STATIC_STATE_CHANGE)
    }

    let [key, val] = await Promise.all(runState.stack.popN(2))

    const keyBuf = key.toArrayLike(Buffer, 'be', 32)
    // NOTE: this should be the shortest representation
    let value
    if (val.isZero()) {
      value = Buffer.from([])
    } else {
      value = val.toArrayLike(Buffer, 'be')
    }

    // TODO: Replace getContractStorage with EEI method
    const found = await getContractStorage(runState, runState.eei.getAddress(), keyBuf)
    updateSstoreGas(runState, found, value)
    await runState.eei.storageStore(keyBuf, value)
  },
  JUMP: async function(runState: RunState) {
    const dest = await runState.stack.pop()
    if (dest.gt(runState.eei.getCodeSize())) {
      trap(ERROR.INVALID_JUMP + ' at ' + describeLocation(runState))
    }

    const destNum = dest.toNumber()

    if (!jumpIsValid(runState, destNum)) {
      trap(ERROR.INVALID_JUMP + ' at ' + describeLocation(runState))
    }

    runState.programCounter = destNum
  },
  JUMPI: async function(runState: RunState) {
    let [dest, cond] = await Promise.all(runState.stack.popN(2))
    if (!cond.isZero()) {
      if (dest.gt(runState.eei.getCodeSize())) {
        trap(ERROR.INVALID_JUMP + ' at ' + describeLocation(runState))
      }

      const destNum = dest.toNumber()

      if (!jumpIsValid(runState, destNum)) {
        trap(ERROR.INVALID_JUMP + ' at ' + describeLocation(runState))
      }

      runState.programCounter = destNum
    }
  },
  PC: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(new BN(runState.programCounter - 1)))
  },
  MSIZE: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(runState.memoryWordCount.muln(32)))
  },
  GAS: async function(runState: RunState) {
    runState.stack.push(Promise.resolve(new BN(runState.eei.getGasLeft())))
  },
  JUMPDEST: async function(runState: RunState) {},
  PUSH: async function(runState: RunState) {
    const numToPush = runState.opCode - 0x5f
    const loaded = new BN(
      runState.eei
        .getCode()
        .slice(runState.programCounter, runState.programCounter + numToPush)
        .toString('hex'),
      16,
    )
    runState.programCounter += numToPush
    runState.stack.push(Promise.resolve(loaded))
  },
  DUP: async function(runState: RunState) {
    const stackPos = runState.opCode - 0x7f
    runState.stack.dup(stackPos)
  },
  SWAP: async function(runState: RunState) {
    const stackPos = runState.opCode - 0x8f
    runState.stack.swap(stackPos)
  },
  LOG: async function(runState: RunState) {
    if (runState.eei.isStatic()) {
      trap(ERROR.STATIC_STATE_CHANGE)
    }

    let [memOffset, memLength] = await Promise.all(runState.stack.popN(2))

    const topicsCount = runState.opCode - 0xa0
    if (topicsCount < 0 || topicsCount > 4) {
      trap(ERROR.OUT_OF_RANGE)
    }

    let topics = await Promise.all(runState.stack.popN(topicsCount))
    const topicsBuf = topics.map(function(a) {
      return a.toArrayLike(Buffer, 'be', 32)
    })

    subMemUsage(runState, memOffset, memLength)
    let mem = Buffer.alloc(0)
    if (!memLength.isZero()) {
      mem = runState.memory.read(memOffset.toNumber(), memLength.toNumber())
    }
    runState.eei.useGas(
      new BN(runState._common.param('gasPrices', 'logTopic'))
        .imuln(topicsCount)
        .iadd(memLength.muln(runState._common.param('gasPrices', 'logData'))),
    )

    runState.eei.log(mem, topicsCount, topicsBuf)
  },

  // '0xf0' range - closures
  CREATE: async function(runState: RunState) {
    if (runState.eei.isStatic()) {
      trap(ERROR.STATIC_STATE_CHANGE)
    }

    const [value, offset, length] = await Promise.all(runState.stack.popN(3))

    subMemUsage(runState, offset, length)
    let gasLimit = new BN(runState.eei.getGasLeft())
    gasLimit = maxCallGas(gasLimit, runState.eei.getGasLeft())

    let data = Buffer.alloc(0)
    if (!length.isZero()) {
      data = runState.memory.read(offset.toNumber(), length.toNumber())
    }

    const ret = await runState.eei.create(gasLimit, value, data)
    runState.stack.push(Promise.resolve(ret))
  },
  CREATE2: async function(runState: RunState) {
    if (!runState._common.gteHardfork('constantinople')) {
      trap(ERROR.INVALID_OPCODE)
    }

    if (runState.eei.isStatic()) {
      trap(ERROR.STATIC_STATE_CHANGE)
    }

    const [value, offset, length, salt] = await Promise.all(runState.stack.popN(4))

    subMemUsage(runState, offset, length)
    // Deduct gas costs for hashing
    runState.eei.useGas(
      new BN(runState._common.param('gasPrices', 'sha3Word')).imul(divCeil(length, new BN(32))),
    )
    let gasLimit = new BN(runState.eei.getGasLeft())
    gasLimit = maxCallGas(gasLimit, runState.eei.getGasLeft())

    let data = Buffer.alloc(0)
    if (!length.isZero()) {
      data = runState.memory.read(offset.toNumber(), length.toNumber())
    }

    const ret = await runState.eei.create2(
      gasLimit,
      value,
      data,
      salt.toArrayLike(Buffer, 'be', 32),
    )
    runState.stack.push(Promise.resolve(ret))
  },
  CALL: async function(runState: RunState) {
    let [
      gasLimit,
      toAddress,
      value,
      inOffset,
      inLength,
      outOffset,
      outLength,
    ] = await Promise.all(runState.stack.popN(7))
    const toAddressBuf = addressToBuffer(toAddress)

    if (runState.eei.isStatic() && !value.isZero()) {
      trap(ERROR.STATIC_STATE_CHANGE)
    }

    subMemUsage(runState, inOffset, inLength)
    subMemUsage(runState, outOffset, outLength)
    if (!value.isZero()) {
      runState.eei.useGas(new BN(runState._common.param('gasPrices', 'callValueTransfer')))
    }
    gasLimit = maxCallGas(gasLimit, runState.eei.getGasLeft())

    let data = Buffer.alloc(0)
    if (!inLength.isZero()) {
      data = runState.memory.read(inOffset.toNumber(), inLength.toNumber())
    }

    const empty = await runState.eei.isAccountEmpty(toAddressBuf)
    if (empty) {
      if (!value.isZero()) {
        runState.eei.useGas(new BN(runState._common.param('gasPrices', 'callNewAccount')))
      }
    }

    if (!value.isZero()) {
      // TODO: Don't use private attr directly
      runState.eei._gasLeft.iaddn(runState._common.param('gasPrices', 'callStipend'))
      gasLimit.iaddn(runState._common.param('gasPrices', 'callStipend'))
    }

    const ret = await runState.eei.call(gasLimit, toAddressBuf, value, data)
    // Write return data to memory
    writeCallOutput(runState, outOffset, outLength)
    runState.stack.push(Promise.resolve(ret))
  },
  CALLCODE: async function(runState: RunState) {
    let [
      gasLimit,
      toAddress,
      value,
      inOffset,
      inLength,
      outOffset,
      outLength,
    ] = await Promise.all(runState.stack.popN(7))
    const toAddressBuf = addressToBuffer(toAddress)

    subMemUsage(runState, inOffset, inLength)
    subMemUsage(runState, outOffset, outLength)
    if (!value.isZero()) {
      runState.eei.useGas(new BN(runState._common.param('gasPrices', 'callValueTransfer')))
    }
    gasLimit = maxCallGas(gasLimit, runState.eei.getGasLeft())
    if (!value.isZero()) {
      // TODO: Don't use private attr directly
      runState.eei._gasLeft.iaddn(runState._common.param('gasPrices', 'callStipend'))
      gasLimit.iaddn(runState._common.param('gasPrices', 'callStipend'))
    }

    let data = Buffer.alloc(0)
    if (!inLength.isZero()) {
      data = runState.memory.read(inOffset.toNumber(), inLength.toNumber())
    }

    const ret = await runState.eei.callCode(gasLimit, toAddressBuf, value, data)
    // Write return data to memory
    writeCallOutput(runState, outOffset, outLength)
    runState.stack.push(Promise.resolve(ret))
  },
  DELEGATECALL: async function(runState: RunState) {
    const value = runState.eei.getCallValue()
    let [gasLimit, toAddress, inOffset, inLength, outOffset, outLength] = await Promise.all(runState.stack.popN(6))
    const toAddressBuf = addressToBuffer(toAddress)

    subMemUsage(runState, inOffset, inLength)
    subMemUsage(runState, outOffset, outLength)
    gasLimit = maxCallGas(gasLimit, runState.eei.getGasLeft())

    let data = Buffer.alloc(0)
    if (!inLength.isZero()) {
      data = runState.memory.read(inOffset.toNumber(), inLength.toNumber())
    }

    const ret = await runState.eei.callDelegate(gasLimit, toAddressBuf, value, data)
    // Write return data to memory
    writeCallOutput(runState, outOffset, outLength)
    runState.stack.push(Promise.resolve(ret))
  },
  STATICCALL: async function(runState: RunState) {
    const value = new BN(0)
    let [gasLimit, toAddress, inOffset, inLength, outOffset, outLength] = await Promise.all(runState.stack.popN(6))
    const toAddressBuf = addressToBuffer(toAddress)

    subMemUsage(runState, inOffset, inLength)
    subMemUsage(runState, outOffset, outLength)
    gasLimit = maxCallGas(gasLimit, runState.eei.getGasLeft())

    let data = Buffer.alloc(0)
    if (!inLength.isZero()) {
      data = runState.memory.read(inOffset.toNumber(), inLength.toNumber())
    }

    const ret = await runState.eei.callStatic(gasLimit, toAddressBuf, value, data)
    // Write return data to memory
    writeCallOutput(runState, outOffset, outLength)
    runState.stack.push(Promise.resolve(ret))
  },
  RETURN: async function(runState: RunState) {
    const [offset, length] = await Promise.all(runState.stack.popN(2))
    subMemUsage(runState, offset, length)
    let returnData = Buffer.alloc(0)
    if (!length.isZero()) {
      returnData = runState.memory.read(offset.toNumber(), length.toNumber())
    }
    runState.eei.finish(returnData)
  },
  REVERT: async function(runState: RunState) {
    const [offset, length] = await Promise.all(runState.stack.popN(2))
    subMemUsage(runState, offset, length)
    let returnData = Buffer.alloc(0)
    if (!length.isZero()) {
      returnData = runState.memory.read(offset.toNumber(), length.toNumber())
    }
    runState.eei.revert(returnData)
  },
  // '0x70', range - other
  SELFDESTRUCT: async function(runState: RunState) {
    let selfdestructToAddress = await runState.stack.pop()
    if (runState.eei.isStatic()) {
      trap(ERROR.STATIC_STATE_CHANGE)
    }

    const selfdestructToAddressBuf = addressToBuffer(selfdestructToAddress)
    const balance = await runState.eei.getExternalBalance(runState.eei.getAddress())
    if (balance.gtn(0)) {
      const empty = await runState.eei.isAccountEmpty(selfdestructToAddressBuf)
      if (empty) {
        runState.eei.useGas(new BN(runState._common.param('gasPrices', 'callNewAccount')))
      }
    }

    return runState.eei.selfDestruct(selfdestructToAddressBuf)
  },
}

function describeLocation(runState: RunState) {
  var hash = utils.keccak256(runState.eei.getCode()).toString('hex')
  var address = runState.eei.getAddress().toString('hex')
  var pc = runState.programCounter - 1
  return hash + '/' + address + ':' + pc
}

function trap(err: string) {
  // TODO: facilitate extra data along with errors
  throw new VmError(err as ERROR)
}

/**
 * Subtracts the amount needed for memory usage from `runState.gasLeft`
 * @method subMemUsage
 * @param {Object} runState
 * @param {BN} offset
 * @param {BN} length
 * @returns {String}
 */
function subMemUsage(runState: RunState, offset: BN, length: BN) {
  // YP (225): access with zero length will not extend the memory
  if (length.isZero()) return

  const newMemoryWordCount = divCeil(offset.add(length), new BN(32))
  if (newMemoryWordCount.lte(runState.memoryWordCount)) return

  const words = newMemoryWordCount
  const fee = new BN(runState._common.param('gasPrices', 'memory'))
  const quadCoeff = new BN(runState._common.param('gasPrices', 'quadCoeffDiv'))
  // words * 3 + words ^2 / 512
  const cost = words.mul(fee).add(words.mul(words).div(quadCoeff))

  if (cost.gt(runState.highestMemCost)) {
    runState.eei.useGas(cost.sub(runState.highestMemCost))
    runState.highestMemCost = cost
  }

  runState.memoryWordCount = newMemoryWordCount
}

/**
 * Returns an overflow-safe slice of an array. It right-pads
 * the data with zeros to `length`.
 * @param {BN} offset
 * @param {BN} length
 * @param {Buffer} data
 */
function getDataSlice(data: Buffer, offset: BN, length: BN): Buffer {
  let len = new BN(data.length)
  if (offset.gt(len)) {
    offset = len
  }

  let end = offset.add(length)
  if (end.gt(len)) {
    end = len
  }

  data = data.slice(offset.toNumber(), end.toNumber())
  // Right-pad with zeros to fill dataLength bytes
  data = utils.setLengthRight(data, length.toNumber())

  return data
}

// checks if a jump is valid given a destination
function jumpIsValid(runState: RunState, dest: number): boolean {
  return runState.validJumps.indexOf(dest) !== -1
}

function maxCallGas(gasLimit: BN, gasLeft: BN): BN {
  const gasAllowed = gasLeft.sub(gasLeft.divn(64))
  return gasLimit.gt(gasAllowed) ? gasAllowed : gasLimit
}

function getContractStorage(runState: RunState, address: Buffer, key: Buffer) {
  return new Promise((resolve, reject) => {
    const cb = (err: Error | null, res: any) => {
      if (err) return reject(err)
      resolve(res)
    }
    runState.stateManager.getContractStorage(address, key, (err: Error, current: Buffer) => {
      if (err) return cb(err, null)
      if (runState._common.hardfork() === 'constantinople') {
        runState.stateManager.getOriginalContractStorage(
          address,
          key,
          (err: Error, original: Buffer) => {
            if (err) return cb(err, null)
            cb(null, { current, original })
          },
        )
      } else {
        cb(null, current)
      }
    })
  })
}

function updateSstoreGas(runState: RunState, found: any, value: Buffer) {
  if (runState._common.hardfork() === 'constantinople') {
    var original = found.original
    var current = found.current
    if (current.equals(value)) {
      // If current value equals new value (this is a no-op), 200 gas is deducted.
      runState.eei.useGas(new BN(runState._common.param('gasPrices', 'netSstoreNoopGas')))
      return
    }
    // If current value does not equal new value
    if (original.equals(current)) {
      // If original value equals current value (this storage slot has not been changed by the current execution context)
      if (original.length === 0) {
        // If original value is 0, 20000 gas is deducted.
        return runState.eei.useGas(new BN(runState._common.param('gasPrices', 'netSstoreInitGas')))
      }
      if (value.length === 0) {
        // If new value is 0, add 15000 gas to refund counter.
        runState.eei.refundGas(new BN(runState._common.param('gasPrices', 'netSstoreClearRefund')))
      }
      // Otherwise, 5000 gas is deducted.
      return runState.eei.useGas(new BN(runState._common.param('gasPrices', 'netSstoreCleanGas')))
    }
    // If original value does not equal current value (this storage slot is dirty), 200 gas is deducted. Apply both of the following clauses.
    if (original.length !== 0) {
      // If original value is not 0
      if (current.length === 0) {
        // If current value is 0 (also means that new value is not 0), remove 15000 gas from refund counter. We can prove that refund counter will never go below 0.
        // TODO: Remove usage of private attr
        runState.eei._result.gasRefund = runState.eei._result.gasRefund.subn(
          runState._common.param('gasPrices', 'netSstoreClearRefund'),
        )
      } else if (value.length === 0) {
        // If new value is 0 (also means that current value is not 0), add 15000 gas to refund counter.
        runState.eei.refundGas(new BN(runState._common.param('gasPrices', 'netSstoreClearRefund')))
      }
    }
    if (original.equals(value)) {
      // If original value equals new value (this storage slot is reset)
      if (original.length === 0) {
        // If original value is 0, add 19800 gas to refund counter.
        runState.eei.refundGas(
          new BN(runState._common.param('gasPrices', 'netSstoreResetClearRefund')),
        )
      } else {
        // Otherwise, add 4800 gas to refund counter.
        runState.eei.refundGas(new BN(runState._common.param('gasPrices', 'netSstoreResetRefund')))
      }
    }
    return runState.eei.useGas(new BN(runState._common.param('gasPrices', 'netSstoreDirtyGas')))
  } else {
    if (value.length === 0 && !found.length) {
      runState.eei.useGas(new BN(runState._common.param('gasPrices', 'sstoreReset')))
    } else if (value.length === 0 && found.length) {
      runState.eei.useGas(new BN(runState._common.param('gasPrices', 'sstoreReset')))
      runState.eei.refundGas(new BN(runState._common.param('gasPrices', 'sstoreRefund')))
    } else if (value.length !== 0 && !found.length) {
      runState.eei.useGas(new BN(runState._common.param('gasPrices', 'sstoreSet')))
    } else if (value.length !== 0 && found.length) {
      runState.eei.useGas(new BN(runState._common.param('gasPrices', 'sstoreReset')))
    }
  }
}

function writeCallOutput(runState: RunState, outOffset: BN, outLength: BN) {
  const returnData = runState.eei.getReturnData()
  if (returnData.length > 0) {
    const memOffset = outOffset.toNumber()
    let dataLength = outLength.toNumber()
    if (returnData.length < dataLength) {
      dataLength = returnData.length
    }
    const data = getDataSlice(returnData, new BN(0), new BN(dataLength))
    runState.memory.extend(memOffset, dataLength)
    runState.memory.write(memOffset, dataLength, data)
  }
}
