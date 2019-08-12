"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cloudinary_controller_1 = require("./controllers/cloudinary.controller");
exports.cloudinaryModuleRouters = function (app, domainPath) {
    if (domainPath === void 0) { domainPath = '/api/cloudinary'; }
    app.route(domainPath + "/image-upload")
        .post(function (req, res) { return cloudinary_controller_1.default.uploadImage(req, res); });
};
//# sourceMappingURL=index.js.map