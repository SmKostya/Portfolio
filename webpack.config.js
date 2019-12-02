/*jshint esversion: 6 */


let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let merge = require("webpack-merge");
let pug = require("./webpack/pug");
let bable = require("./webpack/bable");
let devserver = require("./webpack/devserver");
let scss = require("./webpack/scss");
let ExtractCSS = require("./webpack/css.extract");
let images = require("./webpack/images");


let conf = merge([
    {
        entry: {
            "index": "./src/index.js",
        },
        output: {
            path: path.resolve(__dirname, "./dist"),
            // publicPath: 'http://localhost:8080/',
            filename: "main.js",
        },
        
        module: {
            rules: [
                {

                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                chunks: ["index"],
                template: "./src/index.pug"
            }),
        ], 
    },
    devserver(),
    bable(),
    pug(),
    scss(),
    images(),
]);

module.exports = (env, options) => {
    let production = options.mode === "production";
    conf.devtool = production
                    ? "source-map"
                    : "eval-sourcemap";
    return conf;
}
    