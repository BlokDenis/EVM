### overview

The ultimate goal is to performantly handle "eth_call" requests when limited by high latency storage reads

In order to achieve this, initiate as many state reads in parallel as possible, to avoid doing many high latency reads in series.

To achieve this we suggest "out-of-order execution", where execution thats unblocked by a storage read can run in advance, and execution thats blocked will resume after the storage read completes. (tangentially related to "symbolic execution")

This will require rework of nearly all components of the vm 

stack
  - take and push promises to stack during setup, run execution when inputs resolve
memory
  - naive: r/w blocked on previous write
  - optimal: memory range mutex
branching
  - naive: blocked on stack value
  - optimal: use dummy values and fork and suppress side effects and have a priority queue and zomg
gas calcs
  - reading gas blocked by any dynamic gas calcs
state
  - naive: read is blocked on last write
  - optimal: read is blocked on last write, per key
state revert
  - oh gawd, idk
events:
  vm events like "step" need to be redefined in this paradigm or removed

All opcodes are "setup" in order
opcodes may complete execution out of order

"setup" is blocked by
  - storage writes on unresolved keys (need to set mutex on key)
  - branching on unresolved inputs (cant setup ops we wont run)
    - may want to simulate branch prediction / greedily compute both in the future




### gas calculation

dynamic gas costs blocked by unresolved input

e.g. `SSTORE` requires an internal `SLOAD` to determine gas cost

consider this pseudo code
```
SSTORE
GAS
```

may need to track async gas calcs like this 
```js
gasCalcPs = []
gasCalcPs.push(p)


await Promise.all(gasCalcPs.slice())
// or something like this
await execMan.gasPrice()
// which makes sure all gasPrices have been calculated for previous ops
```

so we need a cloneable queue of promises that we can reduce on?
  naive: array of promises, where we re-await and re-reduce every time

### Dynamic Gas Costs

opcodes with dynamic gas costs, grouped by gas calc helper used

##### subMemUsage
  SHA3
  CALLDATACOPY
  CODECOPY
  EXTCODECOPY
  RETURNDATACOPY
  MLOAD
  MSTORE
  MSTORE8
  LOG
  CREATE
  CREATE2   
  CALL
  CALLCODE
  DELEGATECALL
  STATICCALL
  RETURN
  REVERT

##### updateSstoreGas
  SSTORE

##### inline
  EXP
  SHA3
  CALLDATACOPY
  EXTCODECOPY
  RETURNDATACOPY
  LOG
  CREATE2
  CALL
  CALLCODE
  SELFDESTRUCT

### surprising async behavior

```js

// Example 1
// works correctly

const [p1, p2] = runState.stack.popN(2)

const p = (async () => {
  const [v1, v2] = await Promise.all([p1, p2])
  // use v1, v2
})()

// Example 2
// causes evm stack underflow 

const p = (async () => {
  const [v1, v2] = await Promise.all(runState.stack.popN(2))
  // use v1, v2
})()
```

### messy notes

SLOAD a
|
PUSH key
SSTORE <key>
|
|

SLOAD <key>
|
|

- revert calls on call gasLimit
- account balance, out of order
- put storage mutex in the StateManager



balance calculated correctly?

SLOAD
BALANCE
CALL with value
BALANCE

some situations to consider:

### 1 - enter function
CALLDATALOAD
JUMPI

### 2 - read some data based on tx input
CALLDATALOAD
SLOAD

### 3 - load data from other contract
PUSH address
PUSH 4byte
CALL

### 4 - branch based on result of both
EQ
JUMPI


1 completes instantly
2,3 run in parallel
4 runs after 2,3