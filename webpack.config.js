var path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js?$/, use: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  devServer: {
    //noInfo: true,
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    port: 3000,
    open: true
  },
  devtool: 'source-map'

}
