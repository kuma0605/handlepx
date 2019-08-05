#!/usr/bin/env node  
var handlepx = require('../index.js').handlepx  
var program = require('commander');  

process.title = 'handlepx'

program.version('v' + require('../package.json').version)  
      .description('divide px to half')  
      .usage('go [dir] [ext] [factor]')
      .command('go [dir] [ext] [factor]')  
      .alias('g')  
      .action(function(dir, ext, factor){
        handlepx(dir, ext, factor);
      });  
       
program.parse(process.argv)  
  
if (program.args.length === 0) {  
  program.help()  
}  
