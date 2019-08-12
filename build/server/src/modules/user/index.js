"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_controller_1 = require("./controllers/users.controller");
exports.userModuleRouters = function (app, domainPath) {
    if (domainPath === void 0) { domainPath = '/api/users'; }
    app.route(domainPath + "/signin")
        .post(users_controller_1.default.signin);
};
//# sourceMappingURL=index.js.map