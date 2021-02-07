module.exports = {
  extends: ['prettier/@typescript-eslint', ...['./extension', './typescript'].map(path => require.resolve(path))],
  parser: '@typescript-eslint/parser',
  plugins: ['node'],
  rules: {
    'indent': 'off',
    'no-extra-parens': 'off',
    'no-magic-numbers': 'off',
    'no-return-await': 'off',
    'no-unused-vars': 'off',
    'quotes': 'off',
    'require-await': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
