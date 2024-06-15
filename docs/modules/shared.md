[@pluto-encrypted](../README.md) / [Exports](../modules.md) / shared

# Module: shared

**`Description`**

Shared is used by other dependencies of pluto-encrypted to reduce code duplication.

## Table of contents

### Interfaces

- [DocWithIndexString](../interfaces/shared.DocWithIndexString.md)

### Type Aliases

- [DBOptions](shared.md#dboptions)
- [ExtractStaticMethods](shared.md#extractstaticmethods)
- [PlainJsonValue](shared.md#plainjsonvalue)
- [PlainSimpleJsonObject](shared.md#plainsimplejsonobject)
- [PropertyType](shared.md#propertytype)
- [RxDocumentMeta](shared.md#rxdocumentmeta)
- [UnionToIntersection](shared.md#uniontointersection)
- [ValuesOf](shared.md#valuesof)

### Functions

- [boundEQ](shared.md#boundeq)
- [boundGE](shared.md#boundge)
- [boundGT](shared.md#boundgt)
- [boundLE](shared.md#boundle)
- [boundLT](shared.md#boundlt)
- [compareDocsWithIndex](shared.md#comparedocswithindex)
- [conditionMatches](shared.md#conditionmatches)
- [fixTxPipe](shared.md#fixtxpipe)
- [getPrivateKeyValue](shared.md#getprivatekeyvalue)
- [safeIndexList](shared.md#safeindexlist)

## Type Aliases

### DBOptions

Ƭ **DBOptions**: `RxDatabaseCreator`

#### Defined in

[packages/shared/src/index.ts:258](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L258)

___

### ExtractStaticMethods

Ƭ **ExtractStaticMethods**\<`T`\>: \{ [K in keyof T as T[K] extends Function ? K : never]: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/shared/src/index.ts:22](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L22)

___

### PlainJsonValue

Ƭ **PlainJsonValue**: `string` \| `number` \| `boolean` \| [`PlainSimpleJsonObject`](shared.md#plainsimplejsonobject) \| [`PlainSimpleJsonObject`](shared.md#plainsimplejsonobject)[] \| [`PlainJsonValue`](shared.md#plainjsonvalue)[]

#### Defined in

node_modules/rxdb/dist/types/types/util.d.ts:6

___

### PlainSimpleJsonObject

Ƭ **PlainSimpleJsonObject**: `Object`

#### Index signature

▪ [k: `string`]: [`PlainJsonValue`](shared.md#plainjsonvalue) \| [`PlainJsonValue`](shared.md#plainjsonvalue)[]

#### Defined in

node_modules/rxdb/dist/types/types/util.d.ts:7

___

### PropertyType

Ƭ **PropertyType**\<`Type`, `Property`\>: `string` extends `Property` ? `unknown` : `Property` extends keyof `Type` ? `Type`[`Property`] : `Property` extends \`$\{number}\` ? `Type` extends `ReadonlyArray`\<infer ArrayType\> ? `ArrayType` : `unknown` : `Property` extends \`$\{infer Key}.$\{infer Rest}\` ? `Key` extends \`$\{number}\` ? `Type` extends `ReadonlyArray`\<infer ArrayType\> ? [`PropertyType`](shared.md#propertytype)\<`ArrayType`, `Rest`\> : `unknown` : `Key` extends keyof `Type` ? `Type`[`Key`] extends `Map`\<`string`, infer MapType\> ? `MapType` : [`PropertyType`](shared.md#propertytype)\<`Type`[`Key`], `Rest`\> : `unknown` : `unknown`

Typed Mango Query Selector

**`Link`**

https://github.com/mongodb/node-mongodb-native/blob/26bce4a8debb65df5a42dc8599e886c9c83de10d/src/mongo_types.ts

**`Link`**

https://stackoverflow.com/a/58436959/3443137

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Property` | extends `string` |

#### Defined in

node_modules/rxdb/dist/types/types/rx-query.d.ts:13

___

### RxDocumentMeta

Ƭ **RxDocumentMeta**: `Object`

Meta data that is attached to each document by RxDB.

#### Index signature

▪ [k: `string`]: [`PlainJsonValue`](shared.md#plainjsonvalue)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `lwt` | `number` | Last write time. Unix epoch in milliseconds. |

#### Defined in

node_modules/rxdb/dist/types/types/rx-document.d.ts:53

___

### UnionToIntersection

Ƭ **UnionToIntersection**\<`U`\>: `U` extends `any` ? (`k`: `U`) => `void` : `never` extends (`k`: infer I) => `void` ? `I` : `never`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Defined in

[packages/shared/src/index.ts:26](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L26)

___

### ValuesOf

Ƭ **ValuesOf**\<`T`\>: `T`[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/shared/src/index.ts:257](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L257)

## Functions

### boundEQ

▸ **boundEQ**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:215](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L215)

___

### boundGE

▸ **boundGE**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:203](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L203)

___

### boundGT

▸ **boundGT**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:206](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L206)

___

### boundLE

▸ **boundLE**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:212](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L212)

___

### boundLT

▸ **boundLT**\<`T`\>(`a`, `y`, `c`, `l?`, `h?`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `y` | `T` |
| `c` | `Compare`\<`T`\> |
| `l?` | `any` |
| `h?` | `any` |

#### Returns

`any`

#### Defined in

[packages/shared/src/index.ts:209](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L209)

___

### compareDocsWithIndex

▸ **compareDocsWithIndex**\<`RxDocType`\>(`a`, `b`): ``1`` \| ``0`` \| ``-1``

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DocWithIndexString`](../interfaces/shared.DocWithIndexString.md)\<`RxDocType`\> |
| `b` | [`DocWithIndexString`](../interfaces/shared.DocWithIndexString.md)\<`RxDocType`\> |

#### Returns

``1`` \| ``0`` \| ``-1``

#### Defined in

[packages/shared/src/index.ts:37](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L37)

___

### conditionMatches

▸ **conditionMatches**\<`RxDocType`\>(`selector`, `key`, `document`): `boolean`

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `MangoQuerySelector`\<`RxDocType`\> |
| `key` | `string` |
| `document` | `RxDocumentData`\<`RxDocType`\> |

#### Returns

`boolean`

#### Defined in

[packages/shared/src/index.ts:50](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L50)

___

### fixTxPipe

▸ **fixTxPipe**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[packages/shared/src/index.ts:219](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L219)

___

### getPrivateKeyValue

▸ **getPrivateKeyValue**\<`RxDocType`\>(`document`, `schema`): `string`

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | `RxDocumentData`\<`RxDocType`\> |
| `schema` | `Readonly`\<[`RxJsonSchema`](leveldb.md#rxjsonschema)\<`RxDocumentData`\<`RxDocType`\>\>\> |

#### Returns

`string`

#### Defined in

[packages/shared/src/index.ts:248](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L248)

___

### safeIndexList

▸ **safeIndexList**\<`RxDocType`\>(`schema`): `string`[][]

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `Readonly`\<[`RxJsonSchema`](leveldb.md#rxjsonschema)\<`RxDocumentData`\<`RxDocType`\>\>\> |

#### Returns

`string`[][]

#### Defined in

[packages/shared/src/index.ts:228](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/shared/src/index.ts#L228)
