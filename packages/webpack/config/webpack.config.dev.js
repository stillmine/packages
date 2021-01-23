const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const { indexHtml, srcDir } = require('./path');

module.exports = {
  devServer: {
    bonjour: false,
    clientLogLevel: 'info',
    compress: true,
    publicPath: '/',
    watchOptions: {
      aggregateTimeout: 200,
      ignored: /node_modules/u,
    },
    // contentBase: publicDir,
    // historyApiFallback: {
    //   disableDotRule: true,
    // },
    // host: HOST,
    // hot: true,
    // port: PORT,
    // quiet: true,
    // watchContentBase: true,
  },
  devtool: 'cheap-module-source-map',
  entry: ['webpack-hot-middleware/client?noInfo=true', srcDir],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/u,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: indexHtml,
    }),
  ],
  target: 'web',
};
