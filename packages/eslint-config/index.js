module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    './rules/best-practices',
    './rules/ecma-script-6',
    './rules/import',
    './rules/no-secrets',
    './rules/node',
    './rules/possible-errors',
    './rules/prettier',
    './rules/react',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(path => require.resolve(path)),
  overrides: [
    {
      extends: require.resolve('./rules/typescript'),
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
