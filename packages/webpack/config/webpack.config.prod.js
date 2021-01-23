const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

const { indexHtml, publicDir, srcDir } = require('./path');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: srcDir,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/u,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
    noEmitOnErrors: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/u,
        },
      },
    },
  },
  output: {
    filename: '[name].[chunkhash:8].js',
  },
  performance: {
    hints: 'warning',
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      filename: '[path].gz[query]',
      minRatio: 0.8,
      test: /\.(js|html)$/u,
      threshold: 10240,
    }),
    new CopyWebpackPlugin([
      {
        from: publicDir,
        to: '.',
      },
    ]),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: indexHtml,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
    // new PrepackWebpackPlugin(),
    // new WorkboxPlugin.GenerateSW({
    //   swDest: 'sw.js',
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
  ],
};
