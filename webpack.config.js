let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
        publicPath: "dist/"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [ "style-loader",
                     "css-loader"
                ]
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            }
        ]
    }
};

module.exports = (env, options) => {
    let production = options.mode === "production";
    console.log(options);
    conf.devtool = production
                    ? "source-map"
                    : "eval-sourcemap";
    return conf;
}
    