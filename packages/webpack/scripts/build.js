const { existsSync } = require('fs');
const ora = require('ora');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const logger = require('signale');
const webpack = require('webpack');

const { createConfig } = require('../config/create-config');
const { NODE_ENV } = require('../config/env');
const { customConfigJs } = require('../config/path');
const prodConfig = require('../config/webpack.config.prod');

logger.config({
  displayTimestamp: true,
});

function main() {
  // Initialize console
  console.clear();
  logger.start(`Starting build in ${NODE_ENV} mode`);

  // Import custom config
  let customConfig = {};

  if (existsSync(customConfigJs)) {
    try {
      customConfig = require(customConfigJs);
    } catch (error) {
      throw new Error(error);
    }
  }

  // Set Compiler
  const webpackConfig = createConfig(prodConfig, customConfig);
  let compiler;

  try {
    compiler = webpack(webpackConfig);
  } catch (error) {
    throw new Error(error);
  }

  const spinner = ora('Building client');
  spinner.start();

  compiler.run((err, stats) => {
    if (err) {
      throw new Error(err);
    }

    spinner.stop();
    const rawMessages = stats.toJson({}, true);
    const messages = formatWebpackMessages(rawMessages);

    if (!messages.errors.length && !messages.warnings.length) {
      // Webpack build success
      logger.complete('Client compiled successfully');
      logger.info('Build outputs', stats.toString({ colors: true }));
    }

    if (messages.warnings.length) {
      // Warning occurs
      logger.warn('Compiled with warnings', messages.warnings);
      logger.info('Build outputs', stats.toString({ colors: true, warnings: false }));
    }

    if (messages.errors.length) {
      // Build fail
      throw new Error(messages.errors);
    }
  });
}

try {
  main();
} catch (error) {
  logger.error(error);
}
