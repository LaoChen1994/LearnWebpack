const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [new CleanWebpackPlugin(), new HTMLWebpackPlugin({ title: 'Demo' })],
  mode: 'development',
  resolve: {
    // 以这些为后缀的文件导入时可以不带后缀名
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx{0,1}$/,
        use: 'ts-loader',
        // 排除这些文件夹路径下的不用ts重新进行编译
        exclude: /node_modules/
      }
    ]
  }
};
