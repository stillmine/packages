module.exports = {
  plugins: ['react'],
  rules: {
    'react/boolean-prop-naming': ['warn', { validateNested: true }],
    'react/button-has-type': ['warn', { button: true, reset: true, submit: true }],
    'react/default-props-match-prop-types': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/display-name': 'off',
    'react/forbid-component-props': 'warn',
    'react/forbid-dom-props': 'warn',
    'react/forbid-elements': 'warn',
    'react/forbid-foreign-prop-types': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/function-component-definition': [
      'warn',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/no-access-state-in-setstate': 'warn',
    'react/no-adjacent-inline-elements': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'warn',
    'react/no-render-return-value': 'warn',
    'react/no-set-state': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-this-in-sfc': 'warn',
    'react/no-typos': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    'react/no-unsafe': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/prefer-es6-class': 'warn',
    'react/prefer-read-only-props': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/require-optimization': 'warn',
    'react/require-render-return': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/sort-prop-types': 'warn',
    'react/state-in-constructor': 'warn',
    'react/static-property-placement': 'warn',
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'warn',
  },
};
