[@pluto-encrypted](../README.md) / [Exports](../modules.md) / [encryption](../modules/encryption.md) / RxStorage

# Interface: RxStorage\<Internals, InstanceCreationOptions\>

[encryption](../modules/encryption.md).RxStorage

A RxStorage is a module that acts
as a factory that can create multiple RxStorageInstance
objects.

All data inputs and outputs of a StorageInstance must be plain json objects.
Do not use Map, Set or anything else that cannot be JSON.stringify-ed.
This will ensure that the storage can exchange data
when it is a WebWorker or a WASM process or data is send via BroadcastChannel.

## Type parameters

| Name |
| :------ |
| `Internals` |
| `InstanceCreationOptions` |

## Table of contents

### Properties

- [name](encryption.RxStorage.md#name)
- [rxdbVersion](encryption.RxStorage.md#rxdbversion)

### Methods

- [createStorageInstance](encryption.RxStorage.md#createstorageinstance)

## Properties

### name

• `Readonly` **name**: `string`

name of the storage engine
used to detect if plugins do not work so we can throw proper errors.

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.interface.d.ts:48

___

### rxdbVersion

• `Readonly` **rxdbVersion**: `string`

RxDB version is part of the storage
so we can have fallbacks and stuff when
multiple storages with different version are in use
like in the storage migration plugin.

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.interface.d.ts:56

## Methods

### createStorageInstance

▸ **createStorageInstance**\<`RxDocType`\>(`params`): `Promise`\<`RxStorageInstance`\<`RxDocType`, `Internals`, `InstanceCreationOptions`, `any`\>\>

Creates a storage instance
that can contain the NoSQL documents of a collection.

#### Type parameters

| Name |
| :------ |
| `RxDocType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RxStorageInstanceCreationParams`\<`RxDocType`, `InstanceCreationOptions`\> |

#### Returns

`Promise`\<`RxStorageInstance`\<`RxDocType`, `Internals`, `InstanceCreationOptions`, `any`\>\>

#### Defined in

node_modules/rxdb/dist/types/types/rx-storage.interface.d.ts:62
