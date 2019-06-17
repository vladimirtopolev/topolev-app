import * as async from 'async';
import {Model, Document} from 'mongoose';

export function saveItem<T extends Document>(model: Model<T>, item: T, cb?: (err: any, item: T) => void): Promise<T> {
    const newItem: T = new model(item);
    return newItem.save((err, savedItem) => cb(err, savedItem));
}

export function saveItems<T extends Document>(model: Model<T>, items: T[], cb?: (err: any, items: T[]) => void): Promise<T[]> {
    return new Promise((resolve, reject) => {
        async.map<T, T>(
            items,
            (item, cb) => saveItem(model, item, cb),
            (err, results) => {
                cb && cb(err, results);
                err ? reject(err) : resolve(results);
            }
        )
    });
}

export function dropTable<T extends Document>(model: Model<T>, cb: (err: any) => void) {
    model.deleteMany({}, (err) => cb(err));
}

export function dropTables<T extends Document>(models: Model<T>[], cb: (err: any) => void) {
    async.each(
        models,
        (model, done) => dropTable(model, done),
        (err) => {
            cb(err);
        }
    )
}
