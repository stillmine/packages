const { resolveModule } = require('../../utils');

module.exports = {
  extends: [
    './react/emotion',
    './react/jsx',
    './react/jsx-a11y',
    './react/next',
    './react/react',
    './react/react-hooks',
  ].map(resolveModule),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
