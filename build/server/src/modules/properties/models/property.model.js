"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
exports.PropertySchema = new mongoose_1.Schema({
    type: String,
    name: String,
    internalName: String,
    order: Number,
    group: String,
    titleGroup: String,
    notLocalized: Boolean,
    value: mongoose_1.Schema.Types.Mixed
});
exports.PropertyModel = mongoose.model('Property', exports.PropertySchema);
//# sourceMappingURL=property.model.js.map