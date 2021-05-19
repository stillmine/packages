import { Command, Option } from 'clipanion';
import { build, Format } from 'esbuild';
import { resolve } from 'path';

import { readPackageJson } from './readPackageJson';

const entryPoint = resolve(process.cwd(), 'src', 'mod.ts');

const outFiles: Record<string, string> = {
  cjs: resolve(process.cwd(), 'lib', 'mod.js'),
  esm: resolve(process.cwd(), 'esm', 'mod.js'),
};

export class BuildCommand extends Command {
  public static paths = [['build']];

  private readonly formats = Option.Rest();

  public async execute() {
    const external: string[] = [];
    const pkg = await readPackageJson(resolve(process.cwd(), 'package.json'));

    if (pkg?.dependencies != null) {
      external.push(...Object.keys(pkg.dependencies));
    }

    if (pkg?.peerDependencies != null) {
      external.push(...Object.keys(pkg.peerDependencies));
    }

    await Promise.all(
      this.formats.map(format => {
        return build({
          bundle: true,
          entryPoints: [entryPoint],
          external,
          format: format as Format,
          outfile: outFiles[format],
        });
      })
    );
  }
}
