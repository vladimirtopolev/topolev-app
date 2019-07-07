import * as async from 'async';
import {Model, Document} from 'mongoose';

export function saveItem<D extends Document, P>(model: Model<D>, item: P, cb?: (err: any, item: D) => void): Promise<D> {
    const newItem: D = new model(item);
    return newItem.save((err, savedItem) => cb && cb(err, savedItem));
}

export function saveItems<D extends Document, P>(
    model: Model<D>,
    items: P[],
    cb?: (err: any, items: (D | undefined)[] | undefined) => void
): Promise<(D | undefined)[] | undefined> {
    return new Promise((resolve, reject) => {
        async.map<P, D>(
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
