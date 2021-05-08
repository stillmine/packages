const { resolve } = require('path');

const rootDir = process.cwd();

module.exports.packageJson = resolve(rootDir, 'package');
module.exports.srcDir = resolve(rootDir, 'src', 'index');
module.exports.rootDir = rootDir;
