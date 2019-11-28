const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [new CleanWebpackPlugin(), new HTMLWebpackPlugin({ title: 'Demo' })],
  mode: 'development'
};
