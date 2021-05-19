import { Cli } from 'clipanion';

import { BuildCommand } from './BuildCommand';

const [node, app, ...args] = process.argv;

const cli = new Cli({
  binaryLabel: '@stillmine command line interface',
  binaryName: `${node} ${app}`,
  binaryVersion: '1.0.0',
});

cli.register(BuildCommand);
cli.runExit(args, Cli.defaultContext);
