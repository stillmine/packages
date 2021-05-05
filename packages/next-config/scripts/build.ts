import { build } from 'esbuild';
import { resolve } from 'path';

function main() {
  build({
    bundle: true,
    entryPoints: [resolve(__dirname, '..', 'src', 'mod.ts')],
    format: 'cjs',
    outfile: resolve(__dirname, '..', 'dist', 'mod.js'),
  });
}

main();
