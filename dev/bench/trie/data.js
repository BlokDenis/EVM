window.BENCHMARK_DATA = {
  "lastUpdate": 1615284714554,
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
      }
    ]
  }
}