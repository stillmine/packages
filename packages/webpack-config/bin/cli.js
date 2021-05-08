#!/usr/bin/env node

const { spawnSync } = require('child_process');
const program = require('commander');

const packageJson = require('../package');

let taskName;
program
  .version(packageJson.version, '-v --version')
  .arguments('<task>')
  .usage('<task> [options]')
  .action(name => {
    taskName = name;
  })
  .parse(process.argv);

function webpackScript(name, options) {
  switch (name) {
    case 'build':
    case 'watch':
    case 'test': {
      const result = spawnSync('node', [require.resolve(`../scripts/${name}`)], {
        stdio: 'inherit',
      });
      process.exit(result.status);
      break;
    }
    default:
      console.log(`Unknown task: ${name}.`);
  }
}

webpackScript(taskName, {
  mode: 'react',
});
