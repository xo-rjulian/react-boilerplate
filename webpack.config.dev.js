const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 8000,
    stats: 'errors-only',
    open: true,
    historyApiFallback: true,
  },
});

module.exports = config;
