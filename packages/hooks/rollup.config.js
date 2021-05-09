const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const pkg = require('./package');

const extensions = ['.js', '.ts'];

module.exports = {
  external(packageName) {
    return packageName.includes('@babel/runtime') || packageName.includes('react');
  },
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
  plugins: [
    nodeResolve({ extensions, moduleDirectories: ['node_modules'] }),
    babel({ babelHelpers: 'runtime', extensions }),
  ],
};
