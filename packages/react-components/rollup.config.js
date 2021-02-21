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
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      exports: 'named',
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['@emotion/react', '@emotion/styled', 'facepaint', 'react', 'react-dom'],
  plugins: [
    nodeResolve({ moduleDirectories: ['node_modules'], extensions }),
    babel({ babelHelpers: 'bundled', extensions }),
    commonjs(),
  ],
};
