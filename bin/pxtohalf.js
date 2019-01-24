#!/usr/bin/env node  
var pxtohalf = require('../index.js').pxtohalf  
var program = require('commander');  
require('chalk')
process.title = 'pxtohalf'

program.version('v' + require('../package.json').version)  
      .description('divide px to half')  
      .usage('go [dir] [ext]')
      .command('go [dir] [ext] ')  
      .alias('g')  
      .action(function(dir, ext){
        pxtohalf(dir, ext);
      });  
       
program.parse(process.argv)  
  
if (program.args.length === 0) {  
  program.help()  
}  
