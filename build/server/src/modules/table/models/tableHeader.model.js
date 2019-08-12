"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.TableHeaderSchema = new mongoose.Schema({
    type: String,
    name: String,
    internalName: String,
    previewHidden: Boolean,
    properties: Object,
    notLocalized: Boolean,
    order: Number,
});
exports.TableHeaderModel = mongoose.model('TableHeader', exports.TableHeaderSchema);
//# sourceMappingURL=tableHeader.model.js.map