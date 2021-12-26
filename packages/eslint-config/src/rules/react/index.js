const { resolveModule } = require('../../utils');

module.exports = {
  extends: ['./react/jsx', './react/jsx-a11y', './react/react', './react/react-hooks'].map(resolveModule),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
