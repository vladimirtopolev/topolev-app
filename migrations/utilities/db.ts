import * as async from 'async';
import {Model, Document} from 'mongoose';

export function saveItem<T extends Document>(model: Model<T>, item: T, cb?:(err: any, item: T) => void) {

    let _resolve;
    let _reject;
    return new Promise((resolve, reject) => {
        _resolve = resolve;
        _reject = reject;
    });

    const newItem: T = new model(item);
    newItem.save((err, savedItem) => cb(err, savedItem));
}

export function saveItems<T extends Document>(model:Model<T>, items: T[], cb?: (err: any) => void) {
    async.map(
        items,
        (item, cb) => saveItem(model, item, cb),
        (err, results) => cb(err)
    )
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
