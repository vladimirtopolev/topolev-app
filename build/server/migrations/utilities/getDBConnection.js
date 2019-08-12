"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var config = require("config");
var DB_CONFIG = config.get('dbConfig');
function getMongooseConnection() {
    return mongoose.connect(DB_CONFIG.host, { dbName: DB_CONFIG.dbName, useNewUrlParser: true })
        .then(function (mongoose) {
        return DB_CONFIG;
    });
}
exports.getMongooseConnection = getMongooseConnection;
//# sourceMappingURL=getDBConnection.js.map