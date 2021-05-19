const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const packageJson = require('./package.json');

const extensions = ['.js', '.ts', '.tsx'];
const external = Array.from(
  new Set([...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.peerDependencies)])
);

module.exports = {
  input: 'src/mod.ts',
  output: [
    {
      exports: 'named',
      file: packageJson.publishConfig.main,
      format: 'cjs',
    },
    {
      exports: 'named',
      file: packageJson.publishConfig.module,
      format: 'esm',
    },
  ],
  external,
  plugins: [
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      babelrc: true,
      extensions,
    }),
    nodeResolve({ extensions }),
  ],
};
