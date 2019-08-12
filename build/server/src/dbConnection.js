"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var config = require("config");
var DB_CONFIG = config.get('dbConfig');
exports.open = function () {
    return mongoose.connect(DB_CONFIG.host, { dbName: DB_CONFIG.dbName })
        .then(function (mongoose) {
        console.log("Connection to DB is successful: " + DB_CONFIG.host);
        return mongoose;
    });
};
//# sourceMappingURL=dbConnection.js.map