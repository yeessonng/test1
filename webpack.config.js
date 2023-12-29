// ./webpack.config.js
import nodeExternals from "webpack-node-externals";
import { resolve } from "path";

export const mode = "development";
export const context = __dirname + '/src';
export const entry = {
    app: '../index.js',
};
export const output = {
    path: resolve(__dirname, "dist"),
    filename: "main.js",
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
            exclude: /node_modules/,
        },
    ],
};
export const target = "node";
export const externalsPresets = {
    node: true,
};
export const externals = [nodeExternals()];