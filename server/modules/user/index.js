"use strict";
exports.__esModule = true;
exports.userModuleRouters = function (app, domainPath) {
    if (domainPath === void 0) { domainPath = '/api/users'; }
    app.route(domainPath)
        .get(function (req, res) {
        console.log('here');
        res.json({});
    });
};
//# sourceMappingURL=index.js.map