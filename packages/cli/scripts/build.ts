import { build } from 'esbuild';
import { resolve } from 'path';
import pkg from '../package.json';

function main() {
  build({
    bundle: true,
    entryPoints: [resolve(__dirname, '..', 'src', 'mod.ts')],
    external: Object.keys(pkg.dependencies),
    format: 'cjs',
    outfile: resolve(__dirname, '..', 'lib', 'mod.js'),
    platform: 'node',
  });
}

main();
