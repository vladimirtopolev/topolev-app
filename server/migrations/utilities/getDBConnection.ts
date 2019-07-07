import * as mongoose from'mongoose';
import * as config from 'config';
import {DBConfig} from '../../config/configSchema';
import {Mongoose} from "mongoose";

const DB_CONFIG = config.get<DBConfig>('dbConfig');


export function getMongooseConnection():Promise<DBConfig> {
    return mongoose.connect(DB_CONFIG.host, {dbName: DB_CONFIG.dbName, useNewUrlParser: true})
        .then((mongoose: Mongoose) => {
            return DB_CONFIG;
        });
}
