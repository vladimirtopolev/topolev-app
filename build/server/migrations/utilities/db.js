"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var async = require("async");
function saveItem(model, item, cb) {
    var newItem = new model(item);
    return newItem.save(function (err, savedItem) { return cb && cb(err, savedItem); });
}
exports.saveItem = saveItem;
function saveItems(model, items, cb) {
    return new Promise(function (resolve, reject) {
        async.map(items, function (item, cb) { return saveItem(model, item, cb); }, function (err, results) {
            cb && cb(err, results);
            err ? reject(err) : resolve(results);
        });
    });
}
exports.saveItems = saveItems;
function dropTable(model, cb) {
    model.deleteMany({}, function (err) { return cb(err); });
}
exports.dropTable = dropTable;
function dropTables(models, cb) {
    async.each(models, function (model, done) { return dropTable(model, done); }, function (err) {
        cb(err);
    });
}
exports.dropTables = dropTables;
//# sourceMappingURL=db.js.map