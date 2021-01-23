module.exports = {
  extends: [
    'prettier/react',
    ...['./jsx', './jsx-a11y', './react', './react-hooks'].map(path => require.resolve(path)),
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
};
