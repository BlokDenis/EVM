window.BENCHMARK_DATA = {
  "lastUpdate": 1620570862645,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a141b523428a14b2e42b76e0b23025431e51fb61",
          "message": "Merge pull request #1177 from ethereumjs/tiny-fixes\n\nTiny fixes",
          "timestamp": "2021-04-06T09:47:13+02:00",
          "tree_id": "71a61dab72f3295283a3ecb9470331c2bcf85f21",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a141b523428a14b2e42b76e0b23025431e51fb61"
        },
        "date": 1617695612586,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13805,
            "range": "±11.07%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11217,
            "range": "±19.47%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14052,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13351,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9998,
            "range": "±16.13%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 697,
            "range": "±34.28%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 237,
            "range": "±8.00%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 34.13,
            "range": "±110.14%",
            "unit": "ops/sec",
            "extra": "16 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.11,
            "range": "±8.24%",
            "unit": "ops/sec",
            "extra": "44 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00fc597a817edda5dfb0673027ead3a21dd309d4",
          "message": "Merge pull request #1184 from ethereumjs/util-add-browser-dist\n\nutil, devp2p: add dist.browser to package.json",
          "timestamp": "2021-04-06T10:33:12+02:00",
          "tree_id": "1c37bcc725a656bac35c04ad9f131a32cdad41da",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/00fc597a817edda5dfb0673027ead3a21dd309d4"
        },
        "date": 1617698146030,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14617,
            "range": "±14.43%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17193,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16051,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14712,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5821,
            "range": "±23.00%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1197,
            "range": "±6.72%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±95.65%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 102,
            "range": "±40.05%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.33,
            "range": "±153.64%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36e739613597070c2f54623811f55403feb46dbd",
          "message": "Merge pull request #1190 from ethereumjs/fix-tx-constructor-bug\n\nTx: fix AccessListEIP2930Transaction constructor bug with v=0",
          "timestamp": "2021-04-08T21:25:20+02:00",
          "tree_id": "217e515e9fd218f90ff4a18fa7e53f92aac095aa",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/36e739613597070c2f54623811f55403feb46dbd"
        },
        "date": 1617910069156,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15247,
            "range": "±14.34%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16686,
            "range": "±2.38%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15567,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14542,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6103,
            "range": "±27.44%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1063,
            "range": "±7.98%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±83.64%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 99.28,
            "range": "±35.26%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.52,
            "range": "±122.35%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d34ba9018be3f9466cc6090fe742a37803b56e44",
          "message": "Merge pull request #1185 from ethereumjs/vm-updates\n\nvm: add tx receipt to RunTxResult, allow BlockBuilder to build a block with zero txs",
          "timestamp": "2021-04-09T09:59:07+02:00",
          "tree_id": "c5f79c0026fe7ea70a7a132cdce48f8c1b9aa186",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d34ba9018be3f9466cc6090fe742a37803b56e44"
        },
        "date": 1617955283874,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 21278,
            "range": "±12.94%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23247,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18782,
            "range": "±12.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10087,
            "range": "±22.27%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 21590,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1341,
            "range": "±5.24%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 87.94,
            "range": "±129.36%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 152,
            "range": "±6.23%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.61,
            "range": "±161.73%",
            "unit": "ops/sec",
            "extra": "12 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3ddea68195f76c589d0aee62880c62fedd60925",
          "message": "Merge pull request #1192 from ethereumjs/new-vm-tx-block-releases\n\nNew Releases Tx v3.1.3, Block v3.2.1, VM v5.3.1",
          "timestamp": "2021-04-10T09:31:50+02:00",
          "tree_id": "8889fd09298530ed3628cdeb0b37b96796197a70",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a3ddea68195f76c589d0aee62880c62fedd60925"
        },
        "date": 1618040289043,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13463,
            "range": "±10.56%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11440,
            "range": "±17.38%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14087,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13556,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9349,
            "range": "±18.47%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 781,
            "range": "±23.95%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 234,
            "range": "±8.20%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 68.64,
            "range": "±73.14%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.94,
            "range": "±9.22%",
            "unit": "ops/sec",
            "extra": "35 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "588650ef78da57e844456bbad5e8962d1e944aa9",
          "message": "Merge pull request #1195 from ethereumjs/fix-trie-readme\n\nFix README of Trie",
          "timestamp": "2021-04-10T11:25:17+02:00",
          "tree_id": "c6548c62268df23df56d6c1b41a0ab38eb927a19",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/588650ef78da57e844456bbad5e8962d1e944aa9"
        },
        "date": 1618046858746,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13344,
            "range": "±13.25%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14058,
            "range": "±13.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14506,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13668,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6392,
            "range": "±24.53%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 962,
            "range": "±26.53%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 139,
            "range": "±85.50%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±18.58%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.35,
            "range": "±121.09%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4af0b13c941292180a2077dfc3588a446d833aa",
          "message": "Merge pull request #1198 from ethereumjs/remove-debug-traces\n\nRemove all the debug traces from the vm",
          "timestamp": "2021-04-12T20:59:27+02:00",
          "tree_id": "b67fb4ce39b4b7b77eb4729ae35ff3614ad10ed4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a4af0b13c941292180a2077dfc3588a446d833aa"
        },
        "date": 1618254354806,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14027,
            "range": "±11.32%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13251,
            "range": "±15.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14207,
            "range": "±3.40%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13405,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9565,
            "range": "±17.82%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 747,
            "range": "±25.34%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 238,
            "range": "±7.90%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 72.44,
            "range": "±66.79%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.84,
            "range": "±12.04%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc9872972a657583eb1e3ef8d04b9f5b72562466",
          "message": "Merge pull request #1199 from ethereumjs/new-vm-release\n\nNew VM v5.3.2 Release",
          "timestamp": "2021-04-12T21:27:25+02:00",
          "tree_id": "21bed2d832ada7b943a937b00b91eefc0d7d89e9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cc9872972a657583eb1e3ef8d04b9f5b72562466"
        },
        "date": 1618255786854,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16772,
            "range": "±11.90%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19630,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18042,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13788,
            "range": "±14.27%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6866,
            "range": "±28.55%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1312,
            "range": "±5.67%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 125,
            "range": "±115.61%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 140,
            "range": "±9.00%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.31,
            "range": "±119.62%",
            "unit": "ops/sec",
            "extra": "14 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58ede194c2e179b0ee5363871271c3d164f1e768",
          "message": "VM: Small fixes in events spec file (#1208)",
          "timestamp": "2021-04-20T11:58:55-07:00",
          "tree_id": "4ac4669b7fa74d65b5421fc486aa63b1c10ef574",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/58ede194c2e179b0ee5363871271c3d164f1e768"
        },
        "date": 1618945280541,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13727,
            "range": "±15.26%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16148,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15017,
            "range": "±3.11%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13545,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4978,
            "range": "±23.59%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1152,
            "range": "±7.30%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 231,
            "range": "±9.56%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±28.52%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.39,
            "range": "±124.56%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f3a5338ae47d7418b042590e8c65c0989b3ef47",
          "message": "Merge pull request #1214 from ethereumjs/tx-messageToSign-without-hashing\n\nTx: New hashMessage parameter for getMessageToSign()",
          "timestamp": "2021-04-21T22:40:05+02:00",
          "tree_id": "747cf286d856c7f9ea918df9a583181f4ef7810c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7f3a5338ae47d7418b042590e8c65c0989b3ef47"
        },
        "date": 1619037873753,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17180,
            "range": "±12.51%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19007,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17162,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14193,
            "range": "±9.68%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6334,
            "range": "±20.59%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1214,
            "range": "±6.74%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±99.55%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 125,
            "range": "±21.85%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 19.9,
            "range": "±73.85%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8f46ffe9badae5682aae116b964b1b207d1cca2",
          "message": "Merge pull request #1213 from emersonmacro/vm-new-runTx-test\n\nVM: New test for runTX return values",
          "timestamp": "2021-04-22T09:34:46+02:00",
          "tree_id": "763770086836233d2772b3603e42b4c5fb58f752",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8f46ffe9badae5682aae116b964b1b207d1cca2"
        },
        "date": 1619077138386,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16110,
            "range": "±13.73%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17881,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16719,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13087,
            "range": "±12.86%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5688,
            "range": "±33.76%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1135,
            "range": "±7.38%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 127,
            "range": "±94.53%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±22.79%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.57,
            "range": "±127.68%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "006634a555204944137d9117821dca31dadb711a",
          "message": "Merge pull request #1217 from ethereumjs/new-tx-release\n\nTx: New Release v3.1.4",
          "timestamp": "2021-04-23T08:53:41+02:00",
          "tree_id": "ba099ab1d9d540c3fd9308356fa43c42beb476fa",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/006634a555204944137d9117821dca31dadb711a"
        },
        "date": 1619160985270,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13719,
            "range": "±13.61%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13822,
            "range": "±13.60%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14642,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13467,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7227,
            "range": "±24.71%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1026,
            "range": "±14.76%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 139,
            "range": "±83.45%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 123,
            "range": "±9.12%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.38,
            "range": "±36.66%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20012edae9b105c22b5792c14ee8a0ba22ecec35",
          "message": "Merge pull request #1220 from ethereumjs/improve-buildBlock-test-performance\n\nVM: Improve buildBlock test performance",
          "timestamp": "2021-04-23T09:26:43+02:00",
          "tree_id": "80d0f85acede1dd926abacf3af7da1a967753384",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/20012edae9b105c22b5792c14ee8a0ba22ecec35"
        },
        "date": 1619162946506,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14990,
            "range": "±14.49%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16645,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16396,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14510,
            "range": "±9.17%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6386,
            "range": "±23.15%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1227,
            "range": "±5.86%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 120,
            "range": "±107.46%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 137,
            "range": "±7.10%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.7,
            "range": "±54.37%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "228a4a57254c86943de6ab50cbb7bce56462e585",
          "message": "Merge pull request #1218 from ethereumjs/new-devp2p-release\n\ndevp2p: New Release v4.0.0",
          "timestamp": "2021-04-23T09:59:34+02:00",
          "tree_id": "18cd688afa404b0bdb7989a1bf7767a03ad7dded",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/228a4a57254c86943de6ab50cbb7bce56462e585"
        },
        "date": 1619164918233,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18735,
            "range": "±11.92%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20986,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19323,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8547,
            "range": "±21.16%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19273,
            "range": "±2.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1391,
            "range": "±5.10%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 99.11,
            "range": "±116.09%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 158,
            "range": "±6.46%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.61,
            "range": "±131.71%",
            "unit": "ops/sec",
            "extra": "13 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2be1b3c6dee219c10c79a448fa428f9bfe3f7e2",
          "message": "Merge pull request #1221 from ethereumjs/aleut-network\n\nCommon/Client: add Aleut network",
          "timestamp": "2021-04-23T14:31:38+02:00",
          "tree_id": "91febcc7b8e8e14b2b002b43d730fcc3d3a175b1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f2be1b3c6dee219c10c79a448fa428f9bfe3f7e2"
        },
        "date": 1619181244170,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13426,
            "range": "±16.56%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14516,
            "range": "±6.27%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14677,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13805,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6223,
            "range": "±25.54%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 981,
            "range": "±21.54%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 130,
            "range": "±88.58%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 108,
            "range": "±26.91%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.26,
            "range": "±121.65%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da3e27d611979efea732e5e6da5b5d50a17b978e",
          "message": "Merge pull request #1216 from ethereumjs/vm-statemanager-getStateRoot-optimization\n\nVM: remove StateManager.getStateRoot() force parameter and throwing behavior",
          "timestamp": "2021-04-26T09:28:44+02:00",
          "tree_id": "66966a11ddc15d8e937ce353dfb8daac752acd5d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/da3e27d611979efea732e5e6da5b5d50a17b978e"
        },
        "date": 1619422273636,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14668,
            "range": "±11.91%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13139,
            "range": "±12.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14827,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13783,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8373,
            "range": "±20.86%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 798,
            "range": "±29.31%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 144,
            "range": "±73.84%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 117,
            "range": "±7.54%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.02,
            "range": "±10.20%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88823f32af2129464127206e7f3ed08cd4685882",
          "message": "Merge pull request #1229 from ethereumjs/fix-vm-coverage\n\nVM: fix subfolder coverage",
          "timestamp": "2021-04-27T09:33:05+02:00",
          "tree_id": "bac96ce91560d848dc084255b12d1fb87f861abf",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/88823f32af2129464127206e7f3ed08cd4685882"
        },
        "date": 1619509068530,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14106,
            "range": "±14.38%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16301,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15201,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14317,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6889,
            "range": "±25.70%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1011,
            "range": "±15.78%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 137,
            "range": "±84.48%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±30.77%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.75,
            "range": "±10.00%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64fbffc66284e9e8c2cde652b5dbdd10b82ed523",
          "message": "Merge pull request #1168 from ethereumjs/vm-exceptionError-bug\n\nTest VM exceptionError bug",
          "timestamp": "2021-04-27T09:56:42+02:00",
          "tree_id": "60088a2eda8961978d1db2c2d0b891b7ec70bd51",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/64fbffc66284e9e8c2cde652b5dbdd10b82ed523"
        },
        "date": 1619510345460,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14142,
            "range": "±12.65%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15955,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14484,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13486,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6742,
            "range": "±23.72%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1114,
            "range": "±7.47%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±87.15%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 118,
            "range": "±17.90%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11,
            "range": "±121.85%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d68f235d151a70ede5a0fd951dc700cdf0545a3a",
          "message": "Merge pull request #1222 from ethereumjs/client-bootstrap-call-poc\n\nClient: bootstrap() extraction",
          "timestamp": "2021-04-27T10:24:08+02:00",
          "tree_id": "9f26945fd8adc988eb655b0ec061d79126981115",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d68f235d151a70ede5a0fd951dc700cdf0545a3a"
        },
        "date": 1619511991319,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19111,
            "range": "±12.57%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20288,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18273,
            "range": "±2.25%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10550,
            "range": "±16.58%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10684,
            "range": "±33.78%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1224,
            "range": "±5.56%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 125,
            "range": "±112.55%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 108,
            "range": "±40.73%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.59,
            "range": "±137.35%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf258bd774ca0ba1ccdb2b42db841d3bdc707de4",
          "message": "Merge pull request #1196 from ethereumjs/update-tests\n\nUpgrade ethereum/tests",
          "timestamp": "2021-04-27T12:34:39+02:00",
          "tree_id": "0043513ed29f1971cbad7a0d00402e7612caaae1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cf258bd774ca0ba1ccdb2b42db841d3bdc707de4"
        },
        "date": 1619519825119,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13418,
            "range": "±16.45%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14512,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14799,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13672,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6791,
            "range": "±28.20%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 944,
            "range": "±13.17%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 117,
            "range": "±95.76%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 99.29,
            "range": "±29.32%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.63,
            "range": "±10.06%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebed79d60824d92921abd167c134aef4f3fbf9d1",
          "message": "Merge pull request #1230 from ethereumjs/update-ethereum-tests\n\nVM: Update ethereum-tests to v8.0.4 (2021-04-27, post fork tests)",
          "timestamp": "2021-04-27T21:42:21+02:00",
          "tree_id": "ff97c191a5772b194f54214c91270644e6e19037",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ebed79d60824d92921abd167c134aef4f3fbf9d1"
        },
        "date": 1619552677825,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14098,
            "range": "±14.74%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15606,
            "range": "±4.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15010,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13958,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7514,
            "range": "±23.91%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1019,
            "range": "±18.95%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±88.56%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±17.52%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.19,
            "range": "±125.12%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f10275be6e86cd7d0ac6deb403564fda0b24b1e",
          "message": "Merge pull request #1233 from ethereumjs/client-await-dpt-init\n\nClient: await DPT init",
          "timestamp": "2021-04-28T21:15:39+02:00",
          "tree_id": "d68db8e6ea23edcc978352a06c7ea65947e5502d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8f10275be6e86cd7d0ac6deb403564fda0b24b1e"
        },
        "date": 1619637475699,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14105,
            "range": "±9.73%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11828,
            "range": "±19.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14640,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13469,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8890,
            "range": "±19.45%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 738,
            "range": "±30.98%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 190,
            "range": "±44.86%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 107,
            "range": "±24.00%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.45,
            "range": "±116.26%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e8fbcb4f45c4af6bbd03db732ac028fac75e5ca",
          "message": "Merge pull request #1237 from ethereumjs/fix-client-handshake-bug\n\nClient: Simple message queue to handle unhandled ETH messages during handshake",
          "timestamp": "2021-04-30T23:53:32+02:00",
          "tree_id": "293cffb60002ba16fa035dd85bac54f37618cf04",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4e8fbcb4f45c4af6bbd03db732ac028fac75e5ca"
        },
        "date": 1619819730284,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18858,
            "range": "±13.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20758,
            "range": "±2.74%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18339,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7966,
            "range": "±24.24%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 16286,
            "range": "±12.40%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1262,
            "range": "±6.70%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 95.86,
            "range": "±130.56%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 124,
            "range": "±22.27%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.05,
            "range": "±119.77%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6c9d9334d9afebdf12838b8216ef896fa03a74b",
          "message": "Added client rpc eth tests for unsupported block params (#1235)\n\n* Added client rpc eth tests for unsupported block params",
          "timestamp": "2021-05-01T17:06:21-07:00",
          "tree_id": "355ae3cec6fab7ce14fbc30c692ac30fabe31655",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f6c9d9334d9afebdf12838b8216ef896fa03a74b"
        },
        "date": 1619914106135,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18079,
            "range": "±12.46%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19617,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17665,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10540,
            "range": "±17.80%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10739,
            "range": "±30.39%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1260,
            "range": "±6.28%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 125,
            "range": "±113.90%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 127,
            "range": "±13.51%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.95,
            "range": "±120.61%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db506e6e2e0a027a95344e73c317233af49daadc",
          "message": "Merge pull request #1234 from acolytec3/master\n\nAdd test for header error conditions",
          "timestamp": "2021-05-04T18:17:31+02:00",
          "tree_id": "8fdaccb60eed098535b0baf247e2aeda83debcd6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/db506e6e2e0a027a95344e73c317233af49daadc"
        },
        "date": 1620145191616,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13201,
            "range": "±11.54%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12723,
            "range": "±17.11%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13604,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12657,
            "range": "±3.94%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9140,
            "range": "±19.39%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 901,
            "range": "±14.10%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 152,
            "range": "±71.47%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 104,
            "range": "±38.10%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.75,
            "range": "±119.18%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93e6c009ece47a76159481203d6aaaa4cb61b9a5",
          "message": "Merge pull request #1238 from hpmaxi/typed-tx-tests\n\nAdd tests for errors in typed tx",
          "timestamp": "2021-05-04T18:44:12+02:00",
          "tree_id": "6c7e94a9da712955e64e3bd6d595ba84045faf3c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/93e6c009ece47a76159481203d6aaaa4cb61b9a5"
        },
        "date": 1620146778895,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13544,
            "range": "±12.70%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15402,
            "range": "±5.31%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14922,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14120,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6697,
            "range": "±33.06%",
            "unit": "ops/sec",
            "extra": "21 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1165,
            "range": "±6.54%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 135,
            "range": "±90.15%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 110,
            "range": "±28.49%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.1,
            "range": "±13.14%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48cb11412315f8375189d8348fb6e4692885c0ed",
          "message": "Merge pull request #1241 from ethereumjs/small-fixes\n\nTwo small fixes (adds missing flow param to LesProtocol, fixes txRelay typo)",
          "timestamp": "2021-05-04T18:58:06+02:00",
          "tree_id": "5bcb0133e9eb29195f8c319c475be6230bea9132",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/48cb11412315f8375189d8348fb6e4692885c0ed"
        },
        "date": 1620147622287,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15822,
            "range": "±14.24%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17233,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16676,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13193,
            "range": "±11.80%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7525,
            "range": "±21.50%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1135,
            "range": "±7.35%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 105,
            "range": "±110.45%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±22.37%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.44,
            "range": "±11.81%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a459a0ebd8ae7f23a8d52c0fedef1111f5417ba8",
          "message": "Merge pull request #1239 from ethereumjs/eip3529\n\nImplement EIP3529",
          "timestamp": "2021-05-08T15:50:34+02:00",
          "tree_id": "79e305acd6c73b913df228132b075fe7bf82aa4a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a459a0ebd8ae7f23a8d52c0fedef1111f5417ba8"
        },
        "date": 1620482019145,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20837,
            "range": "±13.17%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23076,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19522,
            "range": "±11.10%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8170,
            "range": "±30.35%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 21679,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1358,
            "range": "±5.84%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 101,
            "range": "±127.88%",
            "unit": "ops/sec",
            "extra": "25 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 144,
            "range": "±6.93%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.97,
            "range": "±143.70%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfc25eef0eb6c9e9f9f91473345c02dc5a7441a5",
          "message": "Merge pull request #1240 from ethereumjs/eip3541\n\nImplement EIP3541",
          "timestamp": "2021-05-09T10:18:15+02:00",
          "tree_id": "471e4e048f40b79584048b34558074f6fc293ad8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/dfc25eef0eb6c9e9f9f91473345c02dc5a7441a5"
        },
        "date": 1620548431203,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13048,
            "range": "±7.22%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12185,
            "range": "±14.40%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13393,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12506,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10475,
            "range": "±16.21%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 627,
            "range": "±28.63%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 235,
            "range": "±8.34%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 83.75,
            "range": "±51.50%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.27,
            "range": "±9.35%",
            "unit": "ops/sec",
            "extra": "44 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da5919fbf2a50d1dea8040d2250e766dc238dcb8",
          "message": "Merge pull request #1245 from ethereumjs/eip3554\n\nImplement EIP3554",
          "timestamp": "2021-05-09T16:32:08+02:00",
          "tree_id": "b28e0d00a6b76fe00c8b788f0adfebd35dec8f85",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/da5919fbf2a50d1dea8040d2250e766dc238dcb8"
        },
        "date": 1620570861718,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13324,
            "range": "±11.73%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10413,
            "range": "±25.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13811,
            "range": "±3.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12751,
            "range": "±3.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9356,
            "range": "±17.72%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 649,
            "range": "±30.31%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 228,
            "range": "±7.73%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 31.89,
            "range": "±119.11%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.91,
            "range": "±8.01%",
            "unit": "ops/sec",
            "extra": "44 samples"
          }
        ]
      }
    ]
  }
}