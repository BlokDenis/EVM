import BN = require('bn.js')
import { StateManager } from './state'
import Common from 'ethereumjs-common'
import Account from 'ethereumjs-account'
import { default as runCode, RunCodeOpts, RunCodeCb } from './runCode'
import { default as runCall, RunCallOpts, RunCallCb } from './runCall'
import { default as runTx, RunTxOpts, RunTxCb } from './runTx'
import { default as runBlock, RunBlockOpts, RunBlockCb } from './runBlock'
import runBlockchain from './runBlockchain'
const promisify = require('util.promisify')
const AsyncEventEmitter = require('async-eventemitter')
const Blockchain = require('ethereumjs-blockchain')
const Trie = require('merkle-patricia-tree/secure.js')

/**
 * Options for instantiating a [[VM]].
 */
export interface VMOpts {
  /**
   * The chain the VM operates on
   */
  chain?: string
  /**
   * Hardfork rules to be used [supported: 'byzantium', 'constantinople', 'petersburg' (will throw on unsupported)]
   */
  hardfork?: string
  /**
   * A [[StateManager]] instance to use as the state store (Beta API)
   */
  stateManager?: StateManager
  /**
   * A [merkle-patricia-tree](https://github.com/ethereumjs/merkle-patricia-tree) instance for the state tree (ignored if stateManager is passed)
   * @deprecated
   */
  state?: any // TODO
  /**
   * A [blockchain](https://github.com/ethereumjs/ethereumjs-blockchain) object for storing/retrieving blocks
   */
  blockchain?: any // TODO
  /**
   * If true, create entries in the state tree for the precompiled contracts
   */
  activatePrecompiles?: boolean
  /**
   * Allows unlimited contract sizes while debugging. By setting this to `true`, the check for contract size limit of 24KB (see [EIP-170](https://git.io/vxZkK)) is bypassed
   */
  allowUnlimitedContractSize?: boolean
}

/**
 * Execution engine which can be used to run a blockchain, individual
 * blocks, individual transactions, or snippets of EVM bytecode.
 */
export default class VM extends AsyncEventEmitter {
  opts: VMOpts
  _common: Common
  stateManager: StateManager
  blockchain: any
  allowUnlimitedContractSize: boolean

  /**
   * Instantiates a new [[VM]] Object.
   */
  constructor({ chain = 'mainnet', hardfork = 'petersburg', stateManager, state, blockchain, activatePrecompiles = false, allowUnlimitedContractSize = false }: VMOpts = {}) {
    super()

    this.opts = { chain, hardfork, stateManager, state, blockchain, activatePrecompiles, allowUnlimitedContractSize }

    const supportedHardforks = ['byzantium', 'constantinople', 'petersburg']
    this._common = new Common(chain, hardfork, supportedHardforks)

    if (stateManager) {
      this.stateManager = stateManager
    } else {
      const trie = state || new Trie()
      if (activatePrecompiles) {
        for (let i = 1; i <= 8; i++) {
          trie.put(new BN(i).toArrayLike(Buffer, 'be', 20), new Account().serialize())
        }
      }
      this.stateManager = new StateManager({ trie, common: this._common })
    }

    this.blockchain = blockchain || new Blockchain({ common: this._common })

    this.allowUnlimitedContractSize = allowUnlimitedContractSize
  }

  /**
   * Processes blocks and adds them to the blockchain.
   * @param blockchain -  A [blockchain](https://github.com/ethereum/ethereumjs-blockchain) object to process
   * @param cb - the callback function
   */
  runBlockchain(blockchain: any, cb: any): void {
    runBlockchain.bind(this)(blockchain, cb)
  }

  /**
   * Processes the `block` running all of the transactions it contains and updating the miner's account
   */
  runBlock({ block, root, generate = false, skipBlockValidation = false }: RunBlockOpts, cb: RunBlockCb): void {
    runBlock.bind(this)({ block, root, generate, skipBlockValidation }, cb)
  }

  /**
   * Process a transaction. Run the vm. Transfers eth. Checks balances.
   */
  runTx(opts: RunTxOpts, cb: RunTxCb): void {
    runTx.bind(this)(opts, cb)
  }

  /**
   * runs a call (or create) operation.
   */
  runCall(opts: RunCallOpts, cb: RunCallCb): void {
    runCall.bind(this)(opts, cb)
  }

  /**
   * Runs EVM code.
   */
  runCode(opts: RunCodeOpts, cb: RunCodeCb): void {
    runCode.bind(this)(opts, cb)
  }

  /**
   * Returns a copy of the [[VM]] instance.
   */
  copy(): VM {
    return new VM({
      stateManager: this.stateManager.copy(),
      blockchain: this.blockchain,
    })
  }

  async _emit(topic: string, data: any) {
    return promisify(this.emit.bind(this))(topic, data)
  }
}
