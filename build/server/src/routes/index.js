"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../modules/user");
var table_1 = require("../modules/table");
var cloudinary_1 = require("../modules/cloudinary");
var properties_1 = require("../modules/properties");
var clientMessages_1 = require("../modules/clientMessages");
exports.default = (function (app) {
    user_1.userModuleRouters(app);
    table_1.tableModuleRouters(app);
    cloudinary_1.cloudinaryModuleRouters(app);
    properties_1.propertiesModuleRouters(app);
    clientMessages_1.clientMessagedModuleRouters(app);
});
//# sourceMappingURL=index.js.map