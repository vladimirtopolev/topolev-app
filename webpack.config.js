const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        index: './client/index.tsx'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/index.html"
        })
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
           /* minChunks: 2*/
        },
        /*
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        unused: true,
                        dead_code: true,
                        warnings: false
                    }
                },
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]*/
    },
    /*
    performance: {
        hints: false
    },*/
    devServer: {
        historyApiFallback: true
    }
};
