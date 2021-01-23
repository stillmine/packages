const { smart } = require('webpack-merge');

const commonConfig = require('./webpack.config.common');

module.exports.createConfig = (baseConfig, customConfig) =>
  smart(commonConfig, baseConfig, customConfig);
