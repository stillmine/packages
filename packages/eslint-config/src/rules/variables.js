module.exports = {
  rules: {
    'init-declarations': ['error', 'never', { ignoreForLoopInit: true }],
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', { message: 'Use local parameter instead.', name: 'event' }],
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', { typeof: false }],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '',
        caughtErrors: 'none',
        caughtErrorsIgnorePattern: '',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '',
      },
    ],
    'no-use-before-define': 'off',
  },
};
