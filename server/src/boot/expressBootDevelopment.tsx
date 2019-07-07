import * as webpack from 'webpack';
import * as webpackMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as express from 'express';
import * as path from 'path';

const webpackConfig = require('../../../web/webpack.config.js');

export default (app: express.Application, dirname: string) => {
    // compile client-side on the fly and detect changes
    const compiler = webpack(webpackConfig);
    const devMiddleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    });

    app.use(devMiddleware);

    console.log(webpackConfig.output.publicPath);
    app.use(webpackHotMiddleware(compiler));

    app.get("*", (req, res, next) => {
        res.set('Content-Type', 'text/html');
        res.send(
            devMiddleware.fileSystem.readFileSync(webpackConfig.output.path + '/index.html')
        )
    });
}
