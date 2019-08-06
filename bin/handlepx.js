#!/usr/bin/env node  
var handlepx = require('../index.js').handlepx  
var custom_options = require('../index.js').options 
var program = require('commander');  

process.title = 'handlepx'

program.version('v' + require('../package.json').version)  
      .description('multiply px to half')  
      .usage('go <dir> ')
      .command('go <dir> ')  
      .alias('g')  
      .option('-E --exclude_1px')
      .option('-P --postfix <value>','A string')
      .option('-F --factor <value>', 'A integer')
      .action(function(dir, options){

        custom_options.exclude_1px = options.exclude_1px;
        custom_options.extension = options.postfix || 'css';
        custom_options.factor = options.factor || 0.5;
        console.log(custom_options)
        handlepx(dir);
      });  
       
program.parse(process.argv)  
  
if (program.args.length === 0) {  
  program.help()  
}  
