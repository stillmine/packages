const { resolveModule } = require('./src/utils');

module.exports = {
  env: { browser: true },
  extends: ['./index', ...['react'].map(resolveModule)],
};
