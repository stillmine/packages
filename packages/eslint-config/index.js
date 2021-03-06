const { ECMA_VERSION } = require('./src/constants');
const { resolveModule } = require('./src/utils');

module.exports = {
  env: { jest: true, node: true },
  extends: [
    'best-practices',
    'ecma-script-6',
    'import',
    'no-secrets',
    'possible-errors',
    'prettier',
    'strict-mode',
    'stylistic-issues',
    'variables',
  ].map(resolveModule),
  overrides: [
    {
      extends: resolveModule('typescript'),
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: ECMA_VERSION,
    sourceType: 'module',
  },
};
