const cli = require('@devly/devly-cli');

cli.strict()
    .options({
      version: {
        alias: 'v',
        describe: 'Log version of devly-example',
      }
    })
    .help().argv;
