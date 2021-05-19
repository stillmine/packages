import { Command, Option } from 'clipanion';
import { build, Format } from 'esbuild';
import { resolve } from 'path';
import { readPackageJson } from './readPackageJson';

export class BuildCommand extends Command {
  static paths = [['build']];

  formats = Option.Rest();

  async execute() {
    const pkg = await readPackageJson(resolve(process.cwd(), 'package.json'));
    let external: string[] = [];

    if (pkg?.dependencies != null) {
      external.push(...Object.keys(pkg.dependencies));
    }

    if (pkg?.peerDependencies != null) {
      external.push(...Object.keys(pkg.peerDependencies));
    }

    await Promise.all(
      (this.formats ?? ['cjs']).map(format => {
        return build({
          bundle: true,
          external,
          entryPoints: [entryPoint],
          format: format as Format,
          outfile: outFiles[format],
        });
      })
    );
  }
}

const entryPoint = resolve(process.cwd(), 'src', 'mod.ts');

const outFiles: Record<string, string> = {
  cjs: resolve(process.cwd(), 'lib', 'mod.js'),
  esm: resolve(process.cwd(), 'esm', 'mod.js'),
};
