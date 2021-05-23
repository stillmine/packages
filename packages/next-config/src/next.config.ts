import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { NextConfig } from './NextConfig';

export function nextConfig({ webpack: webpackConfig, ...nextConfig }: NextConfig = {}) {
  return {
    ...nextConfig,
    future: {
      webpack5: true,
    },
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    webpack(config: Configuration) {
      return merge(config, webpackConfig ?? {}, {
        module: {
          rules: [
            {
              test: /\.tsx?$/u,
              include(path) {
                return path.includes('libraries');
              },
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/typescript',
                    ['@babel/react', { importSource: '@emotion/react', runtime: 'automatic' }],
                  ],
                  plugins: ['@emotion'],
                },
              },
            },
          ],
        },
      });
    },
  };
}
