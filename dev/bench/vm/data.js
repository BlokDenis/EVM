window.BENCHMARK_DATA = {
  "lastUpdate": 1617073364865,
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
          "id": "562010578317aa871ffb86d5a38017a085fb7cb6",
          "message": "Remove @types/bn.js from block,blockchain,trie,tx,vm packages (#1136)\n\n* deps -> remove @types/bn.js from block,blockchain,trie,tx,vm packages\r\n* vm -> import BN from ethereumjs-util everywhere\r\n* tx -> import BN from ethereumjs-util in TransactionFactory.ts",
          "timestamp": "2021-03-04T19:07:53-08:00",
          "tree_id": "2855768b4cd2b83560f1932ebcaf550ed13fe3c7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/562010578317aa871ffb86d5a38017a085fb7cb6"
        },
        "date": 1614914120450,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1435,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1429,
            "range": "±4.85%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1456,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1444,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1209,
            "range": "±13.27%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1420,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1373,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1367,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1369,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1365,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "82 samples"
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
          "id": "11a29cfed063d00f65bb345ad1995671aac45fd6",
          "message": "Merge pull request #1129 from ethereumjs/yolov3-client\n\nCommon: add YoloV3 network",
          "timestamp": "2021-03-05T12:04:14+01:00",
          "tree_id": "d363ff86a7b66642db38e724e1b178cc673ebcb1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/11a29cfed063d00f65bb345ad1995671aac45fd6"
        },
        "date": 1614942644490,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1716,
            "range": "±4.74%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1661,
            "range": "±7.25%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1715,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1551,
            "range": "±9.61%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1713,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1694,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1677,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1685,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1502,
            "range": "±10.45%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1179,
            "range": "±20.11%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
          "id": "2e7769369dab602b97c8dc477bc978c922a1883f",
          "message": "Merge pull request #1138 from ethereumjs/improve-tx-backwards-compatibility\n\nTx Renaming / Improve backwards-compatibility",
          "timestamp": "2021-03-05T18:53:54+01:00",
          "tree_id": "8fa243b580cba853ba427c1019e0feda6bb38a0b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2e7769369dab602b97c8dc477bc978c922a1883f"
        },
        "date": 1614967038056,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1836,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1749,
            "range": "±4.70%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1682,
            "range": "±8.76%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1833,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1755,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1707,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1296,
            "range": "±14.83%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1606,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1555,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1671,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "c8908ea70ad3d04c0b629bee092101e17b15d36b",
          "message": "VM, Block: large ChainID ecrecover fixes (#1139)\n\n* vm: fixed ecrecover call in ECRECOVER precompile for large chain IDs\r\n* block: fixed cliqueSigner() address recovery from signature for large chain IDs",
          "timestamp": "2021-03-05T10:27:53-08:00",
          "tree_id": "a1860ee25e53e702ed753232fbdd9792b3367be9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c8908ea70ad3d04c0b629bee092101e17b15d36b"
        },
        "date": 1614969087967,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1620,
            "range": "±4.19%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1565,
            "range": "±5.05%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1463,
            "range": "±8.50%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1557,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1553,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1488,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1154,
            "range": "±15.71%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1485,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1408,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1457,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "80 samples"
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
          "id": "94651f7b42bb24a34dcc7fdd4d2daadb568d7c23",
          "message": "Merge pull request #1141 from ethereumjs/eip2718-eip2930-improvements\n\nEIP-2718/EIP-2930 Typed Tx Improvements and Tests",
          "timestamp": "2021-03-07T18:27:47+01:00",
          "tree_id": "d671948fd13c0b07df55977664b504e8cf25114e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/94651f7b42bb24a34dcc7fdd4d2daadb568d7c23"
        },
        "date": 1615138286527,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1449,
            "range": "±4.55%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1456,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1483,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1493,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1258,
            "range": "±12.63%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1435,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1424,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1413,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1164,
            "range": "±13.34%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1153,
            "range": "±14.27%",
            "unit": "ops/sec",
            "extra": "72 samples"
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
          "id": "82018919031a8dd9fd15fb62882ac33ce1c587f8",
          "message": "Merge pull request #1142 from ethereumjs/update-tests-and-berlin-HF\n\nUpdate ethereum-tests submodule to 8.0.0 / Remove EIP-2315 from berlin",
          "timestamp": "2021-03-08T22:45:37+01:00",
          "tree_id": "949c94cdf006e8ade9fe771dc5564ae966d4e8e0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/82018919031a8dd9fd15fb62882ac33ce1c587f8"
        },
        "date": 1615240142910,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1738,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1629,
            "range": "±9.16%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1872,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1561,
            "range": "±10.00%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1752,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1720,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1799,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1747,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1722,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1170,
            "range": "±18.55%",
            "unit": "ops/sec",
            "extra": "64 samples"
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
          "id": "5a860531455e31441a20eaa6a11cfd7cf11e814b",
          "message": "Merge pull request #1143 from ethereumjs/fix-trie-benchmarks\n\nTrie: fix benchmarks",
          "timestamp": "2021-03-09T11:07:06+01:00",
          "tree_id": "e6fd5db1387967462c840857c6974e76716dc0ca",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5a860531455e31441a20eaa6a11cfd7cf11e814b"
        },
        "date": 1615284645689,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1677,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1624,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1643,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1615,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1460,
            "range": "±8.78%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1443,
            "range": "±7.44%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1541,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1546,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1495,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1489,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "77 samples"
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
          "id": "53150c159b559b31b6b7c321d784dbb11b082fb9",
          "message": "Merge pull request #1130 from ethereumjs/add-new-rpc-methods\n\nClient: Add 6 new RPC methods",
          "timestamp": "2021-03-09T11:56:38+01:00",
          "tree_id": "fa1f03b097c5cb8d1669f94e7e06b44967f86647",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/53150c159b559b31b6b7c321d784dbb11b082fb9"
        },
        "date": 1615287761718,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1642,
            "range": "±6.08%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1537,
            "range": "±5.73%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1650,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1440,
            "range": "±11.44%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1669,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1971,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1563,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1338,
            "range": "±18.14%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1810,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1657,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
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
          "id": "e8bdbf67fd675e86c0d98de5b46380a896639090",
          "message": "Merge pull request #1144 from ethereumjs/tx-followup-work\n\nTx: Small fixes and improvements",
          "timestamp": "2021-03-10T11:50:23+01:00",
          "tree_id": "725b960f2a1452401a97296293599883547fb6f8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8bdbf67fd675e86c0d98de5b46380a896639090"
        },
        "date": 1615373664248,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1456,
            "range": "±4.09%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1497,
            "range": "±5.26%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1439,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1537,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1370,
            "range": "±7.74%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1314,
            "range": "±12.25%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1450,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1443,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1454,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1425,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "83 samples"
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
          "id": "892d332e7253679c3e517b9a6bd7dea95f124da3",
          "message": "Merge pull request #1145 from ethereumjs/client-split-cli-transport-options\n\nClient: split CLI transports options for bootnodes and multiaddrs",
          "timestamp": "2021-03-11T08:57:10+01:00",
          "tree_id": "e4e8160e8d6e82a324ddc5958e2f57d45a8045fe",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/892d332e7253679c3e517b9a6bd7dea95f124da3"
        },
        "date": 1615449665499,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1577,
            "range": "±3.40%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1544,
            "range": "±7.38%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1593,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1582,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1366,
            "range": "±10.99%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1547,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1531,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1508,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1482,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1468,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "85 samples"
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
          "id": "e8099f1ad8ee2380af3ac912700affd1e2b62c73",
          "message": "Merge pull request #1146 from ethereumjs/monorepo-add-util\n\nUtil monorepo transition",
          "timestamp": "2021-03-11T19:33:41+01:00",
          "tree_id": "8a2067237718c1b0590181364c47e2e6bb814dd9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8099f1ad8ee2380af3ac912700affd1e2b62c73"
        },
        "date": 1615488064557,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1720,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1692,
            "range": "±6.69%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1760,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1744,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1396,
            "range": "±13.30%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1659,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1618,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1545,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1619,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1333,
            "range": "±11.59%",
            "unit": "ops/sec",
            "extra": "70 samples"
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
          "id": "2c455a7666708955827d2f1fbe7c929a9d568ff9",
          "message": "Merge pull request #1067 from ethereumjs/client-bootstrap\n\nClient: Save node key",
          "timestamp": "2021-03-12T10:07:34+01:00",
          "tree_id": "d4c60700df986ef03bb2fcff6c6bdca2eb7718e2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2c455a7666708955827d2f1fbe7c929a9d568ff9"
        },
        "date": 1615540293783,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1567,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1531,
            "range": "±6.99%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1548,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1396,
            "range": "±11.92%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1530,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1509,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1473,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1488,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1458,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1479,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "79 samples"
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
          "id": "8c656dad4d4c5618bce2d1c13a5ddead834d3076",
          "message": "Merge pull request #1147 from ethereumjs/local-client-connectivity\n\nClient: local client connections for debugging",
          "timestamp": "2021-03-13T10:38:15+01:00",
          "tree_id": "2b6fdf9b6beb86772691f61dfc34feb1933c522b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8c656dad4d4c5618bce2d1c13a5ddead834d3076"
        },
        "date": 1615628534962,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1487,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1562,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1432,
            "range": "±6.17%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1506,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1488,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1249,
            "range": "±11.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1409,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1415,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1415,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1397,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
          "id": "8e507454329a666cd8d7d055b2be3fbbbadc8cdf",
          "message": "Merge pull request #1134 from ethereumjs/e2e-verdaccio-setup\n\nPublish monorepo to virtual registry for e2e testing",
          "timestamp": "2021-03-13T20:50:34+01:00",
          "tree_id": "cb119c500b00ff9426a81f172bbef19679854e31",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8e507454329a666cd8d7d055b2be3fbbbadc8cdf"
        },
        "date": 1615665418430,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2098,
            "range": "±4.13%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 2152,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1934,
            "range": "±8.63%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 2089,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 2097,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 2044,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422911",
            "value": 2020,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1994,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1953,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1841,
            "range": "±8.37%",
            "unit": "ops/sec",
            "extra": "83 samples"
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
          "id": "d40ba15775e646471ee49cda4a20453ef0625764",
          "message": "Merge pull request #1149 from ethereumjs/fix-devp2p-browser-dns\n\nFix devp2p browser compatibility",
          "timestamp": "2021-03-15T11:41:20-07:00",
          "tree_id": "4b080102d58a58e5d8a53cb5ab0805bda2ecfcb9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d40ba15775e646471ee49cda4a20453ef0625764"
        },
        "date": 1615833923214,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1563,
            "range": "±3.53%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1579,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1454,
            "range": "±9.34%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1563,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1329,
            "range": "±12.52%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1557,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1556,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1477,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1486,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1474,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "77 samples"
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
        "date": 1615892268138,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1563,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1529,
            "range": "±6.60%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1443,
            "range": "±10.14%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1569,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1355,
            "range": "±8.32%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1505,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1484,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1468,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1464,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1422,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "79 samples"
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
        "date": 1616011303258,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1601,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1592,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1620,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1580,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1382,
            "range": "±10.89%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1554,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1510,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1479,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1460,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1470,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
        "date": 1616097776107,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1607,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1673,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1524,
            "range": "±5.14%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1616,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1597,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1591,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1540,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1538,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1274,
            "range": "±12.99%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1382,
            "range": "±9.57%",
            "unit": "ops/sec",
            "extra": "79 samples"
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
        "date": 1616423564463,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1441,
            "range": "±3.51%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1478,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1373,
            "range": "±7.66%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1485,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1476,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1249,
            "range": "±10.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1442,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1404,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1391,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1384,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "76 samples"
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
        "date": 1616448162616,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1618,
            "range": "±2.38%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1569,
            "range": "±5.85%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1617,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1625,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1581,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1283,
            "range": "±10.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1535,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1527,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1509,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1498,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
        "date": 1616522273938,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2081,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1971,
            "range": "±6.88%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 2076,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1922,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1666,
            "range": "±13.33%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 2053,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422911",
            "value": 2002,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1983,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1320,
            "range": "±16.13%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1886,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "87 samples"
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
        "date": 1616531274648,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2038,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1886,
            "range": "±6.24%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 2037,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1963,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1978,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1624,
            "range": "±12.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1933,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1904,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1919,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1913,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
        "date": 1616700936676,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1966,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1902,
            "range": "±6.43%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1971,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1931,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1584,
            "range": "±12.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1868,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1845,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1847,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1856,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1845,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "92 samples"
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
        "date": 1616791219530,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2019,
            "range": "±3.17%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1951,
            "range": "±6.29%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 2038,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422908",
            "value": 2016,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1652,
            "range": "±12.27%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1965,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1940,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1925,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1888,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1230,
            "range": "±20.12%",
            "unit": "ops/sec",
            "extra": "61 samples"
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
        "date": 1617039113295,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1553,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1588,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1435,
            "range": "±9.17%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1551,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1540,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1531,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1490,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1466,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1458,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1454,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "80 samples"
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
        "date": 1617072414827,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1572,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1561,
            "range": "±5.51%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1603,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1563,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1356,
            "range": "±11.37%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1593,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1544,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1560,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1480,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1496,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
        "date": 1617073362393,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1623,
            "range": "±3.88%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1610,
            "range": "±5.41%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1634,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1646,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1376,
            "range": "±11.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1581,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1533,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1554,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1546,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1531,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "87 samples"
          }
        ]
      }
    ]
  }
}