import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset";

import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite";

import {  type Electric, schema } from "./generated/client";

import { authToken } from "./auth";

export const initElectric = async ():Promise<Electric> => electrify(
    await ElectricDatabase.init("my.db", sqliteWasm),
    schema,
    {
        auth: {
            token: authToken()
        }
    }
)