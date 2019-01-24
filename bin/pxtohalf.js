#!/usr/bin/env node  
var pxtohalf = require('../index.js').pxtohalf  
var program = require('commander');  
require('chalk')
process.title = 'pxtohalf'

program.version('v' + require('../package.json').version)  
      .description('divide px to half')  
      .command('specify <dir> <extension>')  
      .alias('s')  
      .action(function(dir, extension){
        pxtohalf(dir, extension);
      });  
       
program.parse(process.argv)  
  
if (program.args.length === 0) {  
  program.help()  
}  
