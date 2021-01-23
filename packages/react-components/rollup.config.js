const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const pkg = require('./package');

const extensions = ['.js', '.ts', '.tsx'];

module.exports = {
  input: 'src/index.ts',
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
  external: ['@emotion/core', '@emotion/styled', 'react'],
  plugins: [
    nodeResolve({ customResolveOptions: { moduleDirectory: 'node_modules' }, extensions }),
    babel({ babelHelpers: 'bundled', extensions }),
  ],
};
