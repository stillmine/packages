const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const pkg = require('./package');

const extensions = ['.js', '.ts'];

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
  external: ['react'],
  plugins: [
    nodeResolve({ moduleDirectories: ['node_modules'], extensions }),
    babel({ babelHelpers: 'bundled', extensions }),
  ],
};
