[@ethereumjs/tx](../README.md) / [eip1559Transaction](../modules/eip1559transaction.md) / default

# Class: default

[eip1559Transaction](../modules/eip1559transaction.md).default

Typed transaction with a new gas fee market mechanism

- TransactionType: 2
- EIP: [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559)

## Hierarchy

- [BaseTransaction](basetransaction.basetransaction-1.md)<[default](eip1559transaction.default.md)\>

  ↳ **default**

## Table of contents

### Constructors

- [constructor](eip1559transaction.default.md#constructor)

### Properties

- [AccessListJSON](eip1559transaction.default.md#accesslistjson)
- [accessList](eip1559transaction.default.md#accesslist)
- [chainId](eip1559transaction.default.md#chainid)
- [common](eip1559transaction.default.md#common)
- [data](eip1559transaction.default.md#data)
- [gasLimit](eip1559transaction.default.md#gaslimit)
- [maxFeePerGas](eip1559transaction.default.md#maxfeepergas)
- [maxPriorityFeePerGas](eip1559transaction.default.md#maxpriorityfeepergas)
- [nonce](eip1559transaction.default.md#nonce)
- [r](eip1559transaction.default.md#r)
- [s](eip1559transaction.default.md#s)
- [to](eip1559transaction.default.md#to)
- [v](eip1559transaction.default.md#v)
- [value](eip1559transaction.default.md#value)

### Accessors

- [senderR](eip1559transaction.default.md#senderr)
- [senderS](eip1559transaction.default.md#senders)
- [transactionType](eip1559transaction.default.md#transactiontype)
- [type](eip1559transaction.default.md#type)
- [yParity](eip1559transaction.default.md#yparity)

### Methods

- [\_processSignature](eip1559transaction.default.md#_processsignature)
- [getBaseFee](eip1559transaction.default.md#getbasefee)
- [getDataFee](eip1559transaction.default.md#getdatafee)
- [getMessageToSign](eip1559transaction.default.md#getmessagetosign)
- [getMessageToVerifySignature](eip1559transaction.default.md#getmessagetoverifysignature)
- [getSenderAddress](eip1559transaction.default.md#getsenderaddress)
- [getSenderPublicKey](eip1559transaction.default.md#getsenderpublickey)
- [getUpfrontCost](eip1559transaction.default.md#getupfrontcost)
- [hash](eip1559transaction.default.md#hash)
- [isSigned](eip1559transaction.default.md#issigned)
- [raw](eip1559transaction.default.md#raw)
- [serialize](eip1559transaction.default.md#serialize)
- [sign](eip1559transaction.default.md#sign)
- [supports](eip1559transaction.default.md#supports)
- [toCreationAddress](eip1559transaction.default.md#tocreationaddress)
- [toJSON](eip1559transaction.default.md#tojson)
- [validate](eip1559transaction.default.md#validate)
- [verifySignature](eip1559transaction.default.md#verifysignature)
- [fromRlpSerializedTx](eip1559transaction.default.md#fromrlpserializedtx)
- [fromSerializedTx](eip1559transaction.default.md#fromserializedtx)
- [fromTxData](eip1559transaction.default.md#fromtxdata)
- [fromValuesArray](eip1559transaction.default.md#fromvaluesarray)

## Constructors

### constructor

• **new default**(`txData`, `opts?`)

This constructor takes the values, validates them, assigns them and freezes the object.

It is not recommended to use this constructor directly. Instead use
the static factory methods to assist in creating a Transaction object from
varying data types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txData` | [FeeMarketEIP1559TxData](../interfaces/types.feemarketeip1559txdata.md) |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[constructor](basetransaction.basetransaction-1.md#constructor)

#### Defined in

[eip1559Transaction.ts:172](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L172)

## Properties

### AccessListJSON

• `Readonly` **AccessListJSON**: [AccessList](../modules/types.md#accesslist)

#### Defined in

[eip1559Transaction.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L35)

___

### accessList

• `Readonly` **accessList**: [AccessListBuffer](../modules/types.md#accesslistbuffer)

#### Defined in

[eip1559Transaction.ts:34](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L34)

___

### chainId

• `Readonly` **chainId**: `BN`

#### Defined in

[eip1559Transaction.ts:33](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L33)

___

### common

• `Readonly` **common**: `default`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[common](basetransaction.basetransaction-1.md#common)

#### Defined in

[eip1559Transaction.ts:39](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L39)

___

### data

• `Readonly` **data**: `Buffer`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[data](basetransaction.basetransaction-1.md#data)

#### Defined in

[baseTransaction.ts:38](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L38)

___

### gasLimit

• `Readonly` **gasLimit**: `BN`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[gasLimit](basetransaction.basetransaction-1.md#gaslimit)

#### Defined in

[baseTransaction.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L35)

___

### maxFeePerGas

• `Readonly` **maxFeePerGas**: `BN`

#### Defined in

[eip1559Transaction.ts:37](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L37)

___

### maxPriorityFeePerGas

• `Readonly` **maxPriorityFeePerGas**: `BN`

#### Defined in

[eip1559Transaction.ts:36](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L36)

___

### nonce

• `Readonly` **nonce**: `BN`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[nonce](basetransaction.basetransaction-1.md#nonce)

#### Defined in

[baseTransaction.ts:34](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L34)

___

### r

• `Optional` `Readonly` **r**: `BN`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[r](basetransaction.basetransaction-1.md#r)

#### Defined in

[baseTransaction.ts:41](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L41)

___

### s

• `Optional` `Readonly` **s**: `BN`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[s](basetransaction.basetransaction-1.md#s)

#### Defined in

[baseTransaction.ts:42](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L42)

___

### to

• `Optional` `Readonly` **to**: `Address`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[to](basetransaction.basetransaction-1.md#to)

#### Defined in

[baseTransaction.ts:36](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L36)

___

### v

• `Optional` `Readonly` **v**: `BN`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[v](basetransaction.basetransaction-1.md#v)

#### Defined in

[baseTransaction.ts:40](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L40)

___

### value

• `Readonly` **value**: `BN`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[value](basetransaction.basetransaction-1.md#value)

#### Defined in

[baseTransaction.ts:37](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L37)

## Accessors

### senderR

• `get` **senderR**(): `undefined` \| `BN`

EIP-2930 alias for `r`

**`deprecated`** use `r` instead

#### Returns

`undefined` \| `BN`

#### Defined in

[eip1559Transaction.ts:54](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L54)

___

### senderS

• `get` **senderS**(): `undefined` \| `BN`

EIP-2930 alias for `s`

**`deprecated`** use `s` instead

#### Returns

`undefined` \| `BN`

#### Defined in

[eip1559Transaction.ts:63](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L63)

___

### transactionType

• `get` **transactionType**(): `number`

Alias for [BaseTransaction.type](basetransaction.basetransaction-1.md#type)

**`deprecated`** Use `type` instead

#### Returns

`number`

#### Defined in

[baseTransaction.ts:104](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L104)

___

### type

• `get` **type**(): `number`

Returns the transaction type.

Note: legacy txs will return tx type `0`.

#### Returns

`number`

#### Defined in

[baseTransaction.ts:113](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L113)

___

### yParity

• `get` **yParity**(): `undefined` \| `BN`

EIP-2930 alias for `v`

**`deprecated`** use `v` instead

#### Returns

`undefined` \| `BN`

#### Defined in

[eip1559Transaction.ts:72](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L72)

## Methods

### \_processSignature

▸ **_processSignature**(`v`, `r`, `s`): [default](eip1559transaction.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |
| `r` | `Buffer` |
| `s` | `Buffer` |

#### Returns

[default](eip1559transaction.default.md)

#### Overrides

BaseTransaction.\_processSignature

#### Defined in

[eip1559Transaction.ts:371](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L371)

___

### getBaseFee

▸ **getBaseFee**(): `BN`

The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)

#### Returns

`BN`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[getBaseFee](basetransaction.basetransaction-1.md#getbasefee)

#### Defined in

[baseTransaction.ts:161](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L161)

___

### getDataFee

▸ **getDataFee**(): `BN`

The amount of gas paid for the data in this tx

#### Returns

`BN`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getDataFee](basetransaction.basetransaction-1.md#getdatafee)

#### Defined in

[eip1559Transaction.ts:238](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L238)

___

### getMessageToSign

▸ **getMessageToSign**(`hashMessage`): `Buffer`[]

Returns the serialized unsigned tx (hashed or raw), which can be used
to sign the transaction (e.g. for sending to a hardware wallet).

Note: in contrast to the legacy tx the raw message format is already
serialized and doesn't need to be RLP encoded any more.

```javascript
const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashMessage` | ``false`` | Return hashed message if set to true (default: true) |

#### Returns

`Buffer`[]

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getMessageToSign](basetransaction.basetransaction-1.md#getmessagetosign)

#### Defined in

[eip1559Transaction.ts:307](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L307)

▸ **getMessageToSign**(`hashMessage?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashMessage?` | ``true`` |

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getMessageToSign](basetransaction.basetransaction-1.md#getmessagetosign)

#### Defined in

[eip1559Transaction.ts:308](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L308)

___

### getMessageToVerifySignature

▸ **getMessageToVerifySignature**(): `Buffer`

Computes a sha3-256 hash which can be used to verify the signature

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getMessageToVerifySignature](basetransaction.basetransaction-1.md#getmessagetoverifysignature)

#### Defined in

[eip1559Transaction.ts:336](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L336)

___

### getSenderAddress

▸ **getSenderAddress**(): `Address`

Returns the sender's address

#### Returns

`Address`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[getSenderAddress](basetransaction.basetransaction-1.md#getsenderaddress)

#### Defined in

[baseTransaction.ts:249](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L249)

___

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Buffer`

Returns the public key of the sender

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getSenderPublicKey](basetransaction.basetransaction-1.md#getsenderpublickey)

#### Defined in

[eip1559Transaction.ts:343](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L343)

___

### getUpfrontCost

▸ **getUpfrontCost**(`baseFee?`): `BN`

The up front amount that an account must have for this transaction to be valid

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseFee` | `BN` | The base fee of the block (will be set to 0 if not provided) |

#### Returns

`BN`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getUpfrontCost](basetransaction.basetransaction-1.md#getupfrontcost)

#### Defined in

[eip1559Transaction.ts:248](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L248)

___

### hash

▸ **hash**(): `Buffer`

Computes a sha3-256 hash of the serialized tx.

This method can only be used for signed txs (it throws otherwise).
Use {@link FeeMarketEIP1559Transaction.getMessageToSign} to get a tx hash for the purpose of signing.

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[hash](basetransaction.basetransaction-1.md#hash)

#### Defined in

[eip1559Transaction.ts:325](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L325)

___

### isSigned

▸ **isSigned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[isSigned](basetransaction.basetransaction-1.md#issigned)

#### Defined in

[baseTransaction.ts:216](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L216)

___

### raw

▸ **raw**(): [FeeMarketEIP1559ValuesArray](../modules/types.md#feemarketeip1559valuesarray)

Returns a Buffer Array of the raw Buffers of the EIP-1559 transaction, in order.

Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
accessList, signatureYParity, signatureR, signatureS]`

Use {@link FeeMarketEIP1559Transaction.serialize} to add to block data for {@link Block.fromValuesArray}.

#### Returns

[FeeMarketEIP1559ValuesArray](../modules/types.md#feemarketeip1559valuesarray)

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[raw](basetransaction.basetransaction-1.md#raw)

#### Defined in

[eip1559Transaction.ts:262](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L262)

___

### serialize

▸ **serialize**(): `Buffer`

Returns the serialized encoding of the EIP-1559 transaction.

Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
accessList, signatureYParity, signatureR, signatureS])`

Note that in contrast to the legacy tx serialization format this is not
valid RLP any more due to the raw tx type preceeding and concatenated to
the RLP encoding of the values.

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[serialize](basetransaction.basetransaction-1.md#serialize)

#### Defined in

[eip1559Transaction.ts:289](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L289)

___

### sign

▸ **sign**(`privateKey`): [default](eip1559transaction.default.md)

Signs a transaction.

Note that the signed tx is returned as a new object,
use as follows:
```javascript
const signedTx = tx.sign(privateKey)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Buffer` |

#### Returns

[default](eip1559transaction.default.md)

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[sign](basetransaction.basetransaction-1.md#sign)

#### Defined in

[baseTransaction.ts:267](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L267)

___

### supports

▸ **supports**(`capability`): `boolean`

Checks if a tx type defining capability is active
on a tx, for example the EIP-1559 fee market mechanism
or the EIP-2930 access list feature.

Note that this is different from the tx type itself,
so EIP-2930 access lists can very well be active
on an EIP-1559 tx for example.

This method can be useful for feature checks if the
tx type is unknown (e.g. when instantiated with
the tx factory).

See `Capabilites` in the `types` module for a reference
on all supported capabilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `capability` | [Capabilities](../enums/types.capabilities.md) |

#### Returns

`boolean`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[supports](basetransaction.basetransaction-1.md#supports)

#### Defined in

[baseTransaction.ts:133](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L133)

___

### toCreationAddress

▸ **toCreationAddress**(): `boolean`

If the tx's `to` is to the creation address

#### Returns

`boolean`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[toCreationAddress](basetransaction.basetransaction-1.md#tocreationaddress)

#### Defined in

[baseTransaction.ts:191](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L191)

___

### toJSON

▸ **toJSON**(): [JsonTx](../interfaces/types.jsontx.md)

Returns an object with the JSON representation of the transaction

#### Returns

[JsonTx](../interfaces/types.jsontx.md)

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[toJSON](basetransaction.basetransaction-1.md#tojson)

#### Defined in

[eip1559Transaction.ts:398](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L398)

___

### validate

▸ **validate**(): `boolean`

Checks if the transaction has the minimum amount of gas required
(DataFee + TxFee + Creation Fee).

#### Returns

`boolean`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[validate](basetransaction.basetransaction-1.md#validate)

#### Defined in

[baseTransaction.ts:141](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L141)

▸ **validate**(`stringError`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringError` | ``false`` |

#### Returns

`boolean`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[validate](basetransaction.basetransaction-1.md#validate)

#### Defined in

[baseTransaction.ts:142](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L142)

▸ **validate**(`stringError`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringError` | ``true`` |

#### Returns

`string`[]

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[validate](basetransaction.basetransaction-1.md#validate)

#### Defined in

[baseTransaction.ts:143](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L143)

___

### verifySignature

▸ **verifySignature**(): `boolean`

Determines if the signature is valid

#### Returns

`boolean`

#### Inherited from

[BaseTransaction](basetransaction.basetransaction-1.md).[verifySignature](basetransaction.basetransaction-1.md#verifysignature)

#### Defined in

[baseTransaction.ts:236](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L236)

___

### fromRlpSerializedTx

▸ `Static` **fromRlpSerializedTx**(`serialized`, `opts?`): [default](eip1559transaction.default.md)

Instantiate a transaction from the serialized tx.
(alias of {@link FeeMarketEIP1559Transaction.fromSerializedTx})

Note: This means that the Buffer should start with 0x01.

**`deprecated`** this constructor alias is deprecated and will be removed
in favor of the {@link FeeMarketEIP1559Transaction.fromSerializedTx} constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `Buffer` |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Returns

[default](eip1559transaction.default.md)

#### Defined in

[eip1559Transaction.ts:123](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L123)

___

### fromSerializedTx

▸ `Static` **fromSerializedTx**(`serialized`, `opts?`): [default](eip1559transaction.default.md)

Instantiate a transaction from the serialized tx.

Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
accessList, signatureYParity, signatureR, signatureS])`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `Buffer` |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Returns

[default](eip1559transaction.default.md)

#### Defined in

[eip1559Transaction.ts:96](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L96)

___

### fromTxData

▸ `Static` **fromTxData**(`txData`, `opts?`): [default](eip1559transaction.default.md)

Instantiate a transaction from a data dictionary.

Format: { chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
accessList, v, r, s }

Notes:
- `chainId` will be set automatically if not provided
- All parameters are optional and have some basic default values

#### Parameters

| Name | Type |
| :------ | :------ |
| `txData` | [FeeMarketEIP1559TxData](../interfaces/types.feemarketeip1559txdata.md) |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Returns

[default](eip1559transaction.default.md)

#### Defined in

[eip1559Transaction.ts:86](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L86)

___

### fromValuesArray

▸ `Static` **fromValuesArray**(`values`, `opts?`): [default](eip1559transaction.default.md)

Create a transaction from a values array.

Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
accessList, signatureYParity, signatureR, signatureS]`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [FeeMarketEIP1559ValuesArray](../modules/types.md#feemarketeip1559valuesarray) |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Returns

[default](eip1559transaction.default.md)

#### Defined in

[eip1559Transaction.ts:133](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip1559Transaction.ts#L133)
