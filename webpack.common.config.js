
var path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'package'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader'
      }
    ]
  }
};
