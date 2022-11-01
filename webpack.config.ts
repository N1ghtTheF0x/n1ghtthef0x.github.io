import HtmlWebpackPlugin = require("html-webpack-plugin")
import NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
import { resolve } from "path"
import { Configuration } from "webpack"

function configure(env: Record<string,any>): Configuration
{
    const BABEL_EXCLUDE = /(node_modules|bower_components)/
    const BABEL_PRESETS = ["@babel/preset-env"]

    const WEBPACK_MODE: Configuration["mode"] = env.mode

    return {
        entry: "./src/index.ts",
        mode: WEBPACK_MODE,
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: BABEL_EXCLUDE,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: BABEL_PRESETS
                        }
                    }
                },
                {
                    test: /\.m?ts$/,
                    exclude: BABEL_EXCLUDE,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [...BABEL_PRESETS,"@babel/preset-typescript"]
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: [".tsx",".ts",".js"]
        },
        output: {
            filename: "[name].[contenthash].js",
            path: resolve(__dirname,"docs"),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Loading..."
            }),
            new NodePolyfillPlugin()
        ]
    }
}

export default configure