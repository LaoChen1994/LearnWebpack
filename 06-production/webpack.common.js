const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV);

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename:
      // 此时process.env.NODE_ENV不生效
      process.env.NODE_ENV === 'production'
        ? '[name].[hash].bundle.js'
        : '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new CleanWebpackPlugin()
  ]
};
