"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreState = void 0;
const fs = __importStar(require("fs"));
const account_1 = __importDefault(require("@ethereumjs/account"));
const ethereumjs_util_1 = require("ethereumjs-util");
const rlp_1 = require("rlp");
const from_rpc_1 = __importDefault(require("@ethereumjs/block/dist/from-rpc"));
const dist_1 = __importDefault(require("../../dist"));
const state_1 = require("../../dist/state");
const BN = require("bn.js");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const args = process.argv;
        if (args.length !== 3 && args.length !== 4) {
            console.log('Insufficient arguments');
            console.log('Usage: node BENCHMARK_SCRIPT BLOCK_FIXTURE [NUM_SAMPLES]');
            return process.exit(1);
        }
        let data = JSON.parse(fs.readFileSync(args[2], 'utf8'));
        if (!Array.isArray(data))
            data = [data];
        console.log(`Total number of blocks in data set: ${data.length}`);
        let numSamples = data.length;
        if (args.length === 4) {
            numSamples = Number(args[3]);
        }
        console.log(`Number of blocks to sample: ${numSamples}`);
        data = data.slice(0, numSamples);
        for (const blockData of data) {
            const block = from_rpc_1.default(blockData.block);
            const blockNumber = ethereumjs_util_1.bufferToInt(block.header.number);
            const stateManager = yield getPreState(blockData.preState);
            const vm = new dist_1.default({ stateManager, hardfork: 'muirGlacier' });
            suite.add(`Block ${blockNumber}`, () => __awaiter(this, void 0, void 0, function* () {
                // TODO: validate tx, add receipt and gas usage checks
                yield vm.copy().runBlock({
                    block,
                    generate: true,
                    skipBlockValidation: true,
                });
            }));
        }
        suite
            .on('cycle', function (event) {
            console.log(String(event.target));
        })
            .run();
    });
}
function getPreState(pre) {
    return __awaiter(this, void 0, void 0, function* () {
        const state = new state_1.DefaultStateManager();
        yield state.checkpoint();
        for (const k in pre) {
            const kBuf = ethereumjs_util_1.toBuffer(k);
            const obj = pre[k];
            const code = ethereumjs_util_1.toBuffer(obj.code);
            const acc = new account_1.default();
            acc.nonce = hexToBuffer(obj.nonce);
            acc.balance = hexToBuffer(obj.balance);
            const storageTrie = state._trie.copy();
            storageTrie.root = null;
            for (const sk in obj.storage) {
                const sv = obj.storage[sk];
                const valBN = new BN(sv.slice(2), 16);
                if (valBN.isZero())
                    continue;
                const val = rlp_1.encode(valBN.toBuffer('be'));
                const key = ethereumjs_util_1.setLengthLeft(Buffer.from(sk.slice(2), 'hex'), 32);
                yield storageTrie.put(key, val);
            }
            acc.stateRoot = storageTrie.root;
            yield state.putAccount(kBuf, acc);
            yield state.putContractCode(kBuf, code);
        }
        yield state.commit();
        return state;
    });
}
exports.getPreState = getPreState;
const hexToBuffer = (h, allowZero = false) => {
    const buf = ethereumjs_util_1.toBuffer(h);
    if (!allowZero && buf.toString('hex') === '00') {
        return Buffer.alloc(0);
    }
    return buf;
};
main()
    .then()
    .catch((e) => {
    throw e;
});
