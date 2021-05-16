import { Configuration } from 'webpack';

export function nextConfig() {
  return {
    future: {
      webpack5: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    webpack(config: Configuration) {
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

      return config;
    },
  };
}
