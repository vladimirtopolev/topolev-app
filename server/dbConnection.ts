import * as mongoose from 'mongoose';
import {Mongoose} from "mongoose";
import * as config from 'config';
import {DBConfig} from '../config/configSchema';

const DB_CONFIG = config.get<DBConfig>('dbConfig');

export const open = (): Promise<Mongoose> => {
    return mongoose.connect(DB_CONFIG.host, {dbName: DB_CONFIG.dbName})
        .then((mongoose: Mongoose) => {
            console.log(`Connection to DB is successful: ${DB_CONFIG.host}`);
            return mongoose;
        });
};
