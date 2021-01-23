/* eslint-disable node/no-extraneous-require */
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const extensions = ['.js', '.json', '.ts'];

module.exports = {
  input: './src/index.ts',
  output: [
    { file: './dist/index.js', format: 'cjs' },
    { file: './esm/index.js', format: 'esm' },
  ],
  plugins: [babel({ babelHelpers: 'bundled', extensions }), nodeResolve({ extensions })],
};
