const path = require('path');

function resolveModule(moduleName) {
  return require.resolve(path.resolve(__dirname, `./rules/${moduleName}`));
}

module.exports = {
  resolveModule,
};
