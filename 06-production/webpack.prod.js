const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WebpackClosureCompiler = require('webpack-closure-compiler');
const common = require('./webpack.common.js');
const webpack = require('webpack');

console.log(common);

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new WebpackClosureCompiler(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
