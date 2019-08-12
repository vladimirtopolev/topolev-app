"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_message_controller_1 = require("./controllers/client-message.controller");
exports.clientMessagedModuleRouters = function (app, domainPath) {
    if (domainPath === void 0) { domainPath = '/api/clientMessages'; }
    app.route(domainPath)
        .post(client_message_controller_1.default.postClientMessage)
        .get(client_message_controller_1.default.getClientMessages);
};
//# sourceMappingURL=index.js.map