
var merge = require('webpack-merge');

var common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'production'
});
