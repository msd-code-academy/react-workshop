const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  watch: true,
  output: {
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    publicPath: "/",
    inline: true,
    stats: "errors-only",
    proxy: {
      "/**": {
        target: "http://localhost:8080",
        pathRewrite: { "^/.*": "/" }
      }
    }
  }
});
