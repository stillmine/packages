module.exports = {
  rules: {
    'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: false }],
    'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: false }],
    'arrow-spacing': ['warn', { after: true, before: true }],
    'constructor-super': 'warn',
    'generator-star-spacing': [
      'warn',
      { after: true, anonymous: 'neither', before: false, method: { after: true, before: true } },
    ],
    'no-class-assign': 'warn',
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'no-const-assign': 'warn',
    'no-dupe-class-members': 'warn',
    'no-duplicate-imports': ['warn', { includeExports: true }],
    'no-new-symbol': 'warn',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': ['warn', { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false }],
    'no-var': 'error',
    'object-shorthand': [
      'warn',
      'always',
      { avoidExplicitReturnArrows: true, avoidQuotes: true, ignoreConstructors: true },
    ],
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: false, allowUnboundThis: true }],
    'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: false }],
    'prefer-destructuring': ['warn', { array: false, object: true }, { enforceForRenamedProperties: false }],
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'sort-imports': 'off',
    'symbol-description': 'warn',
    'template-curly-spacing': ['warn', 'never'],
    'yield-star-spacing': ['warn', { after: true, before: false }],
  },
};
