const path = require('path');

function resolveModule(moduleName) {
  return require.resolve(path.resolve(process.cwd(), `./src/rules/${moduleName}`));
}

module.exports = {
  resolveModule,
};
