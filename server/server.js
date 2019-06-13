"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var routes_1 = require("./routes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.getApp = function () {
        return this.app;
    };
    Server.prototype.config = function () {
        // parse application/json and look for raw text
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.text());
        //include logger
        this.app.use(morgan('tiny'));
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        routes_1["default"](this.app);
        //use router middleware
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map