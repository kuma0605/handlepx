#!/usr/bin/env node  
var pxtohalf = require('../index.js').pxtohalf  
var program = require('commander');  

process.title = 'pxtohalf'

program.version('v' + require('../package.json').version)  
      .description('divide px to half')  
      .usage('go [dir] [ext] [factor]')
      .command('go [dir] [ext] [factor]')  
      .alias('g')  
      .action(function(dir, ext, factor){
        pxtohalf(dir, ext, factor);
      });  
       
program.parse(process.argv)  
  
if (program.args.length === 0) {  
  program.help()  
}  
