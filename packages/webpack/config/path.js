const { resolve } = require('path');

const rootDir = process.cwd();
const publicDir = resolve(rootDir, 'public');
const srcDir = resolve(rootDir, 'src');

module.exports.buildDir = resolve(rootDir, 'build');
module.exports.indexHtml = resolve(publicDir, 'index.html');
module.exports.publicDir = publicDir;
module.exports.rootDir = rootDir;
module.exports.srcDir = srcDir;
