window.BENCHMARK_DATA = {
  "lastUpdate": 1604692921457,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-vm",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ev@ethereum.org",
            "name": "Ev",
            "username": "evertonfraga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d15e7beecec3c7764bc7e5e121f095acd506187b",
          "message": "docs: removing standard badge (#885)\n\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2020-09-21T15:28:16-04:00",
          "tree_id": "5d75311a3e02d7f583ff596d2d02f4fddb20a348",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/d15e7beecec3c7764bc7e5e121f095acd506187b"
        },
        "date": 1600716863073,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1742,
            "range": "±4.44%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1781,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1664,
            "range": "±9.40%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1744,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1727,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1705,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1737,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1462,
            "range": "±12.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1341,
            "range": "±13.08%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1663,
            "range": "±1.63%",
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
          "id": "b1429b9d93d4a8524f145d5388257794ab168cd5",
          "message": "Merge pull request #812 from ethereumjs/tx-refactor\n\nRefactor tx lib",
          "timestamp": "2020-09-21T23:32:08+02:00",
          "tree_id": "f619ae6a8f57e93e890d8a8ec299f519384c013d",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/b1429b9d93d4a8524f145d5388257794ab168cd5"
        },
        "date": 1600724508093,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1764,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1765,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1666,
            "range": "±8.20%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1748,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1730,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1697,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1655,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1254,
            "range": "±13.98%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1633,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1614,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
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
          "id": "38dc920322470e49092c6b0bcdca6b9db0f9e233",
          "message": "common: added EIP-based HF file format as preparation for Yolo v2 integration (and other ephemeral testnets) (#876)\n\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2020-09-21T15:23:52-07:00",
          "tree_id": "99e77b939bd845e0395156b5e5e747fb45a07ad6",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/38dc920322470e49092c6b0bcdca6b9db0f9e233"
        },
        "date": 1600727305824,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1956,
            "range": "±6.85%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1960,
            "range": "±9.33%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 2063,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 2010,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1672,
            "range": "±12.10%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1975,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422911",
            "value": 2013,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1944,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1798,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1939,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "84 samples"
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
          "id": "d62d9f24f23e857d2c61304a09f2751ba43faa4b",
          "message": "Merge pull request #887 from ethereumjs/tx-cleanup\n\nTx refactor clean-up",
          "timestamp": "2020-09-22T17:48:46+02:00",
          "tree_id": "000805a5f27ef657c4108b312eb67d316bbd2953",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/d62d9f24f23e857d2c61304a09f2751ba43faa4b"
        },
        "date": 1600790146746,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1772,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1655,
            "range": "±7.86%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1719,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1676,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1658,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1612,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1577,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1578,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1103,
            "range": "±18.51%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1555,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "75 samples"
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
          "id": "ca3ef3315789a381ac55254cdef9441cba4b4859",
          "message": "Merge pull request #894 from ethereumjs/fix-nightly-tests\n\nvm tests: fix state tests count",
          "timestamp": "2020-09-25T09:17:30+02:00",
          "tree_id": "74a8d107a12bb767e737dc23249d04c22e833e5b",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/ca3ef3315789a381ac55254cdef9441cba4b4859"
        },
        "date": 1601018552692,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1850,
            "range": "±5.29%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1843,
            "range": "±5.64%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1911,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1871,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1543,
            "range": "±11.98%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1807,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1785,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1778,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1613,
            "range": "±6.26%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1190,
            "range": "±16.11%",
            "unit": "ops/sec",
            "extra": "67 samples"
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
          "id": "0103b505d25b77e53e7b16216b2356382a8739c2",
          "message": "Merge pull request #896 from ethereumjs/refactor-vm-opcodes\n\nSplit opcodes logic into codes, fns, and utils files",
          "timestamp": "2020-09-28T09:44:44+02:00",
          "tree_id": "dece90aba12b0535e4450e404a8df300a88d3b06",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/0103b505d25b77e53e7b16216b2356382a8739c2"
        },
        "date": 1601279478567,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1712,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1638,
            "range": "±8.56%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1746,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1717,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1674,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1393,
            "range": "±11.11%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1564,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1567,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1600,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1600,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev@rumk.in",
            "name": "Paul Rumkin",
            "username": "rumkin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd5f87d6b8b29e3582608d631fcd29f8c95df560",
          "message": "docs: Fix Discord link (#901)",
          "timestamp": "2020-10-06T11:00:09-04:00",
          "tree_id": "b625dbc045246a110f426fdcc40f9bb138896fca",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/dd5f87d6b8b29e3582608d631fcd29f8c95df560"
        },
        "date": 1601996824492,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1600,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1695,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1704,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1490,
            "range": "±8.90%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1631,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1587,
            "range": "±4.83%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1604,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1587,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1550,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1530,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "78 samples"
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
          "id": "ff751305069b6c661f33d1b68375c8509ffeabd7",
          "message": "Merge pull request #880 from ethereumjs/storage-slots-32-bytes\n\nVM: Strip zeros when putting contract storage in StateManager",
          "timestamp": "2020-10-07T12:06:21+02:00",
          "tree_id": "9ad9fa5428e249012dc842c6db95ba1e2d1e4abb",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/ff751305069b6c661f33d1b68375c8509ffeabd7"
        },
        "date": 1602065456606,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1882,
            "range": "±2.60%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1862,
            "range": "±6.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1981,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1959,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1887,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1807,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1826,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1293,
            "range": "±15.36%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1694,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1785,
            "range": "±1.72%",
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
          "id": "d75c214ade3ffcaf2ca53c16c42e429b922653d4",
          "message": "Merge pull request #899 from ethereumjs/benchmark-threshold\n\nBenchmark action improvements (disables comment-always)",
          "timestamp": "2020-10-07T17:23:54+02:00",
          "tree_id": "0381053d58005dd798553700ad6895db04e1e4e9",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/d75c214ade3ffcaf2ca53c16c42e429b922653d4"
        },
        "date": 1602084680926,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1809,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1731,
            "range": "±6.67%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1732,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1734,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1724,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1462,
            "range": "±11.17%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1722,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1640,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1617,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1585,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "8fd931ce96a47e47de116547cb63756f4ebee019",
          "message": "Merge pull request #906 from ethereumjs/update-hardfork-to-istanbul\n\nUpdate HF to Istanbul",
          "timestamp": "2020-10-08T09:56:34+02:00",
          "tree_id": "d13fd21346f5f8f5acda3bae8c1c2934a886355d",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/8fd931ce96a47e47de116547cb63756f4ebee019"
        },
        "date": 1602144115505,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1725,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1757,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1732,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1550,
            "range": "±8.17%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1719,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1684,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1675,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1663,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1662,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1615,
            "range": "±1.10%",
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
          "id": "7f3f4b417da1902069a5be463019f7bbba581041",
          "message": "Block library refactoring (#883)\n\n* block -> refactor: reworked header class with static factory instantiation helpers, removed defineProperties usage, fixed header tests\n\n* block -> refactoring: added new static factory helpers to block class\n\n* block -> refactor: fix build errors, remove unused imports, unpad number-value buffers in header\n\n* block -> rename Header to BlockHeader\n\n* block/tx -> fix block tests\n\n* block -> enforce BNs on fields which are interpreted as numbers\n\n* block -> edge case in toBN\n\nblock -> fix tests, fix util\n\n* ethash -> make ethash compatible with block\n\n* have validateTransactions return a string[] (https://github.com/ethereumjs/ethereumjs-vm/pull/812#discussion_r459125017)\n\n* let => const\n\n* set default param to resolve js runtime check\n\n* continue refactoring and simplifying methods\nfreeze both block and header objects\nuse Address for coinbase\n\n* api updates\n\n* continuing work\n\n* inline buffer validations. add checks for extraData, mixHash and nonce\n\n* various fixups\n\n* continuing various work\n\n* continuing work and refactoring\n  added Block.genesis() and BlockHeader.genesis() alias\n  update vm\n\n* re-add timestamp to genesis (for rinkeby)\n\n* last fixups\n\n* update readme, benchmarks\n\n* update vm readme, simplify validate\n\n* fix timestamp validation\n\n* use native eq\n\n* make blockchain optional in block.validate()\nmove genTxTrie() inside validateTransactionsTrie()\n\n* fixups\n\n* remove BLOCK_difficulty_GivenAsList from skip list (https://github.com/ethereumjs/ethereumjs-vm/pull/883#issuecomment-699028602)\n\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2020-10-12T10:17:20-07:00",
          "tree_id": "255f3ec2c65b7f3cf8a5b5f22195779bcf442e4e",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/7f3f4b417da1902069a5be463019f7bbba581041"
        },
        "date": 1602523591581,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1798,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1716,
            "range": "±5.64%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1752,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1713,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1694,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1686,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1694,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1653,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1122,
            "range": "±18.73%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1593,
            "range": "±1.72%",
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
          "id": "2d74d4cd90db8f065e041980d614c2c48edc0dcf",
          "message": "Merge pull request #911 from ethereumjs/remove-account-package\n\nReplace account package with ethereumjs-util Account",
          "timestamp": "2020-10-15T10:42:15+02:00",
          "tree_id": "23df83a48f8e5834b68d0dafa5c1c8002784a3c0",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/2d74d4cd90db8f065e041980d614c2c48edc0dcf"
        },
        "date": 1602751868839,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1721,
            "range": "±2.74%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1736,
            "range": "±5.78%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1612,
            "range": "±8.99%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1754,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1709,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1389,
            "range": "±12.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1671,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1656,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1660,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1622,
            "range": "±1.41%",
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
          "id": "2fe6810cf9817c33dcf0b837c2b5db8c170b11b0",
          "message": "Merge pull request #908 from ethereumjs/update-changelogs\n\nCHANGELOG Completion for VM v5 Release",
          "timestamp": "2020-10-15T20:04:04+02:00",
          "tree_id": "4780ff218f59812bd26448aa163f5f018a7fb44c",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/2fe6810cf9817c33dcf0b837c2b5db8c170b11b0"
        },
        "date": 1602785356358,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2129,
            "range": "±2.48%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422906",
            "value": 2020,
            "range": "±4.54%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 2064,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422908",
            "value": 2023,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1673,
            "range": "±11.84%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1992,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1968,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1893,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1345,
            "range": "±17.49%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1759,
            "range": "±4.51%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "4be4159d31b01addf8fab52a7592bcbdc51a9296",
          "message": "Merge pull request #913 from ethereumjs/update-ethereumjs-config-rebased\n\nUpdates to ethereumjs-config v2.0.0 (Cherry Pick Edition 🍒 )",
          "timestamp": "2020-10-20T13:55:26+02:00",
          "tree_id": "24cc63e87a9d899167c5e95056da17d741439aab",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/4be4159d31b01addf8fab52a7592bcbdc51a9296"
        },
        "date": 1603196068225,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1909,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1826,
            "range": "±6.15%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1893,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1864,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1583,
            "range": "±11.02%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1764,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1775,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1774,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1786,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1729,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "91 samples"
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
          "id": "d5560d86ea22f149837229c79778a17f44b80c76",
          "message": "Merge pull request #917 from ethereumjs/util-bump-7.0.7\n\nUpdate ethereumjs-util to v7.0.7",
          "timestamp": "2020-10-20T15:37:57+02:00",
          "tree_id": "b66345a1a5a5b5c8b3d067c93b97367567dbfd01",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/d5560d86ea22f149837229c79778a17f44b80c76"
        },
        "date": 1603202437110,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1726,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1636,
            "range": "±6.16%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1745,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1702,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1681,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1335,
            "range": "±13.59%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1615,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1700,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1760,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1739,
            "range": "±1.32%",
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
          "id": "244db75db6fb771f708c2d1047340a2d977a60dc",
          "message": "Merge pull request #918 from ethereumjs/update-header-validation-methods\n\nBlockHeader Validation Method Changes / Corresponding Block Methods",
          "timestamp": "2020-10-21T09:22:36+02:00",
          "tree_id": "0e199328f54f53169745549cb0a0541187ca94f2",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/244db75db6fb771f708c2d1047340a2d977a60dc"
        },
        "date": 1603266081428,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1811,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1848,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1812,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1626,
            "range": "±9.63%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1753,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1748,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1718,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1709,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1684,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1654,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "78 samples"
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
          "id": "2f0e6d000951de37e96ea3a05d8faa4e037f4377",
          "message": "Merge pull request #921 from ethereumjs/add-browser-field\n\nAdd browser field to package.json's of modules with browser builds",
          "timestamp": "2020-10-21T09:59:14+02:00",
          "tree_id": "0214bf4f3f944a4710660aaba43bed6edd5c5184",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/2f0e6d000951de37e96ea3a05d8faa4e037f4377"
        },
        "date": 1603268086821,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1834,
            "range": "±2.27%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1867,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1845,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1641,
            "range": "±7.71%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1745,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1755,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1753,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1727,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1714,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1521,
            "range": "±9.76%",
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
          "id": "e759b8f0616c8dc5ca9f0affd2c70f958cd11949",
          "message": "Merge pull request #919 from ethereumjs/use-address-type\n\nUse Address type",
          "timestamp": "2020-10-21T10:47:57+02:00",
          "tree_id": "bd2026087a76b77eaa38a455059c64b988d7bbc9",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/e759b8f0616c8dc5ca9f0affd2c70f958cd11949"
        },
        "date": 1603270646741,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2060,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 2111,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1925,
            "range": "±8.26%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 2043,
            "range": "±4.84%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 2064,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1931,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1958,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1931,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1887,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1830,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "84 samples"
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
          "id": "1afe8dbbb62d1be6a0a595b4a90bdf3a34c841a6",
          "message": "Merge pull request #889 from ethereumjs/eip-2929\n\nEIP-2929: Gas cost increases for state access opcodes",
          "timestamp": "2020-10-21T12:09:29+02:00",
          "tree_id": "df296671c095f764b939e38a18292d9357baaefc",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/1afe8dbbb62d1be6a0a595b4a90bdf3a34c841a6"
        },
        "date": 1603276071442,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1808,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1789,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1742,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1572,
            "range": "±10.21%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1758,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1698,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1723,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1670,
            "range": "±4.69%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1174,
            "range": "±18.39%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1601,
            "range": "±1.55%",
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
          "id": "97345b5d60d212947f7a00bd1febc8e1da076ab9",
          "message": "Merge pull request #922 from ethereumjs/beta.1-release\n\nBeta.1 Releases",
          "timestamp": "2020-10-22T09:23:07+02:00",
          "tree_id": "2a06038e8072c8a8a18b47d70b857805b55095e2",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/97345b5d60d212947f7a00bd1febc8e1da076ab9"
        },
        "date": 1603351956465,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1957,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1976,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1947,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1760,
            "range": "±8.96%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1904,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1904,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1866,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1842,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1843,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1819,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "85 samples"
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
          "id": "f6113ced06efcf421336833d392aed59cdc7f391",
          "message": "Merge pull request #920 from ethereumjs/remove-eslint-ignores\n\nRe-evaluate the ignored ESLint rules",
          "timestamp": "2020-10-22T19:40:25+02:00",
          "tree_id": "d047cefc280b644c5bd20da701f98de449b7fa7f",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/f6113ced06efcf421336833d392aed59cdc7f391"
        },
        "date": 1603389502767,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1818,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1806,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1699,
            "range": "±7.56%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1758,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1712,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1693,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1705,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1700,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1635,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1213,
            "range": "±13.29%",
            "unit": "ops/sec",
            "extra": "61 samples"
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
          "id": "ce6c493ac1c9b4e46ad9d2827419bf48bee0a5a6",
          "message": "Merge pull request #925 from ethereumjs/fix-instance-exposures\n\nCleanup on external API exposure",
          "timestamp": "2020-10-23T14:37:14+02:00",
          "tree_id": "6745b5736be1757e40af19178bb3c7783f4c6aaa",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/ce6c493ac1c9b4e46ad9d2827419bf48bee0a5a6"
        },
        "date": 1603457619683,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1855,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1871,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1837,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1646,
            "range": "±9.49%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1813,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1792,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1765,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1748,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1284,
            "range": "±16.37%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1687,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "91 samples"
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
          "id": "dbcd46ca48324539e822ea7a104ae1bcc0815cb7",
          "message": "Merge pull request #931 from ethereumjs/fix-constantinople-tests\n\nFix Constantinople tests",
          "timestamp": "2020-10-29T22:21:25+01:00",
          "tree_id": "6e408058a84d9ec56668cd177b36156bc68702e5",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/dbcd46ca48324539e822ea7a104ae1bcc0815cb7"
        },
        "date": 1604007901690,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1751,
            "range": "±4.84%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1792,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1581,
            "range": "±9.53%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1699,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1700,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1684,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1650,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1645,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1606,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1603,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "83 samples"
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
          "id": "2828988e337bff7806d50c153b350a7fa822d328",
          "message": "make BlockOptions optional (#932)",
          "timestamp": "2020-10-29T15:00:20-07:00",
          "tree_id": "d21941436845e6d1da7c43a7f573b2c1258905a3",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/2828988e337bff7806d50c153b350a7fa822d328"
        },
        "date": 1604009937850,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1776,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1802,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1709,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1537,
            "range": "±8.44%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1710,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1687,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1606,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1658,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1615,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1581,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
          "id": "d601257397f2ff3d10b7cd383af5a5d484213c86",
          "message": "Blockchain: Add reorg test + do not skip any reorg test in VM (#926)\n\n* blokchain: add reorg test\r\n\r\n* vm: re-check skipped tests\r\n\r\n* blockchain: fix tests\r\n\r\nvm: fix skipped tests\r\n\r\n* blockchain/vm: fix tests\r\n\r\n* blockchain: make test more explicit\r\n\r\n* blockchain: tests: remove a lot of unncessary `new BN`",
          "timestamp": "2020-10-30T15:16:14-07:00",
          "tree_id": "177cb1b0f5218e94f8fb93bb46cbf4ea1a2905c4",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/d601257397f2ff3d10b7cd383af5a5d484213c86"
        },
        "date": 1604097255678,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1939,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1930,
            "range": "±6.05%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1974,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1936,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1637,
            "range": "±10.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1841,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1849,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1871,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1791,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1770,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ev@ethereum.org",
            "name": "Ev",
            "username": "evertonfraga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0757bf1b480bd51649212a0489a0e42931b917fc",
          "message": "docs: move blockchain compare link to bottom of release. (#936)",
          "timestamp": "2020-11-03T10:39:57-08:00",
          "tree_id": "47c7594b2072c9b59d9ccbdb76717bce1e9189c8",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/0757bf1b480bd51649212a0489a0e42931b917fc"
        },
        "date": 1604429172652,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2182,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 2003,
            "range": "±7.00%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 2228,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 2218,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422909",
            "value": 2143,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 2124,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1780,
            "range": "±11.84%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1953,
            "range": "±7.23%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422913",
            "value": 2033,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1927,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ev@ethereum.org",
            "name": "Ev",
            "username": "evertonfraga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09b88660216c39438c82fc043498685f3b1fac58",
          "message": "Update README.md (#938)",
          "timestamp": "2020-11-04T10:42:21-08:00",
          "tree_id": "d6460f7648985ecc1eae3f5e828ba3a32736603e",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/09b88660216c39438c82fc043498685f3b1fac58"
        },
        "date": 1604516378386,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1850,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1846,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1695,
            "range": "±9.14%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1780,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1721,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1697,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1680,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1672,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1621,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1086,
            "range": "±16.38%",
            "unit": "ops/sec",
            "extra": "67 samples"
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
          "id": "a953a6ba85da6309708a1f1dbb5fd2ef40743ee1",
          "message": "Merge pull request #929 from ethereumjs/block-consecutive-difficulty\n\nBlock: add methods to calculate difficulty of a consecutive header/block",
          "timestamp": "2020-11-06T10:04:47+01:00",
          "tree_id": "de3a570c0ab125908078d63674e33a1160b2de83",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/a953a6ba85da6309708a1f1dbb5fd2ef40743ee1"
        },
        "date": 1604654597890,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1822,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1762,
            "range": "±3.98%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1669,
            "range": "±5.72%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1753,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1744,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1513,
            "range": "±12.40%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1771,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1750,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1733,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1700,
            "range": "±1.55%",
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
          "id": "5f46d146dfaebe58404089493425d34d4b5a8630",
          "message": "Merge pull request #927 from ethereumjs/remove-db-coupling-blockchain\n\nBlockchain: refactor: Add abstract DB operation, let DB manage the implementation of this OP + make DB handle Cache",
          "timestamp": "2020-11-06T10:35:56+01:00",
          "tree_id": "35d1fa84849e29515c7a4092c7a202f00d34f0e4",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/5f46d146dfaebe58404089493425d34d4b5a8630"
        },
        "date": 1604656485224,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1749,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1740,
            "range": "±4.62%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1785,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1579,
            "range": "±9.93%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1767,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1671,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1477,
            "range": "±10.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1449,
            "range": "±11.41%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1587,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1636,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "78 samples"
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
          "id": "7371fdf7080aa072266b425377f21c4e82c11a2c",
          "message": "Merge pull request #941 from ethereumjs/block-tx-freeze-optionality\n\nNew freeze option to deactivate block, tx freeze / Fix block options passing",
          "timestamp": "2020-11-06T20:54:24+01:00",
          "tree_id": "ed7c2d2aafdde9da841a46efbf1668babc6ae795",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/7371fdf7080aa072266b425377f21c4e82c11a2c"
        },
        "date": 1604692920636,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2200,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422906",
            "value": 2208,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422907",
            "value": 2022,
            "range": "±6.59%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 2092,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422909",
            "value": 2093,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1741,
            "range": "±12.42%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1975,
            "range": "±3.78%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422912",
            "value": 2050,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1882,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1839,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      }
    ]
  }
}