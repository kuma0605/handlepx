#!/usr/bin/env node  
var handlepx = require('../index.js').handlepx  
var custom_options = require('../index.js').options 
var program = require('commander');  

process.title = 'handlepx'

program.version('v' + require('../package.json').version)  
      .description('multiply px to half')  
      .usage('go <dir> <ext> [factor]')
      .command('go <dir> <ext> [factor]')  
      .alias('g')  
      .option('-E --exclude_1px')
      .action(function(dir, ext, factor, options){
        custom_options.exclude_1px = options.exclude_1px;
        handlepx(dir, ext, factor);
      });  
       
program.parse(process.argv)  
  
if (program.args.length === 0) {  
  program.help()  
}  
