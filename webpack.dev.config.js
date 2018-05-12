
var path = require('path');

var merge = require('webpack-merge');

var common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'package'),
    compress: true,
    port: 9000
  }
});
