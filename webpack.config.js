let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let merge = require("webpack-merge");
let pug = require("./webpack/pug.js");
let bable = require("./webpack/bable.js");
let devserver = require("./webpack/devserver.js");
let scss = require("./webpack/scss.js");

let conf = merge([
    {
        entry: {
            "index": "./src/pages/index/index.js",
            "contact": "./src/pages/contact/contact.js"
        },
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "[name].js",
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
                template: "./src/pages/index/index.pug"
            }),
            new HtmlWebpackPlugin({
                filename: "contact.html",
                chunks: ["contact"],
                template: "./src/pages/contact/contact.pug"
            }),
        ], 
    },
    devserver(),
    bable(),
    pug(),
    scss(),
]);

module.exports = (env, options) => {
    let production = options.mode === "production";
    conf.devtool = production
                    ? "source-map"
                    : "eval-sourcemap";
    return conf;
}
    