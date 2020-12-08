window.BENCHMARK_DATA = {
  "lastUpdate": 1607417422611,
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
          "id": "84aaf814aeab701c262306623ef5487defb08e42",
          "message": "Merge pull request #930 from ethereumjs/blockchain-concurrency-and-safety-improvements\n\nBlockchain concurrency and safety improvements",
          "timestamp": "2020-11-09T14:21:03+01:00",
          "tree_id": "cfbb5cb874846595016ab5b3b9dae3376fea07fc",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/84aaf814aeab701c262306623ef5487defb08e42"
        },
        "date": 1604929112486,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1895,
            "range": "±4.08%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1886,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1904,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1687,
            "range": "±9.67%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1823,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1813,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1748,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1740,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1773,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1675,
            "range": "±1.22%",
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
          "id": "f53559c728966c3bb8d7b63f8e8d0d46f0a44a54",
          "message": "Merge pull request #942 from ethereumjs/block-blockchain-validation-mandatory\n\nBlock: make blockchain mandatory in validation methods",
          "timestamp": "2020-11-10T09:18:17+01:00",
          "tree_id": "eca896d9c48cccb5a327110397e9100abf9165ef",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/f53559c728966c3bb8d7b63f8e8d0d46f0a44a54"
        },
        "date": 1604996838663,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2005,
            "range": "±7.14%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1907,
            "range": "±6.38%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1870,
            "range": "±9.05%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1963,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1905,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1861,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1444,
            "range": "±15.46%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1862,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1832,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1746,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "90 samples"
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
          "id": "d7d9123be2b4492e42cf65cf64716bc379f67501",
          "message": "Merge pull request #937 from ethereumjs/poa-preparations\n\nStructural Preparations for PoA Support",
          "timestamp": "2020-11-10T13:00:34+01:00",
          "tree_id": "602439fda72d04b3722c85d5e5685987da82467d",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/d7d9123be2b4492e42cf65cf64716bc379f67501"
        },
        "date": 1605010011906,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2256,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 2124,
            "range": "±9.28%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 2159,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1828,
            "range": "±10.43%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 2176,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 2169,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422911",
            "value": 2157,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422912",
            "value": 2121,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 2074,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1956,
            "range": "±2.06%",
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
          "id": "23366ccde15ad6d1d751c5337bf4e579ba2e44cf",
          "message": "Merge pull request #944 from ethereumjs/tx-constructor-improvements\n\nTx Constructor Restructuring",
          "timestamp": "2020-11-10T21:12:10+01:00",
          "tree_id": "a0e7cb61088fc60a43308acdb32a2d4cb239ca56",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/23366ccde15ad6d1d751c5337bf4e579ba2e44cf"
        },
        "date": 1605039869700,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1999,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 2274,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1904,
            "range": "±10.53%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 2242,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 2008,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1818,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1907,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1934,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1776,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1739,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "74 samples"
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
          "id": "daf1bb714217c6fa9379056616e223bc9fcdb58c",
          "message": "Removes Account package from dependency chart (#948)",
          "timestamp": "2020-11-11T13:22:17-08:00",
          "tree_id": "3fa350fcb89c8902d5055755ee41cfe1bdbc3fd4",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/daf1bb714217c6fa9379056616e223bc9fcdb58c"
        },
        "date": 1605131263895,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1670,
            "range": "±5.46%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1620,
            "range": "±6.57%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1630,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1477,
            "range": "±10.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1608,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1585,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1561,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1531,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1517,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1061,
            "range": "±18.21%",
            "unit": "ops/sec",
            "extra": "55 samples"
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
          "id": "d8e706673fc0d9ae0adcb5b82e82dd378d8e9383",
          "message": "Merge pull request #946 from ethereumjs/beta.2-releases\n\nBeta.2 Releases",
          "timestamp": "2020-11-12T09:04:02+01:00",
          "tree_id": "84de75a7d1a49933aeeac1078cd6a403fe55fc8c",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/d8e706673fc0d9ae0adcb5b82e82dd378d8e9383"
        },
        "date": 1605169265619,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1859,
            "range": "±4.17%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1783,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1755,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1657,
            "range": "±6.97%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1791,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1733,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1709,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1689,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1227,
            "range": "±13.35%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1619,
            "range": "±1.22%",
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
          "id": "e8c5c544da4f2ded1b2bede84aa4193664685f40",
          "message": "Merge pull request #950 from ethereumjs/ci/reduce-amount-of-hf-test\n\nci: disabling most of the hardfork-specific tests",
          "timestamp": "2020-11-12T11:36:00-05:00",
          "tree_id": "7a1ce002b15a588bbb1eb309c8fe99bb345756dc",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/e8c5c544da4f2ded1b2bede84aa4193664685f40"
        },
        "date": 1605200077622,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1765,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1773,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1642,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1743,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1691,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1667,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1650,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1643,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1601,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1358,
            "range": "±11.55%",
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
          "id": "222283bbb6780e4effa4cf8089e60d7d98b16571",
          "message": "Small Release/README Fixes (#949)\n\n* monorepo: small README fixes and corrections\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Ev <ev@ethereum.org>\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Ev <ev@ethereum.org>",
          "timestamp": "2020-11-14T10:54:13-08:00",
          "tree_id": "1b96c6ac55dfc8fd755c7214276f5e656c758534",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/222283bbb6780e4effa4cf8089e60d7d98b16571"
        },
        "date": 1605381538496,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1643,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1636,
            "range": "±3.49%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1569,
            "range": "±8.25%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1642,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1430,
            "range": "±10.13%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1598,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1626,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1592,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1554,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1118,
            "range": "±16.65%",
            "unit": "ops/sec",
            "extra": "56 samples"
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
          "id": "ce0cc554e4bcdfb8a82ad3006c3ff473908646f3",
          "message": "Merge pull request #953 from ethereumjs/ethereum-tests-submodule\n\nDropping ethereumjs-testing dependency",
          "timestamp": "2020-11-16T10:12:05+01:00",
          "tree_id": "49d07f501b6efb0b89e9cfbb0178be602c24016d",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/ce0cc554e4bcdfb8a82ad3006c3ff473908646f3"
        },
        "date": 1605519162724,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1694,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1677,
            "range": "±4.77%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1745,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1686,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1474,
            "range": "±11.20%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1655,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1642,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1619,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1159,
            "range": "±18.21%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1498,
            "range": "±1.11%",
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
          "id": "9b863161833ca0361376cca10e5e51611c99a4e4",
          "message": "Merge pull request #939 from ethereumjs/node-allversions\n\nTesting code in all relevant node versions",
          "timestamp": "2020-11-16T11:46:06+01:00",
          "tree_id": "508a1f4530d4dfa69ad251c5d15adee85480309f",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/9b863161833ca0361376cca10e5e51611c99a4e4"
        },
        "date": 1605524765619,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 2002,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1999,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1959,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1777,
            "range": "±9.61%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1961,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1921,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1894,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1417,
            "range": "±16.06%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1811,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1735,
            "range": "±1.60%",
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
          "id": "81fc88b25fda1d5319b6c26893fb50a4db63ba7e",
          "message": "Merge pull request #935 from ethereumjs/validate-uncles\n\nBlock: support uncle validation",
          "timestamp": "2020-11-16T12:50:27+01:00",
          "tree_id": "799ba936a19fb78ea7ae024b820cafb7f90f2de6",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/81fc88b25fda1d5319b6c26893fb50a4db63ba7e"
        },
        "date": 1605528991330,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1596,
            "range": "±4.64%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1618,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1543,
            "range": "±8.03%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1628,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1558,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1589,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1556,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1154,
            "range": "±16.76%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1496,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1413,
            "range": "±2.25%",
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
          "id": "7765fba665e9e88db8f67f070f3499f7f9bfa127",
          "message": "Merge pull request #955 from ethereumjs/fix-vulnerable-deps\n\nAudit dependencies and clean up dependency tree",
          "timestamp": "2020-11-16T13:47:28+01:00",
          "tree_id": "fc20dd4485b933b6864a3beec61b62e713eb287d",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/7765fba665e9e88db8f67f070f3499f7f9bfa127"
        },
        "date": 1605531944592,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1724,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1736,
            "range": "±4.52%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1628,
            "range": "±7.13%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1777,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1730,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1697,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1373,
            "range": "±14.51%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1668,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1636,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1582,
            "range": "±1.56%",
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
          "id": "11eb16f8b4483667213c01aad83ecd5cd8769b96",
          "message": "Merge pull request #956 from ethereumjs/public-td-method\n\nPublic Blockchain.getTotalDifficulty() method",
          "timestamp": "2020-11-16T15:09:06+01:00",
          "tree_id": "8096d9df94f3b8765a65b37e1f0b2cdd34d97779",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/11eb16f8b4483667213c01aad83ecd5cd8769b96"
        },
        "date": 1605537001221,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1671,
            "range": "±5.77%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1617,
            "range": "±6.52%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1703,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1696,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1673,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1652,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1654,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1580,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1131,
            "range": "±17.05%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1504,
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
          "id": "c188339850da94bee22769152af3f2c518588515",
          "message": "Merge pull request #951 from ethereumjs/ci/vm-tests-on-demand\n\nOn-demand testing for VM State and Blockchain",
          "timestamp": "2020-11-17T11:41:04+01:00",
          "tree_id": "42594b2117508d141d4b2f61b9e3a5beb94d1ee5",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/c188339850da94bee22769152af3f2c518588515"
        },
        "date": 1605610836962,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1935,
            "range": "±3.85%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1898,
            "range": "±5.01%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1828,
            "range": "±8.84%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1941,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1912,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1898,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1542,
            "range": "±15.16%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1858,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1828,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1637,
            "range": "±2.19%",
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
          "id": "fc3a70f2e041701cdeddb4d8a4eb471dfed42fca",
          "message": "Merge pull request #957 from ethereumjs/misc-fixes\n\nUpdate package references",
          "timestamp": "2020-11-17T21:01:48+01:00",
          "tree_id": "5958e18bf932ed015d1ec14af67d2e2f78a27080",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/fc3a70f2e041701cdeddb4d8a4eb471dfed42fca"
        },
        "date": 1605644590122,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1714,
            "range": "±4.33%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1749,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1580,
            "range": "±9.47%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1681,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1679,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1647,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1647,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1202,
            "range": "±17.31%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1607,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1499,
            "range": "±1.66%",
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
          "id": "c9c76bb31f8fa7f5b746e8dca729e0fb8d6a0744",
          "message": "Merge pull request #958 from ethereumjs/rc.1-releases\n\nRc.1 Releases",
          "timestamp": "2020-11-19T10:27:43+01:00",
          "tree_id": "6f071b9f79c1308eb561a29044f8cb7bd978a08e",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/c9c76bb31f8fa7f5b746e8dca729e0fb8d6a0744"
        },
        "date": 1605779132172,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1890,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1959,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1901,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1708,
            "range": "±8.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1851,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1777,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1761,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1740,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1793,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1692,
            "range": "±1.60%",
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
          "id": "2f74c819ae161f790871c1daac0e93bb6983fa27",
          "message": "Merge pull request #964 from ethereumjs/fix-node-tests\n\nfix CI node versions tests",
          "timestamp": "2020-11-24T19:36:27+01:00",
          "tree_id": "a34c93122e783c5f44e0ec40784b62a4d8ab9235",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/2f74c819ae161f790871c1daac0e93bb6983fa27"
        },
        "date": 1606244544476,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1641,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1603,
            "range": "±5.75%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1612,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1460,
            "range": "±10.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1633,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1628,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1588,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1180,
            "range": "±18.35%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1549,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1494,
            "range": "±1.21%",
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
          "id": "a61be5d3cfdca5cfd1f1ca7248559767cd4c27f9",
          "message": "Merge pull request #962 from ethereumjs/final-releases\n\nFinal releases",
          "timestamp": "2020-11-25T10:02:33+01:00",
          "tree_id": "c5c2df49808b13ac92686bc99a95869fd7606998",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/a61be5d3cfdca5cfd1f1ca7248559767cd4c27f9"
        },
        "date": 1606296132111,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1753,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1754,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1755,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1546,
            "range": "±10.27%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1697,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1666,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1669,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1659,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1521,
            "range": "±9.10%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1082,
            "range": "±20.02%",
            "unit": "ops/sec",
            "extra": "65 samples"
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
          "id": "93b476e99e14eab22e333940d713209888a3f330",
          "message": "VM: add selectHardforkByBlockNumber option (#966)\n\n* vm: add selectHardforkByBlockNumber option",
          "timestamp": "2020-11-25T17:19:22-08:00",
          "tree_id": "6799892d4e88da84dd765de9d6ae393acba10a37",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/93b476e99e14eab22e333940d713209888a3f330"
        },
        "date": 1606354765479,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1687,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1683,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1566,
            "range": "±7.54%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1703,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1658,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1627,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1287,
            "range": "±13.65%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1602,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1594,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1541,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "79 samples"
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
          "id": "eb05651554ec23d2ba7c46af6e5f5a7bc199f217",
          "message": "Merge pull request #967 from ethereumjs/fix-selecthardfork-default\n\nVM: fix selectHardforkByBlockNumber default value",
          "timestamp": "2020-11-27T17:14:56+01:00",
          "tree_id": "5854e6b58287cf20f44832423adf2eabcc77a80d",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/eb05651554ec23d2ba7c46af6e5f5a7bc199f217"
        },
        "date": 1606495051599,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1666,
            "range": "±4.30%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1633,
            "range": "±6.81%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1545,
            "range": "±9.25%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1681,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1625,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1582,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1365,
            "range": "±11.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1586,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1549,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1478,
            "range": "±1.50%",
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
          "id": "997678bc671f6606816c8e73f1078bfb753e9da8",
          "message": "Merge pull request #971 from ethereumjs/monorepo-add-devp2p\n\ndevp2p monorepo transition",
          "timestamp": "2020-12-01T09:19:17+01:00",
          "tree_id": "6ec56892d70775d5c8a02765b10249cc3f9cfb4d",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/997678bc671f6606816c8e73f1078bfb753e9da8"
        },
        "date": 1606812076962,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1754,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1802,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1745,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1586,
            "range": "±7.98%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1687,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1668,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1678,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1634,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1617,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1564,
            "range": "±1.16%",
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
          "id": "6c0490056cdd1b5c45f6b74f21a0e317e1e5f082",
          "message": "Merge pull request #973 from ethereumjs/monorepo-add-client\n\nClient monorepo transition",
          "timestamp": "2020-12-01T21:09:53+01:00",
          "tree_id": "ac1cdbcd5bc1a6449e11ff5632676146c94e4a8d",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/6c0490056cdd1b5c45f6b74f21a0e317e1e5f082"
        },
        "date": 1606854657089,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1715,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1723,
            "range": "±6.05%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1713,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1461,
            "range": "±11.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1766,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1731,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1751,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1697,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1329,
            "range": "±14.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1704,
            "range": "±0.72%",
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
          "id": "ab5f032d0a8698694e90341fa860ec0dd79ca18d",
          "message": "Merge pull request #977 from ethereumjs/devp2p-client-monorepo-integration-housekeeping\n\nDevp2p & Client monorepo integration housekeeping PR",
          "timestamp": "2020-12-02T22:31:46+01:00",
          "tree_id": "4e092419b0014522ca08063fb3c3c1ffa644a05a",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/ab5f032d0a8698694e90341fa860ec0dd79ca18d"
        },
        "date": 1606946103724,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1767,
            "range": "±4.23%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1787,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1658,
            "range": "±8.32%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1772,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1697,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1666,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1642,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1611,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1200,
            "range": "±13.78%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1557,
            "range": "±0.87%",
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
          "id": "d7e30531961b2432129722e69835f3da20eaf8ae",
          "message": "Merge pull request #1005 from ethereumjs/update-client-diagram\n\nUpdate client diagram",
          "timestamp": "2020-12-07T10:52:12+01:00",
          "tree_id": "82bedaec0cb4c7a583473aa73001d6b4f2cbdba9",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/d7e30531961b2432129722e69835f3da20eaf8ae"
        },
        "date": 1607335818823,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1912,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1887,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1696,
            "range": "±8.10%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1821,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1801,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1797,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1840,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1606,
            "range": "±7.38%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1346,
            "range": "±18.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1662,
            "range": "±1.64%",
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
          "id": "5cf640802eddc266f0e445cc15e60cd9f3a00b95",
          "message": "Merge pull request #1007 from ethereumjs/update-package-diagram\n\nUpdate package relationship diagram",
          "timestamp": "2020-12-07T11:07:01+01:00",
          "tree_id": "a9acf8b5e160644b75f88b8d12c9a7ebe8df643b",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/5cf640802eddc266f0e445cc15e60cd9f3a00b95"
        },
        "date": 1607336828515,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1754,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1825,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1844,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1620,
            "range": "±10.28%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1806,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1712,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1659,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1627,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1574,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1540,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "74 samples"
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
          "id": "f06af18908108cadca1f489337aa07a2b68aef00",
          "message": "Merge pull request #1009 from ethereumjs/dedupe-gitignores\n\ndedupe gitignores for client and devp2p",
          "timestamp": "2020-12-08T09:32:19+01:00",
          "tree_id": "8ed2ffe28a22e245e3e4a7642a8cfd8b01ddb502",
          "url": "https://github.com/ethereumjs/ethereumjs-vm/commit/f06af18908108cadca1f489337aa07a2b68aef00"
        },
        "date": 1607417421771,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1813,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1830,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1651,
            "range": "±8.88%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1809,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1832,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1802,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1751,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1339,
            "range": "±12.89%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1733,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1618,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      }
    ]
  }
}