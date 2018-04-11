const process = require('process');
process.env.setting_path = 'setting.js';
const webpackConfig = require('jay-webpack-scaffold');

module.exports = webpackConfig;