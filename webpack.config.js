const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const apiMocker = require('connect-api-mocker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const cssRegex = /\.css$/;
const cssModuleRegex = /\.component\.styles\.css$/;


module.exports = {
    entry: {
        index: './client/index.tsx'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: cssModuleRegex,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/index.html"
        }),
        new CopyPlugin([
            { from: './client/sources', to: path.join(__dirname, "/dist/sources") }
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],

    devServer: {
        historyApiFallback: true,
        setup: function (app) {
            app.use('/api', apiMocker('mocks/api'));
        }
    }
};
