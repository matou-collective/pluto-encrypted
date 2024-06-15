[@pluto-encrypted](../README.md) / [Exports](../modules.md) / encryption

# Module: encryption

**`Description`**

This package is an rxdb encryption layer, a replacement for the vulnerable crypto-js dependency provided by the free version of rxDB.
The package can be used outside or Pluto as its fully compatible with RXDB.

**`Examples`**

In order to use this package in any RXDB environment type the following code.
Install the package with npm

```bash
npm i @pluto-encrypted/encryption --save
```
or with yarn
```bash
npm i @pluto-encrypted/encryption --save
```

Integrate in your existing RXDB storage.
```typescript
import { wrappedKeyEncryptionStorage } from "@pluto-encrypted/encryption";
import { RxStorage } from "rxdb";
const storage: RxStorage<any, any> = wrappedKeyEncryptionStorage({
    storage: [[ADD your RXDB instance here]],
})
export default storage;
```

## Table of contents

### Interfaces

- [RxStorage](../interfaces/encryption.RxStorage.md)

### Type Aliases

- [CipherWithOutput](encryption.md#cipherwithoutput)
- [InternalStorePasswordDocType](encryption.md#internalstorepassworddoctype)

### Functions

- [decryptString](encryption.md#decryptstring)
- [encryptString](encryption.md#encryptstring)
- [wrappedKeyEncryptionStorage](encryption.md#wrappedkeyencryptionstorage)

## Type Aliases

### CipherWithOutput

Ƭ **CipherWithOutput**: `Cipher` & \{ `decrypt`: (`ciphertext`: `Uint8Array`, `output?`: `Uint8Array`) => `Uint8Array` ; `encrypt`: (`plaintext`: `Uint8Array`, `output?`: `Uint8Array`) => `Uint8Array`  }

#### Defined in

node_modules/@noble/ciphers/utils.d.ts:62

___

### InternalStorePasswordDocType

Ƭ **InternalStorePasswordDocType**: `InternalStoreDocType`\<\{ `hash`: `string`  }\>

#### Defined in

[packages/encryption/src/index.ts:110](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/encryption/src/index.ts#L110)

## Functions

### decryptString

▸ **decryptString**(`chacha`, `cipherText`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chacha` | [`CipherWithOutput`](encryption.md#cipherwithoutput) |
| `cipherText` | `string` |

#### Returns

`string`

#### Defined in

[packages/encryption/src/index.ts:82](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/encryption/src/index.ts#L82)

___

### encryptString

▸ **encryptString**(`chacha`, `value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chacha` | [`CipherWithOutput`](encryption.md#cipherwithoutput) |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/encryption/src/index.ts:67](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/encryption/src/index.ts#L67)

___

### wrappedKeyEncryptionStorage

▸ **wrappedKeyEncryptionStorage**\<`Internals`, `InstanceCreationOptions`\>(`args`): [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`Internals`, `InstanceCreationOptions`\>

Create encrypted storage for pluto-encrypted

#### Type parameters

| Name |
| :------ |
| `Internals` |
| `InstanceCreationOptions` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | { storage: RxStorage<Internals, InstanceCreationOptions>; } |
| `args.storage` | [`RxStorage`](../interfaces/encryption.RxStorage.md)\<`Internals`, `InstanceCreationOptions`\> | - |

#### Returns

[`RxStorage`](../interfaces/encryption.RxStorage.md)\<`Internals`, `InstanceCreationOptions`\>

RxStorage<Internals, InstanceCreationOptions>

#### Defined in

[packages/encryption/src/index.ts:120](https://github.com/atala-community-projects/pluto-encrypted/blob/788ef360/packages/encryption/src/index.ts#L120)
