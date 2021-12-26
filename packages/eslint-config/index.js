const { resolveModule } = require('./src/utils');

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'best-practices',
    'ecma-script-6',
    'import',
    'no-secrets',
    'possible-errors',
    'strict-mode',
    'stylistic-issues',
    'variables',
    'react',
    /**
     * NOTE: should be last
     * @see https://github.com/prettier/eslint-config-prettier#installation
     */
    'prettier',
  ].map(resolveModule),
  overrides: [
    {
      extends: resolveModule('typescript'),
      files: ['**/*.ts', '**/*.tsx'],
    },
    {
      extends: ['plugin:storybook/recommended'],
      files: ['**/*.stories.js', '**/*.stories.tsx'],
    },
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:testing-library/react'],
      files: ['**/*.test.ts', '**/*.test.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
