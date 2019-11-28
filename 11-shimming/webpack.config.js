const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: { app: './src/index.js', polyfill: './src/polyfills.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({ title: 'Demo', template: './src/index.html' }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      join: ['lodash', 'join']
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve('./src/addBtn.js'),
        use: 'imports-loader?this=>window'
      }
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map'
};
