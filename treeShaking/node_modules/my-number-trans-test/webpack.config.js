const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-convert-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_' // 接下来的全局变量名
    }
  },
  mode: 'production'
};
