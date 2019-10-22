#!/usr/bin/env node  
var handlepx = require('../index.js').handlepx;  
var custom_options = require('../index.js').options; 
var program = require('commander');  

process.title = 'handlepx'

function list(val) {
  return val.split(',');
}

program.version('v' + require('../package.json').version)  
      .description('multiply px to half')  
      .usage('go <dir> [options]')
      .command('go <dir>')  
      .alias('g')  
      .option('-X, --exclude_1px')
      .option('-N, --negative')
      .option('-P, --positive')
      .option('-E, --postfix <items>','A list', list)
      .option('-F, --factor <value>', 'A integer/float', parseFloat)
      .option('-U, --unit <value>', 'A string')
      .option('-R, --replace_unit <value>', 'A string')
      .action(function(dir, options){

        custom_options.exclude_1px = options.exclude_1px || false;
        custom_options.postfix = options.postfix || ['css'];
        custom_options.factor = options.factor || 0.5;
        custom_options.unit = options.unit || 'px';
        custom_options.negative = options.negative || false;
        custom_options.positive = options.positive || false;
        custom_options.replace_unit = options.replace_unit || false;
        handlepx(dir);
      });  
       
program.parse(process.argv)  
  
if (program.args.length === 0) {  
  program.help()  
}  
