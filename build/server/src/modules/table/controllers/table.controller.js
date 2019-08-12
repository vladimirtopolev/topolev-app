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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var table_model_1 = require("../models/table.model");
var tableRow_model_1 = require("../models/tableRow.model");
var tableCell_model_1 = require("../models/tableCell.model");
var populateRowsDescription = {
    path: 'rows',
    model: 'TableRow',
    populate: {
        path: 'cells',
        model: 'TableCell',
        populate: {
            path: 'header',
            model: 'TableHeader'
        }
    }
};
var populateCellDescription = {
    path: 'cells',
    model: 'TableCell',
    populate: {
        path: 'header',
        model: 'TableHeader'
    }
};
var TableController = /** @class */ (function () {
    function TableController() {
        var _this = this;
        this.getTable = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var tableName, table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableName = req.params.tableName;
                        return [4 /*yield*/, table_model_1.TableModel.findOne({ name: tableName })
                                .populate('headers')
                                .populate(populateRowsDescription)
                                .exec()];
                    case 1:
                        table = _a.sent();
                        if (table) {
                            return [2 /*return*/, res.json(table)];
                        }
                        return [2 /*return*/, res.status(404).json({ error: "Table \"" + tableName + "\" does not exist" })];
                }
            });
        }); };
        this.getHeaders = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var tableName, table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableName = req.params.tableName;
                        return [4 /*yield*/, table_model_1.TableModel.findOne({ name: tableName })
                                .populate('headers')
                                .exec()];
                    case 1:
                        table = _a.sent();
                        if (table) {
                            return [2 /*return*/, res.json(table)];
                        }
                        return [2 /*return*/, res.status(404).json({ error: "Table \"" + tableName + "\" does not exist" })];
                }
            });
        }); };
        this.getRows = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var tableName, table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableName = req.params.tableName;
                        return [4 /*yield*/, table_model_1.TableModel.findOne({ name: tableName })
                                .populate(populateRowsDescription)
                                .exec()];
                    case 1:
                        table = _a.sent();
                        if (table) {
                            return [2 /*return*/, res.json(table)];
                        }
                        return [2 /*return*/, res.status(404).json({ error: "Table \"" + tableName + "\" does not exist" })];
                }
            });
        }); };
        this._getRow = function (tableName, rowId, res) { return __awaiter(_this, void 0, void 0, function () {
            var table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, table_model_1.TableModel.findOne({ name: tableName, rows: { $elemMatch: { $eq: rowId } } })
                            .populate(populateRowsDescription)
                            .populate('headers')
                            .exec()];
                    case 1:
                        table = _a.sent();
                        if (table) {
                            return [2 /*return*/, res.json(table)];
                        }
                        return [2 /*return*/, res.status(404).json({ error: "Table \"" + tableName + "\" does not exist" })];
                }
            });
        }); };
        this.getRow = function (req, res) {
            var _a = req.params, tableName = _a.tableName, rowId = _a.rowId;
            _this._getRow(tableName, rowId, res);
        };
        this.updateRow = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, tableName, rowId, table, bulkOpts;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.params, tableName = _a.tableName, rowId = _a.rowId;
                        return [4 /*yield*/, table_model_1.TableModel.findOne({ name: tableName, rows: { $elemMatch: { $eq: rowId } } })];
                    case 1:
                        table = _b.sent();
                        if (!table) {
                            return [2 /*return*/, res
                                    .status(404).json({ error: "Table \"" + tableName + "\" does not exist" })];
                        }
                        if (table.rows.length === 0) {
                            return [2 /*return*/, res
                                    .status(404).json({ error: "Table \"" + tableName + "\" does not content row with id " + rowId })];
                        }
                        bulkOpts = req.body.cells.reduce(function (memo, cell) {
                            return memo.concat({
                                updateOne: {
                                    filter: { '_id': cell._id },
                                    update: { '$set': { value: cell.value } }
                                }
                            });
                        }, []);
                        return [4 /*yield*/, tableCell_model_1.TableCellModel.bulkWrite(bulkOpts)];
                    case 2:
                        _b.sent();
                        this._getRow(tableName, rowId, res);
                        return [2 /*return*/];
                }
            });
        }); };
        this.createRow = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var tableName, table, cells, savedCells, tableRow, savedTableRow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableName = req.params.tableName;
                        return [4 /*yield*/, this.findTableByName(tableName)];
                    case 1:
                        table = _a.sent();
                        if (!table) {
                            return [2 /*return*/, res.status(404).json({ error: "Table \"" + tableName + "\" does not exist" })];
                        }
                        if (!req.body.cells) {
                            return [2 /*return*/, res.status(400).json({ error: 'Request bode should content "cells" property' })];
                        }
                        cells = req.body.cells.map(function (cell) {
                            return __assign({}, cell, { type: mongoose.Types.ObjectId(cell.header._id || cell.header) });
                        });
                        return [4 /*yield*/, tableCell_model_1.TableCellModel.create(cells)];
                    case 2:
                        savedCells = _a.sent();
                        tableRow = new tableRow_model_1.TableRowModel({ cells: savedCells });
                        return [4 /*yield*/, tableRow.save()];
                    case 3:
                        savedTableRow = _a.sent();
                        return [4 /*yield*/, table_model_1.TableModel.findByIdAndUpdate(table._id, {
                                rows: table.rows.concat(savedTableRow._id)
                            })];
                    case 4:
                        _a.sent();
                        this._getRow(tableName, savedTableRow._id, res);
                        return [2 /*return*/];
                }
            });
        }); };
        this.deleteRow = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, rowId, tableName, table;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.params, rowId = _a.rowId, tableName = _a.tableName;
                        console.log('REQUEST', tableName, rowId);
                        return [4 /*yield*/, this.findTableByName(tableName)];
                    case 1:
                        table = _b.sent();
                        if (!table) {
                            return [2 /*return*/, res.status(404).json({ error: "Table \"" + tableName + "\" does not exist" })];
                        }
                        console.log(table.rows.length, table.rows.filter(function (row) { return String(row._id) !== rowId; }).length);
                        return [4 /*yield*/, table_model_1.TableModel.findByIdAndUpdate(table._id, {
                                rows: table.rows.filter(function (row) { return String(row._id) !== rowId; })
                            })];
                    case 2:
                        _b.sent();
                        res.json({});
                        return [2 /*return*/];
                }
            });
        }); };
    }
    TableController.prototype.findTableByName = function (tableName) {
        return table_model_1.TableModel.findOne({ name: tableName }).exec();
    };
    return TableController;
}());
exports.default = new TableController();
//# sourceMappingURL=table.controller.js.map