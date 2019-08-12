"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var properties_controller_1 = require("./controllers/properties.controller");
exports.propertiesModuleRouters = function (app, domainPath) {
    if (domainPath === void 0) { domainPath = '/api/properties'; }
    app.route(domainPath)
        .get(properties_controller_1.default.getProperties)
        .put(properties_controller_1.default.updateProperties);
};
//# sourceMappingURL=index.js.map