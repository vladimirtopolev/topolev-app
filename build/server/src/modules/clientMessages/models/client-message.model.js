"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
exports.ClientMessageSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    company: String,
    phone: String,
    email: String,
    message: String,
    ownNotes: String,
    statusDates: Object,
    status: String,
    isDeleted: Boolean,
});
exports.ClientMessageModel = mongoose.model('ClientMessage', exports.ClientMessageSchema);
//# sourceMappingURL=client-message.model.js.map