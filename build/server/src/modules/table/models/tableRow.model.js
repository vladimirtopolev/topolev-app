"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var tableCell_model_1 = require("./tableCell.model");
var Schema = mongoose.Schema;
exports.TableRowSchema = new mongoose.Schema({
    cells: [{
            type: Schema.Types.ObjectId, ref: tableCell_model_1.TableCellModel.modelName
        }]
});
exports.TableRowModel = mongoose.model('TableRow', exports.TableRowSchema);
//# sourceMappingURL=tableRow.model.js.map