window.BENCHMARK_DATA = {
  "lastUpdate": 1615373574630,
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
          "id": "5a860531455e31441a20eaa6a11cfd7cf11e814b",
          "message": "Merge pull request #1143 from ethereumjs/fix-trie-benchmarks\n\nTrie: fix benchmarks",
          "timestamp": "2021-03-09T11:07:06+01:00",
          "tree_id": "e6fd5db1387967462c840857c6974e76716dc0ca",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5a860531455e31441a20eaa6a11cfd7cf11e814b"
        },
        "date": 1615284712400,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15928,
            "range": "±13.86%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18091,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16346,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12577,
            "range": "±12.33%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6139,
            "range": "±26.98%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1152,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±91.13%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 115,
            "range": "±21.87%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.9,
            "range": "±127.24%",
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
          "id": "53150c159b559b31b6b7c321d784dbb11b082fb9",
          "message": "Merge pull request #1130 from ethereumjs/add-new-rpc-methods\n\nClient: Add 6 new RPC methods",
          "timestamp": "2021-03-09T11:56:38+01:00",
          "tree_id": "fa1f03b097c5cb8d1669f94e7e06b44967f86647",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/53150c159b559b31b6b7c321d784dbb11b082fb9"
        },
        "date": 1615287755269,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13234,
            "range": "±10.78%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10995,
            "range": "±18.70%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13046,
            "range": "±3.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12716,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10492,
            "range": "±16.49%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 592,
            "range": "±33.01%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 218,
            "range": "±8.91%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 40.06,
            "range": "±112.56%",
            "unit": "ops/sec",
            "extra": "24 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.2,
            "range": "±8.04%",
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
          "id": "e8bdbf67fd675e86c0d98de5b46380a896639090",
          "message": "Merge pull request #1144 from ethereumjs/tx-followup-work\n\nTx: Small fixes and improvements",
          "timestamp": "2021-03-10T11:50:23+01:00",
          "tree_id": "725b960f2a1452401a97296293599883547fb6f8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8bdbf67fd675e86c0d98de5b46380a896639090"
        },
        "date": 1615373573906,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14103,
            "range": "±10.63%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12429,
            "range": "±19.67%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13431,
            "range": "±5.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13347,
            "range": "±3.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9587,
            "range": "±18.70%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 769,
            "range": "±28.07%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 242,
            "range": "±7.93%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 38.96,
            "range": "±122.69%",
            "unit": "ops/sec",
            "extra": "21 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.02,
            "range": "±8.85%",
            "unit": "ops/sec",
            "extra": "46 samples"
          }
        ]
      }
    ]
  }
}