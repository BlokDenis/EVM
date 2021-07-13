[@ethereumjs/tx](../README.md) / [eip2930Transaction](../modules/eip2930transaction.md) / default

# Class: default

[eip2930Transaction](../modules/eip2930transaction.md).default

Typed transaction with optional access lists

- TransactionType: 1
- EIP: [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930)

## Hierarchy

- [BaseTransaction](basetransaction.basetransaction-1.md)<[default](eip2930transaction.default.md)\>

  ↳ **default**

## Table of contents

### Constructors

- [constructor](eip2930transaction.default.md#constructor)

### Properties

- [AccessListJSON](eip2930transaction.default.md#accesslistjson)
- [accessList](eip2930transaction.default.md#accesslist)
- [chainId](eip2930transaction.default.md#chainid)
- [common](eip2930transaction.default.md#common)
- [data](eip2930transaction.default.md#data)
- [gasLimit](eip2930transaction.default.md#gaslimit)
- [gasPrice](eip2930transaction.default.md#gasprice)
- [nonce](eip2930transaction.default.md#nonce)
- [r](eip2930transaction.default.md#r)
- [s](eip2930transaction.default.md#s)
- [to](eip2930transaction.default.md#to)
- [v](eip2930transaction.default.md#v)
- [value](eip2930transaction.default.md#value)

### Accessors

- [senderR](eip2930transaction.default.md#senderr)
- [senderS](eip2930transaction.default.md#senders)
- [transactionType](eip2930transaction.default.md#transactiontype)
- [type](eip2930transaction.default.md#type)
- [yParity](eip2930transaction.default.md#yparity)

### Methods

- [\_processSignature](eip2930transaction.default.md#_processsignature)
- [getBaseFee](eip2930transaction.default.md#getbasefee)
- [getDataFee](eip2930transaction.default.md#getdatafee)
- [getMessageToSign](eip2930transaction.default.md#getmessagetosign)
- [getMessageToVerifySignature](eip2930transaction.default.md#getmessagetoverifysignature)
- [getSenderAddress](eip2930transaction.default.md#getsenderaddress)
- [getSenderPublicKey](eip2930transaction.default.md#getsenderpublickey)
- [getUpfrontCost](eip2930transaction.default.md#getupfrontcost)
- [hash](eip2930transaction.default.md#hash)
- [isSigned](eip2930transaction.default.md#issigned)
- [raw](eip2930transaction.default.md#raw)
- [serialize](eip2930transaction.default.md#serialize)
- [sign](eip2930transaction.default.md#sign)
- [supports](eip2930transaction.default.md#supports)
- [toCreationAddress](eip2930transaction.default.md#tocreationaddress)
- [toJSON](eip2930transaction.default.md#tojson)
- [validate](eip2930transaction.default.md#validate)
- [verifySignature](eip2930transaction.default.md#verifysignature)
- [fromRlpSerializedTx](eip2930transaction.default.md#fromrlpserializedtx)
- [fromSerializedTx](eip2930transaction.default.md#fromserializedtx)
- [fromTxData](eip2930transaction.default.md#fromtxdata)
- [fromValuesArray](eip2930transaction.default.md#fromvaluesarray)

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
| `txData` | [AccessListEIP2930TxData](../interfaces/types.accesslisteip2930txdata.md) |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[constructor](basetransaction.basetransaction-1.md#constructor)

#### Defined in

[eip2930Transaction.ts:160](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L160)

## Properties

### AccessListJSON

• `Readonly` **AccessListJSON**: [AccessList](../modules/types.md#accesslist)

#### Defined in

[eip2930Transaction.ts:36](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L36)

___

### accessList

• `Readonly` **accessList**: [AccessListBuffer](../modules/types.md#accesslistbuffer)

#### Defined in

[eip2930Transaction.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L35)

___

### chainId

• `Readonly` **chainId**: `BN`

#### Defined in

[eip2930Transaction.ts:34](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L34)

___

### common

• `Readonly` **common**: `default`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[common](basetransaction.basetransaction-1.md#common)

#### Defined in

[eip2930Transaction.ts:39](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L39)

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

### gasPrice

• `Readonly` **gasPrice**: `BN`

#### Defined in

[eip2930Transaction.ts:37](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L37)

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

[eip2930Transaction.ts:54](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L54)

___

### senderS

• `get` **senderS**(): `undefined` \| `BN`

EIP-2930 alias for `s`

**`deprecated`** use `s` instead

#### Returns

`undefined` \| `BN`

#### Defined in

[eip2930Transaction.ts:63](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L63)

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

[eip2930Transaction.ts:72](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L72)

## Methods

### \_processSignature

▸ **_processSignature**(`v`, `r`, `s`): [default](eip2930transaction.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |
| `r` | `Buffer` |
| `s` | `Buffer` |

#### Returns

[default](eip2930transaction.default.md)

#### Overrides

BaseTransaction.\_processSignature

#### Defined in

[eip2930Transaction.ts:339](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L339)

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

[eip2930Transaction.ts:212](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L212)

___

### getMessageToSign

▸ **getMessageToSign**(`hashMessage?`): `Buffer`

Returns the serialized unsigned tx (hashed or raw), which can be used
to sign the transaction (e.g. for sending to a hardware wallet).

Note: in contrast to the legacy tx the raw message format is already
serialized and doesn't need to be RLP encoded any more.

```javascript
const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `hashMessage` | `boolean` | true | Return hashed message if set to true (default: true) |

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getMessageToSign](basetransaction.basetransaction-1.md#getmessagetosign)

#### Defined in

[eip2930Transaction.ts:277](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L277)

___

### getMessageToVerifySignature

▸ **getMessageToVerifySignature**(): `Buffer`

Computes a sha3-256 hash which can be used to verify the signature

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getMessageToVerifySignature](basetransaction.basetransaction-1.md#getmessagetoverifysignature)

#### Defined in

[eip2930Transaction.ts:304](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L304)

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

[eip2930Transaction.ts:311](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L311)

___

### getUpfrontCost

▸ **getUpfrontCost**(): `BN`

The up front amount that an account must have for this transaction to be valid

#### Returns

`BN`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[getUpfrontCost](basetransaction.basetransaction-1.md#getupfrontcost)

#### Defined in

[eip2930Transaction.ts:221](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L221)

___

### hash

▸ **hash**(): `Buffer`

Computes a sha3-256 hash of the serialized tx.

This method can only be used for signed txs (it throws otherwise).
Use {@link AccessListEIP2930Transaction.getMessageToSign} to get a tx hash for the purpose of signing.

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[hash](basetransaction.basetransaction-1.md#hash)

#### Defined in

[eip2930Transaction.ts:293](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L293)

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

▸ **raw**(): [AccessListEIP2930ValuesArray](../modules/types.md#accesslisteip2930valuesarray)

Returns a Buffer Array of the raw Buffers of the EIP-2930 transaction, in order.

Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
signatureYParity (v), signatureR (r), signatureS (s)]`

Use {@link AccessListEIP2930Transaction.serialize} to add to block data for {@link Block.fromValuesArray}.

#### Returns

[AccessListEIP2930ValuesArray](../modules/types.md#accesslisteip2930valuesarray)

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[raw](basetransaction.basetransaction-1.md#raw)

#### Defined in

[eip2930Transaction.ts:233](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L233)

___

### serialize

▸ **serialize**(): `Buffer`

Returns the serialized encoding of the EIP-2930 transaction.

Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
signatureYParity (v), signatureR (r), signatureS (s)])`

Note that in contrast to the legacy tx serialization format this is not
valid RLP any more due to the raw tx type preceeding and concatenated to
the RLP encoding of the values.

#### Returns

`Buffer`

#### Overrides

[BaseTransaction](basetransaction.basetransaction-1.md).[serialize](basetransaction.basetransaction-1.md#serialize)

#### Defined in

[eip2930Transaction.ts:259](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L259)

___

### sign

▸ **sign**(`privateKey`): [default](eip2930transaction.default.md)

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

[default](eip2930transaction.default.md)

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

[eip2930Transaction.ts:365](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L365)

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

▸ `Static` **fromRlpSerializedTx**(`serialized`, `opts?`): [default](eip2930transaction.default.md)

Instantiate a transaction from the serialized tx.
(alias of {@link AccessListEIP2930Transaction.fromSerializedTx})

Note: This means that the Buffer should start with 0x01.

**`deprecated`** this constructor alias is deprecated and will be removed
in favor of the {@link AccessListEIP2930Transaction.fromSerializedTx} constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `Buffer` |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Returns

[default](eip2930transaction.default.md)

#### Defined in

[eip2930Transaction.ts:123](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L123)

___

### fromSerializedTx

▸ `Static` **fromSerializedTx**(`serialized`, `opts?`): [default](eip2930transaction.default.md)

Instantiate a transaction from the serialized tx.

Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
signatureYParity (v), signatureR (r), signatureS (s)])`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `Buffer` |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Returns

[default](eip2930transaction.default.md)

#### Defined in

[eip2930Transaction.ts:96](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L96)

___

### fromTxData

▸ `Static` **fromTxData**(`txData`, `opts?`): [default](eip2930transaction.default.md)

Instantiate a transaction from a data dictionary.

Format: { chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
v, r, s }

Notes:
- `chainId` will be set automatically if not provided
- All parameters are optional and have some basic default values

#### Parameters

| Name | Type |
| :------ | :------ |
| `txData` | [AccessListEIP2930TxData](../interfaces/types.accesslisteip2930txdata.md) |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Returns

[default](eip2930transaction.default.md)

#### Defined in

[eip2930Transaction.ts:86](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L86)

___

### fromValuesArray

▸ `Static` **fromValuesArray**(`values`, `opts?`): [default](eip2930transaction.default.md)

Create a transaction from a values array.

Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
signatureYParity (v), signatureR (r), signatureS (s)]`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [AccessListEIP2930ValuesArray](../modules/types.md#accesslisteip2930valuesarray) |
| `opts` | [TxOptions](../interfaces/types.txoptions.md) |

#### Returns

[default](eip2930transaction.default.md)

#### Defined in

[eip2930Transaction.ts:133](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip2930Transaction.ts#L133)
