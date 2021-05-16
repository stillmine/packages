import { Command } from 'clipanion';
import { build } from 'esbuild';
import { resolve } from 'path';

const entryPoint = resolve(process.cwd(), 'src', 'mod.ts');
const outfile = resolve(process.cwd(), 'lib', 'mod.js');

export class BuildCommand extends Command {
  static paths = [['build']];

  async execute() {
    await build({
      bundle: true,
      entryPoints: [entryPoint],
      format: 'cjs',
      outfile,
    });
  }
}
