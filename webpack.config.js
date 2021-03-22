let WriteFilePlugin = require('write-file-webpack-plugin');

var config = {
  entry: {
    path: './client/src/main.js',
  },
  output: {
    path: __dirname + '/client/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new WriteFilePlugin()
  ],
  devtool: 'eval-source-map'
}

module.exports = config;
