#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program
    .version('1.0.0')
    .description('Node Powered Password Generator');

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save to password.txt')
    .option('-nn, --no-numbers', 'remove any numbers')
    .option('-ns, --no-symbols', 'remove any symbols')
    .parse();

const {length, save, numbers, symbols} = program.opts();

//Get password
const generatedPassword = createPassword(length, numbers, symbols);

//If save is true, save it to a file
if(save) {
    savePassword(generatedPassword);
};

//Copy to clipboard
clipboardy.writeSync(generatedPassword);

//Output generated password
console.log(chalk.green('Password: ') + chalk.bold(generatedPassword))
console.log(chalk.yellow('Copied to clipboard'))