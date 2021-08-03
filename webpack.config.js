const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: "./src/yue.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "yue.js",
        library: "Yue",
        libraryExport: "default",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            { test: /.js$/, 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    mode: "development",
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin()
    ]
}