[@ethereumjs/tx](../README.md) / [transactionFactory](../modules/transactionfactory.md) / default

# Class: default

[transactionFactory](../modules/transactionfactory.md).default

## Table of contents

### Methods

- [fromBlockBodyData](transactionfactory.default.md#fromblockbodydata)
- [fromSerializedData](transactionfactory.default.md#fromserializeddata)
- [fromTxData](transactionfactory.default.md#fromtxdata)
- [getTransactionClass](transactionfactory.default.md#gettransactionclass)

## Methods

### fromBlockBodyData

▸ `Static` **fromBlockBodyData**(`data`: *Buffer* \| *Buffer*[], `txOptions?`: [*TxOptions*](../interfaces/types.txoptions.md)): [*TypedTransaction*](../modules/types.md#typedtransaction)

When decoding a BlockBody, in the transactions field, a field is either:
A Buffer (a TypedTransaction - encoded as TransactionType || rlp(TransactionPayload))
A Buffer[] (Legacy Transaction)
This method returns the right transaction.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | *Buffer* \| *Buffer*[] | - | A Buffer or Buffer[] |
| `txOptions` | [*TxOptions*](../interfaces/types.txoptions.md) | {} | The transaction options |

**Returns:** [*TypedTransaction*](../modules/types.md#typedtransaction)

Defined in: [transactionFactory.ts:83](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/transactionFactory.ts#L83)

___

### fromSerializedData

▸ `Static` **fromSerializedData**(`data`: *Buffer*, `txOptions?`: [*TxOptions*](../interfaces/types.txoptions.md)): [*TypedTransaction*](../modules/types.md#typedtransaction)

This method tries to decode serialized data.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | *Buffer* | - | The data Buffer |
| `txOptions` | [*TxOptions*](../interfaces/types.txoptions.md) | {} | The transaction options |

**Returns:** [*TypedTransaction*](../modules/types.md#typedtransaction)

Defined in: [transactionFactory.ts:49](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/transactionFactory.ts#L49)

___

### fromTxData

▸ `Static` **fromTxData**(`txData`: [*TxData*](../modules/types.md#txdata) \| [*AccessListEIP2930TxData*](../interfaces/types.accesslisteip2930txdata.md) \| [*FeeMarketEIP1559TxData*](../interfaces/types.feemarketeip1559txdata.md), `txOptions?`: [*TxOptions*](../interfaces/types.txoptions.md)): [*TypedTransaction*](../modules/types.md#typedtransaction)

Create a transaction from a `txData` object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `txData` | [*TxData*](../modules/types.md#txdata) \| [*AccessListEIP2930TxData*](../interfaces/types.accesslisteip2930txdata.md) \| [*FeeMarketEIP1559TxData*](../interfaces/types.feemarketeip1559txdata.md) | - | The transaction data. The `type` field will determine which transaction type is returned (if undefined, creates a legacy transaction) |
| `txOptions` | [*TxOptions*](../interfaces/types.txoptions.md) | {} | Options to pass on to the constructor of the transaction |

**Returns:** [*TypedTransaction*](../modules/types.md#typedtransaction)

Defined in: [transactionFactory.ts:22](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/transactionFactory.ts#L22)

___

### getTransactionClass

▸ `Static` **getTransactionClass**(`transactionID?`: *number*, `common?`: *default*): *typeof* [*default*](eip1559transaction.default.md) \| *typeof* [*default*](eip2930transaction.default.md) \| *typeof* [*default*](legacytransaction.default.md)

This helper method allows one to retrieve the class which matches the transactionID
If transactionID is undefined, returns the legacy transaction class.

**`deprecated`** - This method is deprecated and will be removed on the next major release

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transactionID` | *number* | 0 |  |
| `common?` | *default* | - | This option is not used |

**Returns:** *typeof* [*default*](eip1559transaction.default.md) \| *typeof* [*default*](eip2930transaction.default.md) \| *typeof* [*default*](legacytransaction.default.md)

Defined in: [transactionFactory.ts:102](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/transactionFactory.ts#L102)
