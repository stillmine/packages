const DotenvPlugin = require('dotenv-webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const { IgnorePlugin } = require('webpack');

const { buildDir, packageJson, rootDir, srcDir } = require('./path');

module.exports = {
  context: rootDir,
  externals: [],
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        include: srcDir,
        test: /\.(js|jsx)$/u,
        use: 'babel-loader',
      },
      {
        exclude: /node_modules/u,
        include: srcDir,
        test: /\.(ts|tsx)$/u,
        use: 'ts-loader',
      },
      {
        test: /\.svg$/u,
        use: [
          'babel-loader',
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
            },
          },
          'file-loader',
        ],
      },
      {
        test: /\.(jpg|png)$/u,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.md$/u,
        use: 'raw-loader',
      },
      {
        exclude: [
          /\.html$/u,
          /\.(js|jsx|mjs)$/u,
          /\.(ts|tsx)$/u,
          /\.(css|scss)$/u,
          /\.json$/u,
          /\.svg$/u,
          /\.(jpg|png)$/u,
          /\.md$/u,
        ],
        use: 'file-loader',
      },
    ],
  },
  output: {
    path: buildDir,
    publicPath: '/',
  },
  plugins: [
    new DotenvPlugin({
      systemvars: true,
    }),
    new IgnorePlugin(/^\.\/locale$/u, /moment$/u),
  ],
  resolve: {
    alias: {
      '@src': srcDir,
    },
    extensions: ['.css', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
    modules: ['node_modules'],
    plugins: [new ModuleScopePlugin(srcDir, [packageJson])],
  },
  target: 'web',
};
