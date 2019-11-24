const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/gi,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass/gi,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)/gi,
        use: ['file-loader']
      },
      {
        test: /\.xml/gi,
        use: ['xml-loader']
      }
    ]
  }
};
