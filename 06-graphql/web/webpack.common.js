const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: [
        "babel-polyfill",
        "./src/index"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
            hash: true
        })
    ],
    module: {
        rules: [
            // CSS
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"},
                    {loader: "postcss-loader", options: {plugins: () => [autoprefixer()]}}
                ]
            },

            // JS
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                include: [
                    path.join(__dirname, "src"),
                    // react-ui-kit have no dist folder yet, so we need to pass it to babel to build it
                    path.join(__dirname, "node_modules/@dg/react-ui-kit")
                ]
            },

            // SVG
            {
                test: /\.svg$/,
                loaders: ["babel-loader", "react-svg-loader"]
            },

            // PNG
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000"
            },

            // Fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]"
                }
            }
        ]
    }
};
