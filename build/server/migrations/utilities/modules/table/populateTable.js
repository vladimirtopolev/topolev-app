"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var async = require("async");
var tableHeader_model_1 = require("../../../../src/modules/table/models/tableHeader.model");
var tableRow_model_1 = require("../../../../src/modules/table/models/tableRow.model");
var db_1 = require("../../db");
var tableCell_model_1 = require("../../../../src/modules/table/models/tableCell.model");
var table_model_1 = require("../../../../src/modules/table/models/table.model");
exports.populateTable = function (_a, endCallback) {
    var HEADERS = _a.HEADERS, ROWS = _a.ROWS, TABLE = _a.TABLE;
    var CELLS = ROWS.reduce(function (cells, row) {
        return cells.concat(row.cells);
    }, []);
    return new Promise(function (resolve, reject) {
        async.series([
            function (cb) { return db_1.saveItems(tableHeader_model_1.TableHeaderModel, HEADERS, cb); },
            function (cb) { return db_1.saveItems(tableCell_model_1.TableCellModel, CELLS, cb); },
            function (cb) { return db_1.saveItems(tableRow_model_1.TableRowModel, ROWS, cb); },
            function (cb) { return db_1.saveItem(table_model_1.TableModel, __assign({}, TABLE, { headers: HEADERS.map(function (header) { return header._id; }), rows: ROWS.map(function (row) { return row._id; }) }), cb); }
        ], function (err, res) {
            endCallback && endCallback(err, res);
            err ? reject(err) : resolve(res);
        });
    });
};
//# sourceMappingURL=populateTable.js.map