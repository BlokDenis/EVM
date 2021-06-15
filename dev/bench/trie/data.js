window.BENCHMARK_DATA = {
  "lastUpdate": 1623746198702,
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
          "id": "7fe126cb61dba2a5bc30f5245242ec4676491089",
          "message": "Merge pull request #1244 from acolytec3/new-rpc-methods\n\nclient: New rpc method `getUncleCountByBlockNumber`",
          "timestamp": "2021-05-11T13:32:35+02:00",
          "tree_id": "d45d3cac372edbc2fb2f8be15d5da400dec1a736",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7fe126cb61dba2a5bc30f5245242ec4676491089"
        },
        "date": 1620732882016,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15972,
            "range": "±14.27%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17158,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16721,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13435,
            "range": "±14.27%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7513,
            "range": "±26.91%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1226,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 100,
            "range": "±120.96%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±33.67%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.32,
            "range": "±130.16%",
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
          "id": "4d3edaa18f3d9ad352ca13f8ff07e14d206d9ae4",
          "message": "Trie: new deleteFromDB option (default: false) (#1219)\n\n* trie: added new deleteFromDB option (default: false), added tests",
          "timestamp": "2021-05-12T13:23:48-07:00",
          "tree_id": "77ac62f0df0677357647f200596201447dbf99a9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4d3edaa18f3d9ad352ca13f8ff07e14d206d9ae4"
        },
        "date": 1620851171142,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14106,
            "range": "±15.44%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15847,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15239,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14439,
            "range": "±2.73%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5868,
            "range": "±19.16%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1127,
            "range": "±7.11%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 236,
            "range": "±9.43%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 104,
            "range": "±18.68%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.73,
            "range": "±112.17%",
            "unit": "ops/sec",
            "extra": "29 samples"
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
          "id": "a03be0fd11ea7e78b5689bb723aff70a97c9e3b1",
          "message": "Merge pull request #1148 from ethereumjs/eip1559\n\nImplement EIP1559 Fee Market + EIP3198 BaseFee",
          "timestamp": "2021-05-19T12:42:53+02:00",
          "tree_id": "0c12f136dbbd692fb84ea7b7694ecc05406d6e3f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a03be0fd11ea7e78b5689bb723aff70a97c9e3b1"
        },
        "date": 1621421321405,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16223,
            "range": "±14.52%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18428,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16562,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12503,
            "range": "±13.15%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7042,
            "range": "±22.91%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1146,
            "range": "±7.18%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 243,
            "range": "±9.67%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±36.78%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.6,
            "range": "±125.61%",
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
          "id": "f1d7ddb831dd32816f5d77db083472b46ead96f3",
          "message": "Merge pull request #1261 from ethereumjs/additional-coverage\n\ntests: additional coverage",
          "timestamp": "2021-05-20T08:57:02+02:00",
          "tree_id": "ce01f6050e62076a9acbc585a6cc5b78c2b30c6b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f1d7ddb831dd32816f5d77db083472b46ead96f3"
        },
        "date": 1621493949708,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14048,
            "range": "±12.72%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15465,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15281,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13676,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6086,
            "range": "±30.64%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1176,
            "range": "±6.14%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 140,
            "range": "±88.81%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 105,
            "range": "±33.89%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.49,
            "range": "±119.36%",
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
          "id": "d805b415e2364f02940efc8e8a125e26b7d7adeb",
          "message": "Merge pull request #1259 from ethereumjs/ci-redundancy-check\n\nci: add redundancy check for temporaryClientFix",
          "timestamp": "2021-05-20T09:37:06+02:00",
          "tree_id": "31d7ccd1c5bba49ec02e61c42ad35025fd505927",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d805b415e2364f02940efc8e8a125e26b7d7adeb"
        },
        "date": 1621496362080,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17780,
            "range": "±13.23%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19226,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16954,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13386,
            "range": "±11.45%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6236,
            "range": "±33.22%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1243,
            "range": "±5.99%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 125,
            "range": "±108.02%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 141,
            "range": "±7.85%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.75,
            "range": "±123.48%",
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
          "id": "cbaccb3ee4f69c8e743423555dd0d8072166f594",
          "message": "Merge pull request #1255 from ethereumjs/fix-getMessageToSign-return-type\n\ntx: fix getMessageToSign return type for typed txs",
          "timestamp": "2021-05-20T09:51:56+02:00",
          "tree_id": "df282d955743d17b4780965474a478ef0633a6d1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cbaccb3ee4f69c8e743423555dd0d8072166f594"
        },
        "date": 1621497248356,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17432,
            "range": "±14.08%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14879,
            "range": "±20.54%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19102,
            "range": "±3.53%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9566,
            "range": "±25.84%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18814,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1332,
            "range": "±5.24%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 115,
            "range": "±111.48%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 150,
            "range": "±6.09%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.42,
            "range": "±130.19%",
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
          "id": "452c6ae1f099fa5f10f10aa086cc3bfe0a74c606",
          "message": "Merge pull request #1262 from ethereumjs/new-mpt-release\n\nNew MPT Release v4.2.0",
          "timestamp": "2021-05-21T09:40:10+02:00",
          "tree_id": "0f0fe3a462e066685b1ee22bee2a2d75db5995b7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/452c6ae1f099fa5f10f10aa086cc3bfe0a74c606"
        },
        "date": 1621582958104,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15484,
            "range": "±15.72%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17654,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16439,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13429,
            "range": "±11.76%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5395,
            "range": "±20.93%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1106,
            "range": "±7.24%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±91.05%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 122,
            "range": "±8.09%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.86,
            "range": "±122.72%",
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
          "id": "a1e7a34d989c7991454c06567573608f33caecbf",
          "message": "Merge pull request #1264 from ethereumjs/add-runTx-blockGasUsed\n\nrunTx: add blockGasUsed param",
          "timestamp": "2021-05-21T10:09:02+02:00",
          "tree_id": "0934988f0a7eb4a7e4190a0099c75c259f3f047a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a1e7a34d989c7991454c06567573608f33caecbf"
        },
        "date": 1621584680465,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13834,
            "range": "±14.12%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11482,
            "range": "±28.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14407,
            "range": "±3.33%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13377,
            "range": "±3.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8966,
            "range": "±24.57%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 710,
            "range": "±40.49%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 117,
            "range": "±92.53%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±12.19%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.87,
            "range": "±10.14%",
            "unit": "ops/sec",
            "extra": "33 samples"
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
      }
    ]
  }
}