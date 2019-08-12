"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var webpackMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
exports.default = (function (app, dirname) {
    var webpackConfig = require('../../../web/webpack.config.js');
    // compile client-side on the fly and detect changes
    var compiler = webpack(webpackConfig);
    var devMiddleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    });
    app.use(devMiddleware);
    app.use(webpackHotMiddleware(compiler));
    app.get("/*", function (req, res, next) {
        res.set('Content-Type', 'text/html');
        res.send(devMiddleware.fileSystem.readFileSync(webpackConfig.output.path + '/index.html'));
    });
});
//# sourceMappingURL=expressBootDevelopment.js.map