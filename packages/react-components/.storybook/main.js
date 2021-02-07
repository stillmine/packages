module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-options',
  ],
  stories: ['../src/**/*.stories.tsx'],
  async webpackFinal(config) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: 'babel-loader',
    });

    return config;
  },
};
