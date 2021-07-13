[@ethereumjs/tx](../README.md) / [types](../modules/types.md) / FeeMarketEIP1559TxData

# Interface: FeeMarketEIP1559TxData

[types](../modules/types.md).FeeMarketEIP1559TxData

[FeeMarketEIP1559Transaction](../modules/index.md#feemarketeip1559transaction) data.

## Hierarchy

- [AccessListEIP2930TxData](types.accesslisteip2930txdata.md)

  ↳ **FeeMarketEIP1559TxData**

## Table of contents

### Properties

- [accessList](types.feemarketeip1559txdata.md#accesslist)
- [chainId](types.feemarketeip1559txdata.md#chainid)
- [data](types.feemarketeip1559txdata.md#data)
- [gasLimit](types.feemarketeip1559txdata.md#gaslimit)
- [gasPrice](types.feemarketeip1559txdata.md#gasprice)
- [maxFeePerGas](types.feemarketeip1559txdata.md#maxfeepergas)
- [maxPriorityFeePerGas](types.feemarketeip1559txdata.md#maxpriorityfeepergas)
- [nonce](types.feemarketeip1559txdata.md#nonce)
- [r](types.feemarketeip1559txdata.md#r)
- [s](types.feemarketeip1559txdata.md#s)
- [to](types.feemarketeip1559txdata.md#to)
- [type](types.feemarketeip1559txdata.md#type)
- [v](types.feemarketeip1559txdata.md#v)
- [value](types.feemarketeip1559txdata.md#value)

## Properties

### accessList

• `Optional` **accessList**: [AccessListBuffer](../modules/types.md#accesslistbuffer) \| [AccessList](../modules/types.md#accesslist)

The access list which contains the addresses/storage slots which the transaction wishes to access

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[accessList](types.accesslisteip2930txdata.md#accesslist)

#### Defined in

[types.ts:177](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L177)

___

### chainId

• `Optional` **chainId**: `string` \| `number` \| `BN` \| `Buffer`

The transaction's chain ID

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[chainId](types.accesslisteip2930txdata.md#chainid)

#### Defined in

[types.ts:172](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L172)

___

### data

• `Optional` **data**: `string` \| `number` \| `BN` \| `Buffer` \| `number`[] \| `Uint8Array` \| `TransformableToBuffer`

This will contain the data of the message or the init of a contract.

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[data](types.accesslisteip2930txdata.md#data)

#### Defined in

[types.ts:141](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L141)

___

### gasLimit

• `Optional` **gasLimit**: `string` \| `number` \| `BN` \| `Buffer`

The transaction's gas limit.

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[gasLimit](types.accesslisteip2930txdata.md#gaslimit)

#### Defined in

[types.ts:126](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L126)

___

### gasPrice

• `Optional` **gasPrice**: `undefined`

The transaction's gas price.

#### Overrides

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[gasPrice](types.accesslisteip2930txdata.md#gasprice)

#### Defined in

[types.ts:187](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L187)

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: `string` \| `number` \| `BN` \| `Buffer`

The maximum total fee

#### Defined in

[types.ts:195](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L195)

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: `string` \| `number` \| `BN` \| `Buffer`

The maximum inclusion fee per gas (this fee is given to the miner)

#### Defined in

[types.ts:191](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L191)

___

### nonce

• `Optional` **nonce**: `string` \| `number` \| `BN` \| `Buffer`

The transaction's nonce.

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[nonce](types.accesslisteip2930txdata.md#nonce)

#### Defined in

[types.ts:116](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L116)

___

### r

• `Optional` **r**: `string` \| `number` \| `BN` \| `Buffer`

EC signature parameter.

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[r](types.accesslisteip2930txdata.md#r)

#### Defined in

[types.ts:151](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L151)

___

### s

• `Optional` **s**: `string` \| `number` \| `BN` \| `Buffer`

EC signature parameter.

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[s](types.accesslisteip2930txdata.md#s)

#### Defined in

[types.ts:156](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L156)

___

### to

• `Optional` **to**: `string` \| `Address` \| `Buffer`

The transaction's the address is sent to.

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[to](types.accesslisteip2930txdata.md#to)

#### Defined in

[types.ts:131](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L131)

___

### type

• `Optional` **type**: `string` \| `number` \| `BN` \| `Buffer`

The transaction type

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[type](types.accesslisteip2930txdata.md#type)

#### Defined in

[types.ts:162](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L162)

___

### v

• `Optional` **v**: `string` \| `number` \| `BN` \| `Buffer`

EC recovery ID.

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[v](types.accesslisteip2930txdata.md#v)

#### Defined in

[types.ts:146](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L146)

___

### value

• `Optional` **value**: `string` \| `number` \| `BN` \| `Buffer`

The amount of Ether sent.

#### Inherited from

[AccessListEIP2930TxData](types.accesslisteip2930txdata.md).[value](types.accesslisteip2930txdata.md#value)

#### Defined in

[types.ts:136](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L136)
