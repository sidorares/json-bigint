const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'json-bigint.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'JSONbig',
    libraryTarget: "umd"
  },
};