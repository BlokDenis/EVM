import Common from '@ethereumjs/common'
import { BN } from 'ethereumjs-util'
import tape from 'tape'
import {
  AccessListEIP2930Transaction,
  TransactionFactory,
  Transaction,
  FeeMarketEIP1559Transaction,
} from '../src'

const common = new Common({
  chain: 'mainnet',
  hardfork: 'london',
})

const pKey = Buffer.from('4646464646464646464646464646464646464646464646464646464646464646', 'hex')

const unsignedTx = Transaction.fromTxData({})
const signedTx = unsignedTx.sign(pKey)

const unsignedEIP2930Tx = AccessListEIP2930Transaction.fromTxData(
  { chainId: new BN(1) },
  { common }
)
const signedEIP2930Tx = unsignedEIP2930Tx.sign(pKey)

const unsignedEIP1559Tx = FeeMarketEIP1559Transaction.fromTxData({ chainId: new BN(1) }, { common })
const signedEIP1559Tx = unsignedEIP1559Tx.sign(pKey)

const txTypes = [
  {
    class: Transaction,
    name: 'Transaction',
    unsigned: unsignedTx,
    signed: signedTx,
    eip2718: false,
    type: 0,
  },
  {
    class: AccessListEIP2930Transaction,
    name: 'AccessListEIP2930Transaction',
    unsigned: unsignedEIP2930Tx,
    signed: signedEIP2930Tx,
    eip2718: true,
    type: 1,
  },
  {
    class: FeeMarketEIP1559Transaction,
    name: 'FeeMarketEIP1559Transaction',
    unsigned: unsignedEIP1559Tx,
    signed: signedEIP1559Tx,
    eip2718: true,
    type: 2,
  },
]

tape('[TransactionFactory]: Basic functions', function (t) {
  t.test('fromSerializedData() -> success cases', function (st) {
    for (const txType of txTypes) {
      const serialized = txType.unsigned.serialize()
      const factoryTx = TransactionFactory.fromSerializedData(serialized, { common })
      st.equals(
        factoryTx.constructor.name,
        txType.class.name,
        `should return the right type (${txType.name})`
      )
    }
    st.end()
  })

  t.test('fromSerializedData() -> error cases', function (st) {
    for (const txType of txTypes) {
      if (txType.eip2718) {
        const unsupportedCommon = new Common({ chain: 'mainnet', hardfork: 'istanbul' })
        st.throws(() => {
          TransactionFactory.fromSerializedData(txType.unsigned.serialize(), {
            common: unsupportedCommon,
          })
        }, `should throw when trying to create typed tx when not allowed in Common (${txType.name})`)

        st.throws(() => {
          const serialized = txType.unsigned.serialize()
          serialized[0] = 99 // edit the transaction type
          TransactionFactory.fromSerializedData(serialized, { common })
        }, `should throw when trying to create typed tx with wrong type (${txType.name})`)
      }
    }
    st.end()
  })

  t.test('fromBlockBodyData() -> success cases', function (st) {
    for (const txType of txTypes) {
      let rawTx
      if (txType.eip2718) {
        rawTx = txType.signed.serialize() as Buffer
      } else {
        rawTx = txType.signed.raw() as Buffer[]
      }
      const tx = TransactionFactory.fromBlockBodyData(rawTx, { common })
      st.equals(tx.constructor.name, txType.name, `should return the right type (${txType.name})`)
      if (txType.eip2718) {
        st.deepEqual(
          tx.serialize(),
          rawTx,
          `round-trip serialization should match (${txType.name})`
        )
      } else {
        st.deepEqual(tx.raw(), rawTx, `round-trip raw() creation should match (${txType.name})`)
      }
    }
    st.end()
  })

  t.test('fromTxData() -> success cases', function (st) {
    for (const txType of txTypes) {
      const tx = TransactionFactory.fromTxData({ type: txType.type }, { common })
      st.equals(
        tx.constructor.name,
        txType.class.name,
        `should return the right type (${txType.name})`
      )
      if (!txType.eip2718) {
        const tx = TransactionFactory.fromTxData({})
        st.equals(
          tx.constructor.name,
          txType.class.name,
          `should return the right type (${txType.name})`
        )
      }
    }
    st.end()
  })

  t.test('fromTxData() -> error cases', function (st) {
    const unsupportedCommon = new Common({ chain: 'mainnet', hardfork: 'istanbul' })
    st.throws(() => {
      TransactionFactory.fromTxData({ type: 1 }, { common: unsupportedCommon })
    })

    st.throws(() => {
      TransactionFactory.fromTxData({ type: 999 })
    })
    st.end()
  })

  t.test('getTransactionClass() -> success cases', function (st) {
    const legacyTx = TransactionFactory.getTransactionClass()
    st.equals(legacyTx!.name, Transaction.name)

    for (const txType of txTypes) {
      if (!txType.eip2718) {
        const tx = TransactionFactory.getTransactionClass(txType.type)
        st.equals(tx.name, txType.class.name)
      }
    }
    st.end()
  })

  t.test('getTransactionClass() -> error cases', function (st) {
    st.throws(() => {
      TransactionFactory.getTransactionClass(3)
    }, 'should throw when getting an invalid transaction type')

    st.end()
  })
})
