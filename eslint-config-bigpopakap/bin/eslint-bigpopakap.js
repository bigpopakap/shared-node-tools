#!/usr/bin/env node
/**
 * @fileoverview This simply delegates to eslint
 * @author bigpopakap
 */
'use strict';

const shell = require('shelljs');
const yargs = require('yargs');

// Exit if there is no yarn installed
if (!shell.which('yarn')) {
  shell.echo('yarn not installed');
  shell.exit(1);
}

// Parse the command line arguments
const args = yargs.boolean('fix').default('fix', false).argv;

// Prepare the arguments to pass to eslint
const fixArg = args.fix ? '--fix' : '';
const pathArg = '.';

shell.exec(`yarn eslint ${fixArg} ${pathArg}`);
