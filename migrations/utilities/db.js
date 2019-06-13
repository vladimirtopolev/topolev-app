"use strict";
exports.__esModule = true;
var async = require("async");
function saveItem(model, item, cb) {
    var _resolve;
    var _reject;
    return new Promise(function (resolve, reject) {
        _resolve = resolve;
        _reject = reject;
    });
    var newItem = new model(item);
    newItem.save(function (err, savedItem) { return cb(err, savedItem); });
}
exports.saveItem = saveItem;
function saveItems(model, items, cb) {
    async.map(items, function (item, cb) { return saveItem(model, item, cb); }, function (err, results) { return cb(err); });
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