window.BENCHMARK_DATA = {
  "lastUpdate": 1619162947779,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "christophergewecke@gmail.com",
            "name": "cgewecke",
            "username": "cgewecke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d40ba15775e646471ee49cda4a20453ef0625764",
          "message": "Merge pull request #1149 from ethereumjs/fix-devp2p-browser-dns\n\nFix devp2p browser compatibility",
          "timestamp": "2021-03-15T11:41:20-07:00",
          "tree_id": "4b080102d58a58e5d8a53cb5ab0805bda2ecfcb9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d40ba15775e646471ee49cda4a20453ef0625764"
        },
        "date": 1615833846500,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14361,
            "range": "±15.77%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17036,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16266,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13961,
            "range": "±5.78%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6200,
            "range": "±16.86%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1191,
            "range": "±6.53%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±102.94%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 130,
            "range": "±7.31%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 30.41,
            "range": "±16.77%",
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
          "id": "619ab5b14e120580e3020d0ac08a0ea7ff141bd6",
          "message": "Merge pull request #1150 from ethereumjs/common-bn-support\n\nCommon: add BN support",
          "timestamp": "2021-03-16T11:50:09+01:00",
          "tree_id": "65d1e266db03c0f05b21ca6b42dd66434c9f3563",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/619ab5b14e120580e3020d0ac08a0ea7ff141bd6"
        },
        "date": 1615892184251,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14773,
            "range": "±13.85%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17201,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16220,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14869,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6230,
            "range": "±26.34%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1180,
            "range": "±6.58%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±93.26%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 118,
            "range": "±12.28%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.99,
            "range": "±11.82%",
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
          "id": "f97d9ebcaea80d3eeb1b01dcacb2941bebec3e99",
          "message": "Merge pull request #1153 from ethereumjs/remove-genesis-hf-check\n\nMake genesis params settable for any hardfork in block headers",
          "timestamp": "2021-03-17T20:57:40+01:00",
          "tree_id": "0cdb06fbd07663dd1193353cbcddd42453e7c752",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f97d9ebcaea80d3eeb1b01dcacb2941bebec3e99"
        },
        "date": 1616011222166,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15038,
            "range": "±17.44%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16905,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15510,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13416,
            "range": "±10.63%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6314,
            "range": "±14.18%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1116,
            "range": "±7.37%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 131,
            "range": "±93.77%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 100,
            "range": "±41.39%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 26.02,
            "range": "±11.94%",
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
          "id": "b2d171ce13c9e26893152f744040108f5748b499",
          "message": "Merge pull request #1156 from ethereumjs/small-bn-fixes\n\nClient: small BN fixes",
          "timestamp": "2021-03-18T20:58:54+01:00",
          "tree_id": "0a247905805db4e2c1e184756d140556c467506a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b2d171ce13c9e26893152f744040108f5748b499"
        },
        "date": 1616097695362,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14257,
            "range": "±16.05%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15366,
            "range": "±10.36%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15194,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14781,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5754,
            "range": "±27.77%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1207,
            "range": "±6.45%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±90.75%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±15.09%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.27,
            "range": "±99.83%",
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
          "id": "4672761a4826ce0c032905b640069b666691ccff",
          "message": "Merge pull request #1151 from ethereumjs/berlin-releases\n\nBerlin Releases",
          "timestamp": "2021-03-22T15:23:24+01:00",
          "tree_id": "849616c229efebd8e50dbc78b7c65a720c0b231e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4672761a4826ce0c032905b640069b666691ccff"
        },
        "date": 1616423408705,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16527,
            "range": "±12.54%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18288,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16508,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12027,
            "range": "±17.43%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8313,
            "range": "±26.99%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1277,
            "range": "±6.07%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±110.96%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 121,
            "range": "±11.56%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.77,
            "range": "±134.52%",
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
          "id": "4bd73d18f30bbfdd5a97e22e922a0ad1e28d9e28",
          "message": "Merge pull request #1160 from ethereumjs/codecov-patch-threshold\n\ncodecov: configure threshold for patch status check",
          "timestamp": "2021-03-22T22:18:43+01:00",
          "tree_id": "bcc57e0059187aa2fb804827d55dea4cac72699b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4bd73d18f30bbfdd5a97e22e922a0ad1e28d9e28"
        },
        "date": 1616448090726,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13531,
            "range": "±13.69%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14291,
            "range": "±7.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13882,
            "range": "±3.39%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13478,
            "range": "±4.04%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7301,
            "range": "±25.89%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1060,
            "range": "±9.72%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 140,
            "range": "±80.40%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 107,
            "range": "±27.79%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.51,
            "range": "±115.82%",
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
          "id": "e4eb3288bc8c09589b2cb51da1400ce02113af61",
          "message": "devp2p: implement ETH/65 (#1159)\n\n* devp2p -> ETH: added ETH/65 protocol messages (NEW_POOLED_TRANSACTION_HASHES, GET_POOLED_TRANSACTIONS, POOLED_TRANSACTIONS), added tests\r\n* client: added ETH/65 devp2p protocol version (ETH/65 becomes new default)",
          "timestamp": "2021-03-23T10:54:18-07:00",
          "tree_id": "ca9f7d624e5b64a71f1162e1539928be64f4fe76",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e4eb3288bc8c09589b2cb51da1400ce02113af61"
        },
        "date": 1616522219942,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13887,
            "range": "±15.95%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15603,
            "range": "±6.20%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16147,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14800,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6439,
            "range": "±19.63%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1200,
            "range": "±6.64%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 113,
            "range": "±109.53%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 133,
            "range": "±7.10%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 26.27,
            "range": "±10.86%",
            "unit": "ops/sec",
            "extra": "24 samples"
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
          "id": "156664c918842995757894a46e2ea0b643af3399",
          "message": "Merge pull request #1163 from ethereumjs/republish-3.1.0-as-3.1.1\n\nNew Tx 3.1.1 Release",
          "timestamp": "2021-03-23T21:24:14+01:00",
          "tree_id": "1ca454bd5cfa0d4d01f782250b133f742869ca37",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/156664c918842995757894a46e2ea0b643af3399"
        },
        "date": 1616531210586,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13515,
            "range": "±13.98%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15102,
            "range": "±5.63%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15725,
            "range": "±2.74%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14625,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6574,
            "range": "±25.21%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1225,
            "range": "±6.32%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±99.46%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 129,
            "range": "±8.43%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.38,
            "range": "±125.62%",
            "unit": "ops/sec",
            "extra": "24 samples"
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
          "id": "918620769c4af15793df84b8b80998bc6e8f37ca",
          "message": "Merge pull request #1166 from ethereumjs/vm-add-access-list-generation\n\nVM: Refactor runTx() API tests / add Typed Transaction tests",
          "timestamp": "2021-03-25T20:31:54+01:00",
          "tree_id": "1aee39177750c543a3f5520e887e4c399564ce32",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/918620769c4af15793df84b8b80998bc6e8f37ca"
        },
        "date": 1616700869541,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18067,
            "range": "±12.82%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20048,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18166,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12150,
            "range": "±14.60%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9489,
            "range": "±27.15%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1296,
            "range": "±6.38%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 122,
            "range": "±109.86%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 122,
            "range": "±33.91%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.69,
            "range": "±125.76%",
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
          "id": "3d9854db3ce0e15263ff4c3c0db9eb31cbb967d3",
          "message": "Merge pull request #1167 from ethereumjs/fix-common-custom-chain-error\n\nBlockchain: New Release v5.2.1 / Fixed Common custom chain error / VM API test rework and custom chain test additions",
          "timestamp": "2021-03-26T21:36:40+01:00",
          "tree_id": "a1f98708728f2af66411db8c572bf3a3d51c02f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3d9854db3ce0e15263ff4c3c0db9eb31cbb967d3"
        },
        "date": 1616791164690,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14401,
            "range": "±12.55%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13260,
            "range": "±22.67%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14694,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13785,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6808,
            "range": "±25.71%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1080,
            "range": "±8.92%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 142,
            "range": "±81.13%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±20.91%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.4,
            "range": "±9.99%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christophergewecke@gmail.com",
            "name": "cgewecke",
            "username": "cgewecke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71c54f6917c79465fc1025f009a9e0d45c2cbf36",
          "message": "Merge pull request #1172 from ethereumjs/disable-e2e-temporarily\n\nTemporarily disable e2e tests (due to intermittent failures)",
          "timestamp": "2021-03-29T10:27:54-07:00",
          "tree_id": "5fb7e021d5fdc79bab2899c3162c0bc05de646f7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/71c54f6917c79465fc1025f009a9e0d45c2cbf36"
        },
        "date": 1617039028672,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14762,
            "range": "±13.07%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16701,
            "range": "±4.28%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15678,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15217,
            "range": "±2.68%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6524,
            "range": "±23.13%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1218,
            "range": "±6.37%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±94.80%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 115,
            "range": "±30.60%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.31,
            "range": "±93.89%",
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
          "id": "71e0f67147b03c431e8ce08ef83e53927223f094",
          "message": "VM: Generate Access Lists in runTx() (#1170)\n\n* util: added new EIP-1352 conformant Address.isPrecompileOrSystemAddress() function\r\n* vm: added reportAccessList option to runTx(), added simple test\r\n* vm: separated StateManager accessList generation functionality to its own method generateAccessList (not part of interface yet)\r\n* vm -> access lists: added storage maps from REVERT to access list generation logic, unified folding logic, add note on AL generation edge case\r\n* vm -> access lists: added StateManager.generateAccessList() API tests\r\n* vm -> access lists: add sorting to StateManager.generateAccessList()\r\n* karma: fix example, use tsconfig\r\n* update homestead test count from 7004 to 7001 to fix nightly runs (one test must have been removed, as one singular test takes 3 tests)\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-03-29T19:42:54-07:00",
          "tree_id": "1434d3b82e805c68d3152cc38d6e78f0caa5fef0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/71e0f67147b03c431e8ce08ef83e53927223f094"
        },
        "date": 1617072329407,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15730,
            "range": "±12.58%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17189,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15793,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14751,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5454,
            "range": "±35.28%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1132,
            "range": "±7.11%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 107,
            "range": "±109.50%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±13.79%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.56,
            "range": "±11.70%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christophergewecke@gmail.com",
            "name": "cgewecke",
            "username": "cgewecke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfc250629758f24e4b8e2e46baf75ad8c5633215",
          "message": "util -> return false (instead of throwing) for non-hex-prefixed addresses for \"isValid..\" methods (#1173)",
          "timestamp": "2021-03-29T19:58:42-07:00",
          "tree_id": "b2b14c585b42fa57a6fcf7a910677cc8fe3bd1fe",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cfc250629758f24e4b8e2e46baf75ad8c5633215"
        },
        "date": 1617073266814,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15831,
            "range": "±13.98%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17469,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17356,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12944,
            "range": "±16.52%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9880,
            "range": "±31.48%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1380,
            "range": "±5.62%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 99.56,
            "range": "±133.54%",
            "unit": "ops/sec",
            "extra": "25 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 135,
            "range": "±11.50%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.11,
            "range": "±131.71%",
            "unit": "ops/sec",
            "extra": "16 samples"
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
          "id": "486b992019572eb252ab93f150416a37f0d8162a",
          "message": "Merge pull request #1179 from ethereumjs/fix-default-access-list\n\nFix default value for empty access lists",
          "timestamp": "2021-03-31T16:17:54+02:00",
          "tree_id": "22fd8c9553c366a9fb8e6c5507393ad4e4b9c181",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/486b992019572eb252ab93f150416a37f0d8162a"
        },
        "date": 1617200441621,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15586,
            "range": "±13.53%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17892,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15679,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13541,
            "range": "±11.26%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6763,
            "range": "±21.09%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1098,
            "range": "±7.54%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 131,
            "range": "±89.41%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 111,
            "range": "±17.77%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.54,
            "range": "±11.84%",
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
          "id": "2c711c76d3371cad32617390e14bc7c4936ffcb8",
          "message": "Merge pull request #1158 from ethereumjs/add-block-builder\n\nVM: Add vm.buildBlock() and BlockBuilder API",
          "timestamp": "2021-03-31T20:34:45+02:00",
          "tree_id": "3bfe5b325a0626e9fae31d94e5a0543f81f08967",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2c711c76d3371cad32617390e14bc7c4936ffcb8"
        },
        "date": 1617215845277,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16108,
            "range": "±14.58%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18706,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17133,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14014,
            "range": "±10.54%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7309,
            "range": "±13.94%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1158,
            "range": "±7.02%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 246,
            "range": "±10.04%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 116,
            "range": "±13.47%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.85,
            "range": "±123.88%",
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
          "id": "e4e5be2a2f9e11bab52a56edb17293837ad52ea2",
          "message": "Merge pull request #1183 from ethereumjs/vm-fix-access-list-generation-issues\n\nVM: fix access list generation bugs in runTx()",
          "timestamp": "2021-03-31T23:41:35+02:00",
          "tree_id": "e7429352e73e0063f4d50ae39ed7d4d3bb729249",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e4e5be2a2f9e11bab52a56edb17293837ad52ea2"
        },
        "date": 1617227041574,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20324,
            "range": "±12.54%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23139,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 21159,
            "range": "±4.49%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7468,
            "range": "±23.98%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 22836,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1466,
            "range": "±4.91%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 114,
            "range": "±118.41%",
            "unit": "ops/sec",
            "extra": "24 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 161,
            "range": "±6.28%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.84,
            "range": "±85.82%",
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
          "id": "873393983de08a2caf2659e09742f10065b04ac8",
          "message": "Merge pull request #1174 from ethereumjs/new-vm-and-util-releases\n\nVM v5.3.0 (Access List Gen & Block Builder) / Util v7.0.10 / Tx v3.1.2 Releases",
          "timestamp": "2021-04-01T20:29:19+02:00",
          "tree_id": "dc4015468a41090c080b6fbd8850f0aee0c8f2d5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/873393983de08a2caf2659e09742f10065b04ac8"
        },
        "date": 1617301900832,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15384,
            "range": "±15.21%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15913,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16294,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14009,
            "range": "±4.99%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5840,
            "range": "±25.17%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1182,
            "range": "±6.69%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 120,
            "range": "±110.96%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 125,
            "range": "±36.07%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.84,
            "range": "±120.75%",
            "unit": "ops/sec",
            "extra": "16 samples"
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
      }
    ]
  }
}