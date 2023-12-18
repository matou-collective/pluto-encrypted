/**
 * @packageDocumentation
 * @module inmemory
 * @description This is a RXDB InMemory storage that supports encryption middleware.
 * In order to use this in your pluto-encrypted database you must write the following code:
 * Creating a InMemory compatible storage is very simple.
 * 
 * ```typescript
 * import InMemory from "@pluto-encrypted/inmemory";
 * import { Database } from "@pluto-encrypted/database";
 * //default password must be 32 bytes long
 * const defaultPassword = new Uint8Array(32).fill(1);
 * const database = db = await Database.createEncrypted({
 *          name: `my-db`,
 *          encryptionKey: defaultPassword,
 *          storage: InMemory,
 * });
 * ```
 */
import { RxStorage, RxStorageDefaultStatics, RxStorageInstance, RxStorageInstanceCreationParams } from "rxdb";
import { InMemorySettings, InMemoryStorageInternals, RxStorageInMemoryType } from "./inMemoryStorage/types";
import { RxStorageIntanceInMemory } from "./inMemoryStorage/instance";
import { InMemoryInternal } from "./inMemoryStorage/internal";
import { wrappedKeyEncryptionStorage } from "@pluto-encrypted/encryption";

let inMemoryInstance: RxStorageInMemoryType<any>;
let internalInstance: InMemoryInternal<any>

function getRxStorageMemory<RxDocType>(settings: InMemorySettings = {}): RxStorageInMemoryType<RxDocType> {
    if (!inMemoryInstance) {
        inMemoryInstance = {
            name: "in-memory",
            statics: RxStorageDefaultStatics,
            async createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, InMemorySettings>): Promise<RxStorageInstance<RxDocType, InMemoryStorageInternals<RxDocType>, InMemorySettings, any>> {
                if (!internalInstance) {
                    internalInstance = new InMemoryInternal<RxDocType>(0)
                } else {
                    internalInstance.refCount++
                }
                return new RxStorageIntanceInMemory(
                    this,
                    params.databaseName,
                    params.collectionName,
                    params.schema,
                    internalInstance,
                    settings
                )
            }
        }
    }

    return inMemoryInstance
}

/**
 * InMemory storage
 * @description Use this as storage in our RXDB database. For now there is no initialisation settings, so you can use it out of the box.
 */
const storage: RxStorage<any, any> = wrappedKeyEncryptionStorage({
    storage: getRxStorageMemory()
})

export default storage;