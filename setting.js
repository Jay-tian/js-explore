const process = require('process');
const rootPath = process.cwd();

let setting = {
  entry: rootPath + '/src/',
  output: rootPath + '/dist/',
  publicPath: '/dist/',
};

module.exports = setting;