window.BENCHMARK_DATA = {
  "lastUpdate": 1624868651470,
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
          "id": "366bf4f6a2a0592d48c6f3018a13eacd44cc127a",
          "message": "Merge pull request #1263 from ethereumjs/london-releases\n\nLondon Releases",
          "timestamp": "2021-05-27T09:14:15+02:00",
          "tree_id": "41dd399815014455b7ed7a4e9ed026f734967b07",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/366bf4f6a2a0592d48c6f3018a13eacd44cc127a"
        },
        "date": 1622099786519,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19356,
            "range": "±13.87%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21800,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19328,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7297,
            "range": "±19.82%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19125,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1225,
            "range": "±7.12%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 112,
            "range": "±116.03%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±25.71%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.82,
            "range": "±141.58%",
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
          "id": "e31687a492e2d96abd4781101de75ff8c0a4d4f0",
          "message": "Merge pull request #1272 from ethereumjs/1559-more-tx-validation\n\n1559: add more constraints to tx validation",
          "timestamp": "2021-05-31T10:46:36+02:00",
          "tree_id": "12ea811f840e3570ba92521c541b1cf46270507f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e31687a492e2d96abd4781101de75ff8c0a4d4f0"
        },
        "date": 1622450950753,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20714,
            "range": "±13.18%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22743,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19456,
            "range": "±9.33%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7807,
            "range": "±26.84%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19630,
            "range": "±4.84%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1336,
            "range": "±5.87%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 84.3,
            "range": "±112.51%",
            "unit": "ops/sec",
            "extra": "24 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 146,
            "range": "±6.52%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 6.56,
            "range": "±123.71%",
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
          "id": "36d26c6ae39ba58853e830ed928b1a14724d3611",
          "message": "Merge pull request #1277 from acolytec3/uncle-pow-verification\n\nethash: add test case for verifyPOW for uncles",
          "timestamp": "2021-06-02T12:03:48+02:00",
          "tree_id": "cf07595810f1a42b2cb65363cf79665533e8f4f8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/36d26c6ae39ba58853e830ed928b1a14724d3611"
        },
        "date": 1622628398094,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15720,
            "range": "±14.15%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17850,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16494,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13579,
            "range": "±9.93%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6974,
            "range": "±20.10%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1115,
            "range": "±7.33%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±90.61%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 105,
            "range": "±32.53%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.76,
            "range": "±12.65%",
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
          "id": "e0724c80115a3abf57f35c69e611a5343dc8c69d",
          "message": "Merge pull request #1276 from ethereumjs/add-runTx-min-basefee-check\n\nVM: add check to runTx that tx.maxFeePerGas >= block.baseFeePerGas",
          "timestamp": "2021-06-03T10:59:47+02:00",
          "tree_id": "d96160d25dc9d4ba93e5308e28979cd732aa0a06",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e0724c80115a3abf57f35c69e611a5343dc8c69d"
        },
        "date": 1622710946202,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17521,
            "range": "±15.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19756,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17922,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11948,
            "range": "±14.52%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7526,
            "range": "±29.97%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1250,
            "range": "±7.11%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 131,
            "range": "±100.46%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 139,
            "range": "±7.68%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.68,
            "range": "±119.92%",
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
          "id": "3991c1f8be35c7de15849307bd7a9e056dc2c5fc",
          "message": "Merge pull request #1280 from ethereumjs/blockbuilder-1559-support\n\nVM: add 1559 support to blockbuilder",
          "timestamp": "2021-06-03T12:24:02+02:00",
          "tree_id": "2bd31016253def2b2f097afae02b04986642ef9d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3991c1f8be35c7de15849307bd7a9e056dc2c5fc"
        },
        "date": 1622716008451,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16188,
            "range": "±14.78%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18438,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16430,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14127,
            "range": "±7.93%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5252,
            "range": "±20.25%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1102,
            "range": "±7.58%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 130,
            "range": "±89.85%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±21.79%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.67,
            "range": "±123.80%",
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
          "id": "f28a87b14d180a86387b2600a7b5c58dbecbc655",
          "message": "Tx: Improve Code Documentation (#1283)\n\n* tx -> docs: improved getMessageToSign() documentation on all tx types\r\n* tx -> docs: improved tx.type documentation, deprecated tx.transactionType\r\n* tx -> docs: improved tx.hash() code documentation\r\n* tx -> docs: improved raw() and serialize() code docs for legacy txs\r\n* tx -> docs: improved serialize() documentation\r\n* tx -> docs: added format notes on raw(), serialize() methods and respective static constructors\r\n* tx -> docs: improve sign() documentation\r\n* tx -> docs: improved fromTxData() static constructor documentation\r\n* tx -> docs: deprecated senderR, senderS, yParity aliases\r\n* tx -> docs: rebuild documentation\r\n* Apply typo suggestions from code review",
          "timestamp": "2021-06-04T20:01:45-07:00",
          "tree_id": "394f9c56057bcb6370967ff46b5fc24c564c15db",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f28a87b14d180a86387b2600a7b5c58dbecbc655"
        },
        "date": 1622862267374,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15395,
            "range": "±12.44%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17058,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15882,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14669,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7012,
            "range": "±23.17%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1106,
            "range": "±7.58%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 130,
            "range": "±88.65%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 122,
            "range": "±8.29%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.82,
            "range": "±120.97%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d16979691f62d863b26558905f2dbcb04ca103e6",
          "message": "VM: add tests to validate calculateOmmerReward (#1282)",
          "timestamp": "2021-06-04T20:19:46-07:00",
          "tree_id": "3c8cbb2bb6f06b649ef202fae8fd3a77900c9082",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d16979691f62d863b26558905f2dbcb04ca103e6"
        },
        "date": 1622863343331,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17107,
            "range": "±13.62%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19660,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18545,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11323,
            "range": "±18.42%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8342,
            "range": "±33.37%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1126,
            "range": "±7.00%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 121,
            "range": "±100.02%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 123,
            "range": "±9.13%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.27,
            "range": "±132.07%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "212507777e02360216a9ba4ce652d71a7b398668",
          "message": "fully comment out e2e-tests file to disable GH actions (#1284)",
          "timestamp": "2021-06-04T20:37:56-07:00",
          "tree_id": "8d08ddaa24bc050eddf5e3dad2bd0aa0a36e4481",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/212507777e02360216a9ba4ce652d71a7b398668"
        },
        "date": 1622864425200,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19830,
            "range": "±15.17%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22781,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20919,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7887,
            "range": "±18.66%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20861,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1284,
            "range": "±6.12%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 121,
            "range": "±116.43%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±43.03%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.88,
            "range": "±125.46%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "652e9ee2731eb8ea4a1148f7a2ab31d793b6f3a8",
          "message": "remove skipped ci (e2e-tests) (#1285)",
          "timestamp": "2021-06-06T20:57:55-07:00",
          "tree_id": "2b9cfa87410349965b68c3e367e9344b9491fb4d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/652e9ee2731eb8ea4a1148f7a2ab31d793b6f3a8"
        },
        "date": 1623038562662,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14854,
            "range": "±14.54%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18567,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16578,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14972,
            "range": "±14.17%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8035,
            "range": "±29.66%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1321,
            "range": "±5.58%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 102,
            "range": "±129.04%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 123,
            "range": "±33.11%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.12,
            "range": "±57.96%",
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
          "id": "0a1f23283b42b7d58ae633f1952982503adcf2f5",
          "message": "Merge pull request #1265 from gabrocheleau/feat/merge-rpc-scaffolding\n\nfeat: \"the merge\" rpc scaffolding",
          "timestamp": "2021-06-07T10:37:35+02:00",
          "tree_id": "3d7263b5ac8e90fdc0f049888072932312a58814",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0a1f23283b42b7d58ae633f1952982503adcf2f5"
        },
        "date": 1623055216242,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15652,
            "range": "±14.90%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17956,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16100,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12931,
            "range": "±11.85%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7292,
            "range": "±18.03%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1112,
            "range": "±7.20%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 119,
            "range": "±99.60%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±25.94%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.13,
            "range": "±11.87%",
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
          "id": "bab5d00db71ef633051d8140a3613e19e27e81b5",
          "message": "Merge pull request #1281 from emersonmacro/common-supported-chainid-static-method\n\nCommon: added static method for checking if chainId is supported",
          "timestamp": "2021-06-07T14:59:57+02:00",
          "tree_id": "135e87e9e26aa1ce5a215ed4ed08346b81d86c37",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bab5d00db71ef633051d8140a3613e19e27e81b5"
        },
        "date": 1623070955573,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14170,
            "range": "±16.02%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16751,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16052,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14361,
            "range": "±3.64%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5970,
            "range": "±21.52%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1159,
            "range": "±6.17%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±94.94%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±18.85%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.75,
            "range": "±130.08%",
            "unit": "ops/sec",
            "extra": "19 samples"
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
          "id": "ef29902092473b78bd79f80f68047d6f2c38c71b",
          "message": "Merge pull request #1286 from ethereumjs/add-calaveras\n\ncommon: add calaveras",
          "timestamp": "2021-06-08T10:05:12+02:00",
          "tree_id": "a8ad2de1771cb0488731d7c399ca602284f78fdd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ef29902092473b78bd79f80f68047d6f2c38c71b"
        },
        "date": 1623139661927,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17346,
            "range": "±14.64%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20176,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19217,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9724,
            "range": "±20.01%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 16710,
            "range": "±16.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1188,
            "range": "±7.03%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 114,
            "range": "±108.35%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 111,
            "range": "±35.25%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.1,
            "range": "±144.46%",
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
          "id": "c8cae2c07fc3540b59e831ed79417123874d3e55",
          "message": "Merge pull request #1292 from ethereumjs/tx-usability-improvements\n\nTx: Usability Improvements",
          "timestamp": "2021-06-10T09:17:53+02:00",
          "tree_id": "ec810eed2a4dd3dca98a90e9130099f1f970f5da",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c8cae2c07fc3540b59e831ed79417123874d3e55"
        },
        "date": 1623309634736,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15971,
            "range": "±14.68%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18429,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16920,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13916,
            "range": "±9.91%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6333,
            "range": "±21.85%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1138,
            "range": "±7.09%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±92.94%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 111,
            "range": "±22.04%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.72,
            "range": "±127.56%",
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
          "id": "26de933cde3006685aee1c2d24efe442414ae096",
          "message": "Merge pull request #1295 from ethereumjs/new-releases\n\nNew Releases VM v5.4.1, Tx v3.2.1, Common v2.3.1",
          "timestamp": "2021-06-11T09:25:27+02:00",
          "tree_id": "cdf68a2a77251a5fae73b7e0f1346d3b3d68b306",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/26de933cde3006685aee1c2d24efe442414ae096"
        },
        "date": 1623396484243,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17110,
            "range": "±15.60%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18476,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17992,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12280,
            "range": "±16.51%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9513,
            "range": "±25.31%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1225,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 122,
            "range": "±101.42%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 110,
            "range": "±30.77%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.18,
            "range": "±137.46%",
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
          "id": "9a70b5a0f2694494d35be9a35db0f4d2791ade39",
          "message": "Merge pull request #1293 from ethereumjs/rename-bnToRlp\n\nutil: rename bnToRlp to bnToUnpaddedBuffer",
          "timestamp": "2021-06-11T10:35:13+02:00",
          "tree_id": "eca7af400f9e9a48352b2528beb9127d139a8e84",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9a70b5a0f2694494d35be9a35db0f4d2791ade39"
        },
        "date": 1623400660051,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16100,
            "range": "±14.89%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17802,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17039,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15920,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5806,
            "range": "±22.98%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1110,
            "range": "±8.40%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 130,
            "range": "±95.05%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 130,
            "range": "±7.80%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.47,
            "range": "±130.41%",
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
          "id": "87a98bf75e4425bcd7bf7ff779e68cad5c395ddf",
          "message": "Merge pull request #1297 from ethereumjs/migrate-config\n\nMigrate config to monorepo",
          "timestamp": "2021-06-15T10:06:00+02:00",
          "tree_id": "6746d1ea93e71669f7c708cbccb602540499a923",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/87a98bf75e4425bcd7bf7ff779e68cad5c395ddf"
        },
        "date": 1623744701723,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18930,
            "range": "±13.85%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21502,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18102,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9782,
            "range": "±16.57%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14067,
            "range": "±24.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1251,
            "range": "±6.72%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 119,
            "range": "±113.37%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 124,
            "range": "±20.31%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 20.01,
            "range": "±69.97%",
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
          "id": "026a54f79f9ac0e6cc20764e406109231a3ea840",
          "message": "Merge pull request #1296 from emersonmacro/common-dev-network-cleanup\n\nCommon: removed retired dev networks",
          "timestamp": "2021-06-15T10:33:50+02:00",
          "tree_id": "00f19bac82c5b144f8b443b1dda02840c9233ece",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/026a54f79f9ac0e6cc20764e406109231a3ea840"
        },
        "date": 1623746197751,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14689,
            "range": "±13.65%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12248,
            "range": "±16.34%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14786,
            "range": "±2.47%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12873,
            "range": "±3.97%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10042,
            "range": "±22.30%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 707,
            "range": "±23.89%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 221,
            "range": "±9.23%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 40.56,
            "range": "±136.25%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.94,
            "range": "±9.85%",
            "unit": "ops/sec",
            "extra": "43 samples"
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
          "id": "81cbc10ea74b325fd589b30bab8fe49d0871a4fb",
          "message": "Update ethereum/tests / Reintroduce VM debug logger with safe guard (#1269)\n\n* ethereum-tests: update to v9.0.2 (2021-06-12)\r\n* vm: reintroduce debug logger with safe guard",
          "timestamp": "2021-06-15T20:22:55-07:00",
          "tree_id": "71ce45823ca0c2232719f1933198b1f4104163e5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/81cbc10ea74b325fd589b30bab8fe49d0871a4fb"
        },
        "date": 1623813911014,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13831,
            "range": "±14.87%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14491,
            "range": "±6.51%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14464,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13382,
            "range": "±3.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7871,
            "range": "±19.07%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 909,
            "range": "±31.51%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±82.71%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 115,
            "range": "±11.13%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.84,
            "range": "±10.87%",
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
          "id": "35c99ff11139a04ff146dcaaea755eb710b81d0e",
          "message": "Merge pull request #1300 from ethereumjs/add-config-readme\n\nAdd config readme",
          "timestamp": "2021-06-16T11:01:15+02:00",
          "tree_id": "c40fa08df1feb240b880d0612480d19314674650",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/35c99ff11139a04ff146dcaaea755eb710b81d0e"
        },
        "date": 1623834214542,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17553,
            "range": "±13.06%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20303,
            "range": "±3.63%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17702,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11207,
            "range": "±22.24%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11171,
            "range": "±33.92%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1286,
            "range": "±5.92%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 124,
            "range": "±110.37%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 118,
            "range": "±25.21%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.1,
            "range": "±151.93%",
            "unit": "ops/sec",
            "extra": "14 samples"
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
          "id": "6365d68c1459118d05eef1906c3caf11c37ab5f6",
          "message": "Monorepo: Add src files to package build / VM lib -> src renaming (#1301)",
          "timestamp": "2021-06-16T23:16:38-07:00",
          "tree_id": "43e07e2e9d670ac830e1f1ac4b73469f0d6a8ac7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6365d68c1459118d05eef1906c3caf11c37ab5f6"
        },
        "date": 1623910726432,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19365,
            "range": "±14.14%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23022,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20216,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7959,
            "range": "±24.07%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20526,
            "range": "±7.23%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1303,
            "range": "±5.86%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 106,
            "range": "±124.40%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 125,
            "range": "±24.45%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.28,
            "range": "±85.80%",
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
          "id": "e323699c30697cf9ccbde67ece80af9c44bc3814",
          "message": "Merge pull request #1266 from gabrocheleau/feat/extend-getBlockByNumber\n\nfeat: extend eth_getBlockByNumber JSON-RPC method",
          "timestamp": "2021-06-18T09:06:21+02:00",
          "tree_id": "c4219ddc077e5bc9d921531b70519b4edcb28a86",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e323699c30697cf9ccbde67ece80af9c44bc3814"
        },
        "date": 1624000112863,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18930,
            "range": "±15.25%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22730,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20183,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8036,
            "range": "±25.61%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17118,
            "range": "±22.29%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1175,
            "range": "±6.92%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 111,
            "range": "±113.35%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±21.79%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.7,
            "range": "±107.41%",
            "unit": "ops/sec",
            "extra": "19 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samlior@foxmail.com",
            "name": "Samlior",
            "username": "samlior"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8f986e156234fa6e8c0383746ae55cd3862bdd7",
          "message": "blockchain: fix _putBlockOrHeader and add a test (#1253)\n\n* blockchain: fix _putBlockOrHeader and add a test\r\n* Fix clique reorg logic\r\n* Fix ancient header number",
          "timestamp": "2021-06-18T10:31:10-07:00",
          "tree_id": "0dee9352a37fba03e184b6cdac2221382e02a569",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f8f986e156234fa6e8c0383746ae55cd3862bdd7"
        },
        "date": 1624037608412,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14811,
            "range": "±13.15%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15580,
            "range": "±2.48%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15206,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14460,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6463,
            "range": "±22.24%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1068,
            "range": "±8.37%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 131,
            "range": "±87.03%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 99.7,
            "range": "±30.71%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.5,
            "range": "±11.56%",
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
          "id": "57b3859494312853a93340b77ca1b236571c9d65",
          "message": "Fixing node-versions GitHub actions run (#1305)",
          "timestamp": "2021-06-21T10:40:25-07:00",
          "tree_id": "21b226e3f46aedf54146d6da37d7324372865ba7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/57b3859494312853a93340b77ca1b236571c9d65"
        },
        "date": 1624297549499,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17939,
            "range": "±13.98%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20807,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19628,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11294,
            "range": "±17.50%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10963,
            "range": "±26.17%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1219,
            "range": "±5.22%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 113,
            "range": "±118.33%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 110,
            "range": "±46.30%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.17,
            "range": "±151.08%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "855e154573b2754bb47068fec10cdfea7d16ab5c",
          "message": "Merge pull request #1307 from ethereumjs/update-check-block\n\ndevp2p: update example to berlin hard fork",
          "timestamp": "2021-06-21T14:04:46-04:00",
          "tree_id": "c3c72593d056066dfb94e4f6fd9865854bf47733",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/855e154573b2754bb47068fec10cdfea7d16ab5c"
        },
        "date": 1624298817018,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20348,
            "range": "±12.70%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21517,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18878,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6861,
            "range": "±16.48%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17676,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1221,
            "range": "±7.07%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±117.74%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 106,
            "range": "±41.20%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 26.28,
            "range": "±7.45%",
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
          "id": "75aff49fb9b2b8bb64f1069f0203ec07d090be6f",
          "message": "Merge pull request #1310 from ethereumjs/calaveras-sync\n\nClient: Calaveras Sync Improvements + Working Branch",
          "timestamp": "2021-06-22T09:28:31+02:00",
          "tree_id": "0935139a3b6c43744bc5752f9948ffd8c3d223d2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/75aff49fb9b2b8bb64f1069f0203ec07d090be6f"
        },
        "date": 1624347038976,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20150,
            "range": "±14.11%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23046,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20808,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8265,
            "range": "±18.93%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 21800,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1333,
            "range": "±5.83%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 106,
            "range": "±127.90%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±47.09%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.61,
            "range": "±101.98%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e5b88c013ab821e2612513c4673ffb636f4ac52",
          "message": "vm: Add tests for bls12-g2multiexp precompile (#1308)",
          "timestamp": "2021-06-23T09:49:28-07:00",
          "tree_id": "d33870a3d61b7e872534daf8a3b16b84df40e21e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7e5b88c013ab821e2612513c4673ffb636f4ac52"
        },
        "date": 1624467098980,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19569,
            "range": "±13.86%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22516,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19484,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8082,
            "range": "±23.91%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20045,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1281,
            "range": "±6.74%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 111,
            "range": "±121.32%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 95.45,
            "range": "±66.74%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.71,
            "range": "±119.87%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "k06aaa@gmail.com",
            "name": "Anton Bukov",
            "username": "k06a"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ab249cbce237d0e1d8a912d7e791d2e82f029b5",
          "message": "Add EIP-2098 support to work with compact 64-byte signatures (#1312)",
          "timestamp": "2021-06-23T21:53:10-07:00",
          "tree_id": "4feb4f2c4ac1e2595b64b3ff245b04f46d30d0c5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6ab249cbce237d0e1d8a912d7e791d2e82f029b5"
        },
        "date": 1624510525455,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16073,
            "range": "±14.26%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18464,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17215,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15681,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5629,
            "range": "±22.44%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1142,
            "range": "±6.61%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 251,
            "range": "±9.40%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±25.01%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.35,
            "range": "±131.53%",
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
          "id": "f256a4dc326f559380b38ad59889cb61a1d7d315",
          "message": "Tx: New supports(capability) method (#1315)",
          "timestamp": "2021-06-24T11:29:56-07:00",
          "tree_id": "16482938bf2176375e534f080853fa10be089485",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f256a4dc326f559380b38ad59889cb61a1d7d315"
        },
        "date": 1624559523560,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18677,
            "range": "±13.89%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20516,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19104,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8632,
            "range": "±19.44%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17791,
            "range": "±6.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1232,
            "range": "±6.43%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 118,
            "range": "±113.05%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 121,
            "range": "±10.47%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.08,
            "range": "±134.35%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Amir Ghorbanian",
            "username": "Ghorbanian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e11c3acd2a3415faaf30b87d1599ca95632c5a4f",
          "message": "block: check and convert difficulty, gasPrice, and value parameters (#1316)",
          "timestamp": "2021-06-26T13:08:38-07:00",
          "tree_id": "b47f51a78fd0f659b3389f16b46a8409b25dca6c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e11c3acd2a3415faaf30b87d1599ca95632c5a4f"
        },
        "date": 1624738248321,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17433,
            "range": "±15.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19331,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18427,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13700,
            "range": "±15.24%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6674,
            "range": "±22.69%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1147,
            "range": "±6.83%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 119,
            "range": "±101.85%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 115,
            "range": "±22.34%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.27,
            "range": "±130.67%",
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
          "id": "daa6a546d259cf8f04691e0c057dcbd206df4860",
          "message": "Merge pull request #1319 from ethereumjs/blockchain-release-5.3.1\n\nBlockchain: v5.3.1 Release",
          "timestamp": "2021-06-28T10:22:03+02:00",
          "tree_id": "9a00d3c91ef94e4e47554dbdb1d77f96823fd950",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/daa6a546d259cf8f04691e0c057dcbd206df4860"
        },
        "date": 1624868650650,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19884,
            "range": "±13.62%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21560,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18955,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8141,
            "range": "±26.46%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19915,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1317,
            "range": "±5.92%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±125.10%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 133,
            "range": "±24.46%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.42,
            "range": "±72.79%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      }
    ]
  }
}