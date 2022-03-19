import { NextConfig } from 'next';
import { WebpackConfigContext } from 'next/dist/server/config-shared';
import { Configuration } from 'webpack';

export function nextConfig({ webpack: webpackConfig, ...nextConfig }: NextConfig = {}): NextConfig {
  return {
    ...nextConfig,
    eslint: {
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    webpack(config: Configuration, context: WebpackConfigContext) {
      config.module?.rules?.push({
        test: /\.tsx?$/u,
        include(path) {
          return path.includes('libraries');
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', ['@babel/react', { importSource: '@emotion/react', runtime: 'automatic' }]],
            plugins: ['@emotion'],
          },
        },
      });

      return webpackConfig == null ? config : webpackConfig(config, context);
    },
  };
}
