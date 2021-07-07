import Common from '@ethereumjs/common'
import { Address, BN, bufferToHex, privateToAddress } from 'ethereumjs-util'
import tape from 'tape'
import {
  AccessList,
  AccessListEIP2930Transaction,
  AccessListBufferItem,
  FeeMarketEIP1559Transaction,
} from '../src'

const pKey = Buffer.from('4646464646464646464646464646464646464646464646464646464646464646', 'hex')
const address = privateToAddress(pKey)

const N_DIV_2_PLUS_1 = new BN(
  '7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a1',
  16
)

const common = new Common({
  chain: 'mainnet',
  hardfork: 'london',
})

const txTypes = [
  {
    class: AccessListEIP2930Transaction,
    name: 'AccessListEIP2930Transaction',
    type: 1,
  },
  {
    class: FeeMarketEIP1559Transaction,
    name: 'FeeMarketEIP1559Transaction',
    type: 2,
  },
]

const validAddress = Buffer.from('01'.repeat(20), 'hex')
const validSlot = Buffer.from('01'.repeat(32), 'hex')
const chainId = new BN(1)

tape(
  '[AccessListEIP2930Transaction / FeeMarketEIP1559Transaction] -> EIP-2930 Compatibility',
  function (t) {
    t.test('Initialization / Getter -> fromTxData()', function (t) {
      for (const txType of txTypes) {
        let tx = txType.class.fromTxData({}, { common })
        t.ok(tx, `should initialize correctly (${txType.name})`)

        tx = txType.class.fromTxData({
          chainId: 5,
        })
        t.ok(
          tx.common.chainIdBN().eqn(5),
          'should initialize Common with chain ID provided (supported chain ID)'
        )

        tx = txType.class.fromTxData({
          chainId: 99999,
        })
        t.ok(
          tx.common.chainIdBN().eqn(99999),
          'should initialize Common with chain ID provided (unsupported chain ID)'
        )

        const nonEIP2930Common = new Common({ chain: 'mainnet', hardfork: 'istanbul' })
        t.throws(() => {
          txType.class.fromTxData({}, { common: nonEIP2930Common })
        }, `should throw on a pre-Berlin Harfork (EIP-2930 not activated) (${txType.name})`)

        t.throws(() => {
          txType.class.fromTxData(
            {
              chainId: chainId.addn(1),
            },
            { common }
          )
        }, `should reject transactions with wrong chain ID (${txType.name})`)

        t.throws(() => {
          txType.class.fromTxData(
            {
              v: 2,
            },
            { common }
          )
        }, `should reject transactions with invalid yParity (v) values (${txType.name})`)
      }
      t.end()
    })

    t.test('Initialization / Getter -> fromSerializedTx()', function (t) {
      for (const txType of txTypes) {
        try {
          txType.class.fromSerializedTx(Buffer.from([99]), {})
        } catch (e) {
          t.ok(
            e.message.includes('wrong tx type'),
            `should throw on wrong tx type (${txType.name})`
          )
        }

        try {
          // Correct tx type + RLP-encoded 5
          const serialized = Buffer.concat([Buffer.from([txType.type]), Buffer.from([5])])
          txType.class.fromSerializedTx(serialized, {})
        } catch (e) {
          t.ok(
            e.message.includes('must be array'),
            `should throw when RLP payload not an array (${txType.name})`
          )
        }

        try {
          // Correct tx type + RLP-encoded empty list
          const serialized = Buffer.concat([Buffer.from([txType.type]), Buffer.from('c0', 'hex')])
          txType.class.fromSerializedTx(serialized, {})
        } catch (e) {
          t.ok(
            e.message.includes('values (for unsigned tx)'),
            `should throw with invalid number of values (${txType.name})`
          )
        }
      }
      t.end()
    })

    t.test('Access Lists -> success cases', function (st) {
      for (const txType of txTypes) {
        const access: AccessList = [
          {
            address: bufferToHex(validAddress),
            storageKeys: [bufferToHex(validSlot)],
          },
        ]
        const txn = txType.class.fromTxData(
          {
            accessList: access,
            chainId: 1,
          },
          { common }
        )

        // Check if everything is converted

        const BufferArray = txn.accessList
        const JSON = txn.AccessListJSON

        st.ok(BufferArray[0][0].equals(validAddress))
        st.ok(BufferArray[0][1][0].equals(validSlot))

        st.deepEqual(JSON, access, `should allow json-typed access lists (${txType.name})`)

        // also verify that we can always get the json access list, even if we don't provide one.

        const txnRaw = txType.class.fromTxData(
          {
            accessList: BufferArray,
            chainId: 1,
          },
          { common }
        )

        const JSONRaw = txnRaw.AccessListJSON

        st.deepEqual(JSONRaw, access, `should allow json-typed access lists (${txType.name})`)
      }
      st.end()
    })

    t.test('Access Lists -> error cases', function (st) {
      for (const txType of txTypes) {
        let accessList: any[] = [
          [
            Buffer.from('01'.repeat(21), 'hex'), // Address of 21 bytes instead of 20
            [],
          ],
        ]

        st.throws(() => {
          txType.class.fromTxData({ chainId, accessList }, { common })
        }, txType.name)

        accessList = [
          [
            validAddress,
            [
              Buffer.from('01'.repeat(31), 'hex'), // Slot of 31 bytes instead of 32
            ],
          ],
        ]

        st.throws(() => {
          txType.class.fromTxData({ chainId, accessList }, { common })
        }, txType.name)

        accessList = [[]] // Address does not exist

        st.throws(() => {
          txType.class.fromTxData({ chainId, accessList }, { common })
        }, txType.name)

        accessList = [[validAddress]] // Slots does not exist

        st.throws(() => {
          txType.class.fromTxData({ chainId, accessList }, { common })
        }, txType.name)

        accessList = [[validAddress, validSlot]] // Slots is not an array

        st.throws(() => {
          txType.class.fromTxData({ chainId, accessList }, { common })
        }, txType.name)

        accessList = [[validAddress, [], []]] // 3 items where 2 are expected

        st.throws(() => {
          txType.class.fromTxData({ chainId, accessList }, { common })
        }, txType.name)
      }
      st.end()
    })

    t.test('sign() / senderS(), senderR(), yParity()', function (t) {
      for (const txType of txTypes) {
        let tx = txType.class.fromTxData(
          {
            data: Buffer.from('010200', 'hex'),
            to: validAddress,
            accessList: [[validAddress, [validSlot]]],
            chainId,
          },
          { common }
        )
        let signed = tx.sign(pKey)
        const signedAddress = signed.getSenderAddress()
        t.ok(signedAddress.buf.equals(address), `should sign a transaction (${txType.name})`)
        signed.verifySignature() // If this throws, test will not end.

        tx = txType.class.fromTxData({}, { common })
        signed = tx.sign(pKey)

        t.deepEqual(signed.senderR, signed.r, `should provide senderR() alias (${txType.name})`)
        t.deepEqual(signed.senderS, signed.s, `should provide senderS() alias (${txType.name})`)
        t.deepEqual(signed.yParity, signed.v, `should provide yParity() alias (${txType.name})`)

        t.deepEqual(
          tx.accessList,
          [],
          `should create and sign transactions without passing access list value (${txType.name})`
        )
        t.deepEqual(signed.accessList, [])

        tx = txType.class.fromTxData({}, { common })

        t.throws(() => {
          tx.hash()
        }, `should throw calling hash with unsigned tx (${txType.name})`)

        t.throws(() => {
          tx.getSenderPublicKey()
        })

        t.throws(() => {
          const tx = txType.class.fromTxData({ s: N_DIV_2_PLUS_1, r: 1, v: 1 }, { common })
          const signed = tx.sign(pKey)
          signed.getSenderPublicKey()
        }, `should throw with invalid s value (${txType.name})`)
      }
      t.end()
    })
  }
)

tape('[AccessListEIP2930Transaction] -> Class Specific Tests', function (t) {
  t.test('Initialization', (st) => {
    const tx = AccessListEIP2930Transaction.fromTxData({}, { common })
    t.ok(
      AccessListEIP2930Transaction.fromTxData(tx, { common }),
      'should initialize correctly from its own data'
    )
    st.end()
  })

  t.throws(() => {
    const buffer = Buffer.from([])
    const address = Buffer.from([])
    const storageKeys = [Buffer.from([]), Buffer.from([])]
    const aclBuf: AccessListBufferItem = [address, storageKeys]
    AccessListEIP2930Transaction.fromValuesArray(
      [buffer, buffer, buffer, buffer, buffer, buffer, buffer, [aclBuf], buffer],
      {}
    )
  }, 'should throw with values array with length different than 8 or 11')

  t.test('should return right upfront cost', (st) => {
    let tx = AccessListEIP2930Transaction.fromTxData(
      {
        data: Buffer.from('010200', 'hex'),
        to: validAddress,
        accessList: [[validAddress, [validSlot]]],
        chainId,
      },
      { common }
    )
    // Cost should be:
    // Base fee + 2*TxDataNonZero + TxDataZero + AccessListAddressCost + AccessListSlotCost
    const txDataZero: number = common.param('gasPrices', 'txDataZero')
    const txDataNonZero: number = common.param('gasPrices', 'txDataNonZero')
    const accessListStorageKeyCost: number = common.param('gasPrices', 'accessListStorageKeyCost')
    const accessListAddressCost: number = common.param('gasPrices', 'accessListAddressCost')
    const baseFee: number = common.param('gasPrices', 'tx')
    const creationFee: number = common.param('gasPrices', 'txCreation')

    st.ok(
      tx
        .getBaseFee()
        .eqn(
          txDataNonZero * 2 +
            txDataZero +
            baseFee +
            accessListAddressCost +
            accessListStorageKeyCost
        )
    )

    // In this Tx, `to` is `undefined`, so we should charge homestead creation gas.
    tx = AccessListEIP2930Transaction.fromTxData(
      {
        data: Buffer.from('010200', 'hex'),
        accessList: [[validAddress, [validSlot]]],
        chainId,
      },
      { common }
    )

    st.ok(
      tx
        .getBaseFee()
        .eqn(
          txDataNonZero * 2 +
            txDataZero +
            creationFee +
            baseFee +
            accessListAddressCost +
            accessListStorageKeyCost
        )
    )

    // Explicilty check that even if we have duplicates in our list, we still charge for those
    tx = AccessListEIP2930Transaction.fromTxData(
      {
        to: validAddress,
        accessList: [
          [validAddress, [validSlot]],
          [validAddress, [validSlot, validSlot]],
        ],
        chainId,
      },
      { common }
    )

    st.ok(tx.getBaseFee().eqn(baseFee + accessListAddressCost * 2 + accessListStorageKeyCost * 3))

    st.end()
  })

  t.test('getUpfrontCost() -> should return upfront cost', function (st) {
    const tx = AccessListEIP2930Transaction.fromTxData(
      {
        gasPrice: 1000,
        gasLimit: 10000000,
        value: 42,
      },
      { common }
    )
    st.equals(tx.getUpfrontCost().toNumber(), 10000000042)
    st.end()
  })

  t.test('unsigned tx -> getMessageToSign()', function (t) {
    const unsignedTx = AccessListEIP2930Transaction.fromTxData(
      {
        data: Buffer.from('010200', 'hex'),
        to: validAddress,
        accessList: [[validAddress, [validSlot]]],
        chainId,
      },
      { common }
    )
    const expectedHash = Buffer.from(
      '78528e2724aa359c58c13e43a7c467eb721ce8d410c2a12ee62943a3aaefb60b',
      'hex'
    )
    t.deepEqual(unsignedTx.getMessageToSign(true), expectedHash), 'correct hashed version'

    const expectedSerialization = Buffer.from(
      '01f858018080809401010101010101010101010101010101010101018083010200f838f7940101010101010101010101010101010101010101e1a00101010101010101010101010101010101010101010101010101010101010101',
      'hex'
    )
    t.deepEqual(
      unsignedTx.getMessageToSign(false),
      expectedSerialization,
      'correct serialized unhashed version'
    )

    t.end()
  })

  // Data from
  // https://github.com/INFURA/go-ethlibs/blob/75b2a52a39d353ed8206cffaf68d09bd1b154aae/eth/transaction_signing_test.go#L87

  t.test('should sign transaction correctly and return expected JSON', function (t) {
    const address = Buffer.from('0000000000000000000000000000000000001337', 'hex')
    const slot1 = Buffer.from(
      '0000000000000000000000000000000000000000000000000000000000000000',
      'hex'
    )
    const txData = {
      data: Buffer.from('', 'hex'),
      gasLimit: 0x62d4,
      gasPrice: 0x3b9aca00,
      nonce: 0x00,
      to: new Address(Buffer.from('df0a88b2b68c673713a8ec826003676f272e3573', 'hex')),
      value: 0x01,
      chainId: new BN(Buffer.from('796f6c6f763378', 'hex')),
      accessList: <any>[[address, [slot1]]],
    }

    const customChainParams = {
      name: 'custom',
      chainId: txData.chainId,
      eips: [2718, 2929, 2930],
    }
    const usedCommon = Common.forCustomChain('mainnet', customChainParams, 'berlin')
    usedCommon.setEIPs([2718, 2929, 2930])

    const expectedUnsignedRaw = Buffer.from(
      '01f86587796f6c6f76337880843b9aca008262d494df0a88b2b68c673713a8ec826003676f272e35730180f838f7940000000000000000000000000000000000001337e1a00000000000000000000000000000000000000000000000000000000000000000808080',
      'hex'
    )
    const pkey = Buffer.from(
      'fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19',
      'hex'
    )
    const expectedSigned = Buffer.from(
      '01f8a587796f6c6f76337880843b9aca008262d494df0a88b2b68c673713a8ec826003676f272e35730180f838f7940000000000000000000000000000000000001337e1a0000000000000000000000000000000000000000000000000000000000000000080a0294ac94077b35057971e6b4b06dfdf55a6fbed819133a6c1d31e187f1bca938da00be950468ba1c25a5cb50e9f6d8aa13c8cd21f24ba909402775b262ac76d374d',
      'hex'
    )
    const expectedHash = Buffer.from(
      'bbd570a3c6acc9bb7da0d5c0322fe4ea2a300db80226f7df4fef39b2d6649eec',
      'hex'
    )
    const v = new BN(0)
    const r = new BN(
      Buffer.from('294ac94077b35057971e6b4b06dfdf55a6fbed819133a6c1d31e187f1bca938d', 'hex')
    )
    const s = new BN(
      Buffer.from('0be950468ba1c25a5cb50e9f6d8aa13c8cd21f24ba909402775b262ac76d374d', 'hex')
    )

    const unsignedTx = AccessListEIP2930Transaction.fromTxData(txData, { common: usedCommon })

    const serializedMessageRaw = unsignedTx.serialize()

    t.ok(expectedUnsignedRaw.equals(serializedMessageRaw), 'serialized unsigned message correct')

    const signed = unsignedTx.sign(pkey)

    t.ok(v.eq(signed.v!), 'v correct')
    t.ok(r.eq(signed.r!), 'r correct')
    t.ok(s.eq(signed.s!), 's correct')
    t.ok(expectedSigned.equals(signed.serialize()), 'serialized signed message correct')
    t.ok(expectedHash.equals(signed.hash()), 'hash correct')

    const expectedJSON = {
      chainId: '0x796f6c6f763378',
      nonce: '0x0',
      gasPrice: '0x3b9aca00',
      gasLimit: '0x62d4',
      to: '0xdf0a88b2b68c673713a8ec826003676f272e3573',
      value: '0x1',
      data: '0x',
      accessList: [
        {
          address: '0x0000000000000000000000000000000000001337',
          storageKeys: ['0x0000000000000000000000000000000000000000000000000000000000000000'],
        },
      ],
      v: '0x0',
      r: '0x294ac94077b35057971e6b4b06dfdf55a6fbed819133a6c1d31e187f1bca938d',
      s: '0xbe950468ba1c25a5cb50e9f6d8aa13c8cd21f24ba909402775b262ac76d374d',
    }

    t.deepEqual(signed.toJSON(), expectedJSON)

    t.end()
  })
})
