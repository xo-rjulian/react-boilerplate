const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});

module.exports = config;
