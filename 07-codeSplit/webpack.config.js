const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    third: './src/thrid.js',
    another: './src/another.js'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development'
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};
