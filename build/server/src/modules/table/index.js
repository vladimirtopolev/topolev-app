"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_controller_1 = require("./controllers/table.controller");
exports.tableModuleRouters = function (app, domainPath) {
    if (domainPath === void 0) { domainPath = '/api/tables'; }
    app.route(domainPath + "/:tableName")
        .get(table_controller_1.default.getTable);
    app.route(domainPath + "/:tableName/headers")
        .get(table_controller_1.default.getHeaders);
    app.route(domainPath + "/:tableName/rows")
        .get(table_controller_1.default.getRows)
        .post(table_controller_1.default.createRow);
    app.route(domainPath + "/:tableName/rows/:rowId")
        .get(table_controller_1.default.getRow)
        .put(table_controller_1.default.updateRow)
        .delete(table_controller_1.default.deleteRow);
};
//# sourceMappingURL=index.js.map