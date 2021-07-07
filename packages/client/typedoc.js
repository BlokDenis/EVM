module.exports = {
  extends: '../../config/typedoc.js',
  entryPoints: ["lib"],
  exclude: [
    "bin/cli.ts",
    "lib/blockchain/index.ts",
    "lib/index.ts",
    "lib/net/server/index.ts",
    "lib/net/peer/index.ts",
    "lib/net/protocol/index.ts",
    "lib/rpc/index.ts",
    "lib/rpc/error-code.ts",
    "lib/rpc/modules/index.ts",
    "lib/service/index.ts",
    "lib/sync/index.ts",
    "lib/sync/fetcher/index.ts",
    "lib/util/index.ts"
  ],
}