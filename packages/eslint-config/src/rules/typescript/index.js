const { resolveModule } = require('../../utils');

module.exports = {
  extends: ['./typescript/extension', './typescript/typescript'].map(resolveModule),
  parser: '@typescript-eslint/parser',
  rules: {
    'indent': 'off',
    'no-extra-parens': 'off',
    'no-magic-numbers': 'off',
    'no-return-await': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'quotes': 'off',
    'require-await': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
  },
};
