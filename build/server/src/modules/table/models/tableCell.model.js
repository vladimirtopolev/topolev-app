"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.TableCellSchema = new Schema({
    header: {
        type: Schema.Types.ObjectId, ref: 'TableHeader'
    },
    value: Schema.Types.Mixed
});
exports.TableCellModel = mongoose.model('TableCell', exports.TableCellSchema);
//# sourceMappingURL=tableCell.model.js.map