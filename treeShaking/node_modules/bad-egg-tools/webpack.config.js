const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bad-egg-tool.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'badEggTool',
    libraryTarget: 'umd'
  },
  externals: {}
};
