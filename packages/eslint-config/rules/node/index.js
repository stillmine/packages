module.exports = {
  env: {
    node: true,
  },
  extends: ['./best-practices', './possible-errors', './stylistic-issues'].map(path => require.resolve(path)),
};
