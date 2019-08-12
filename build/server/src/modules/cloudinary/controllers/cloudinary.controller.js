"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cloudinary = require("cloudinary");
var config = require("config");
var cloudinaryConfig = config.get('cloudinary');
var CloudinaryController = /** @class */ (function () {
    function CloudinaryController() {
        cloudinary.config({
            cloud_name: cloudinaryConfig.cloudName,
            api_key: cloudinaryConfig.apiKey,
            api_secret: cloudinaryConfig.apiSecret
        });
    }
    CloudinaryController.prototype.uploadImage = function (req, res) {
        console.log('UPLOAD CLOUDINARY IMAGE');
        var values = Object.values(req.files);
        var promises = values.map(function (image) { return cloudinary.uploader.upload(image.path); });
        Promise
            .all(promises)
            .then(function (results) { return res.json(results); })
            .catch(function (err) {
            res.status(500).json({ error: err });
        });
    };
    return CloudinaryController;
}());
exports.default = new CloudinaryController();
//# sourceMappingURL=cloudinary.controller.js.map