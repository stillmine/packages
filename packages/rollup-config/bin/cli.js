#!/usr/bin/env node

const ora = require('ora');
const { rollup } = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript');
const logger = require('signale');

const { NODE_ENV } = require('../config/env');
const { packageJson, srcDir } = require('../config/path');
const pkg = require(packageJson);

logger.config({
  displayTimestamp: true,
});

const inputConfig = {
  external: Object.keys(pkg.peerDependencies),
  input: srcDir,
  plugins: [
    resolve({
      extensions: ['.js', '.json', '.ts', '.tsx'],
    }),
    typescript(),
  ],
};
const outputConfigs = [
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'esm',
  },
];

async function main() {
  // Initialize console
  console.clear();
  logger.start(`Starting build in ${NODE_ENV} mode`);

  let compiler;

  try {
    compiler = await rollup(inputConfig);
  } catch (error) {
    Promise.reject(error);
  }

  const spinner = ora('Building module');
  spinner.start();

  try {
    const results = [];

    for (const outputConfig of outputConfigs) {
      results.push(compiler.generate(outputConfig), compiler.write(outputConfig));
    }

    await Promise.all(results);
  } catch (error) {
    Promise.reject(error);
  }

  spinner.stop();
}

try {
  main();
} catch (error) {
  logger.error(error);
}
