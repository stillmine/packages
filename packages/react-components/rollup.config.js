const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const pkg = require('./package');

const extensions = ['.js', '.ts', '.tsx'];

module.exports = {
  input: 'src/mod.ts',
  output: [
    {
      exports: 'named',
      file: pkg.publishConfig.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      exports: 'named',
      file: pkg.publishConfig.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['@emotion/react', '@emotion/styled', 'facepaint', 'react', 'react-dom'],
  plugins: [commonjs(), babel({ babelHelpers: 'bundled', babelrc: true, extensions }), nodeResolve({ extensions })],
};
