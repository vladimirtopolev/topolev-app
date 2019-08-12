"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var tableHeader_model_1 = require("./tableHeader.model");
var tableRow_model_1 = require("./tableRow.model");
exports.TableSchema = new mongoose_1.Schema({
    name: String,
    title: String,
    headers: [{
            type: mongoose_1.Schema.Types.ObjectId, ref: tableHeader_model_1.TableHeaderModel.modelName
        }],
    rows: [{
            type: mongoose_1.Schema.Types.ObjectId, ref: tableRow_model_1.TableRowModel.modelName
        }],
    uiConfig: mongoose_1.Schema.Types.Mixed,
    adminConfig: mongoose_1.Schema.Types.Mixed
});
exports.TableModel = mongoose.model('Table', exports.TableSchema);
//# sourceMappingURL=table.model.js.map