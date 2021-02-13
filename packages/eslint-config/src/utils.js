const path = require('path');

function resolveModule(moduleName) {
  return require.resolve(`./rules/${moduleName}`);
}

module.exports = {
  resolveModule,
};
