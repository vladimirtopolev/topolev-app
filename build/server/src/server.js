"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//@ts-ignore
var formData = require("express-form-data");
var morgan = require("morgan");
var index_1 = require("./routes/index");
var expressBootDevelopment_1 = require("./boot/expressBootDevelopment");
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
        this.app.use(bodyParser.json({ type: 'application/json' }));
        this.app.use(formData.parse());
        //include logger
        this.app.use(morgan('tiny'));
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        index_1.default(this.app);
        //use router middleware
        this.app.use(router);
        console.log('ENV', process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'development') {
            expressBootDevelopment_1.default(this.app, __dirname);
        }
        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.join(__dirname, '..', '..', 'web')));
            this.app.get("/*", function (req, res, next) {
                res.sendFile(path.join(__dirname, '..', '..', 'web', 'index.html'));
            });
        }
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map