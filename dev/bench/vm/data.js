window.BENCHMARK_DATA = {
  "lastUpdate": 1614967038685,
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
      }
    ]
  }
}