var fs = require('fs');
var path = require('path');
const chalk = require('chalk');
var options = {
  exclude_1px: false,
  postfix: ['css'],
  factor: 0.5,
  unit:'px',
  negative:false,
  positive:false
}

var logfilename = "./handlepxlog.txt";
function createLog(){
  // var logfilename = path.join(__dirname,"handlepxlog.txt");
  fs.writeFileSync(logfilename, 'handlepx log', (err)=>{
    if(err) {
      return console.log(err);
    }
  });
}

function isDirectory(filePath) {
  let stat = fs.lstatSync(filePath);
  return stat.isDirectory()
}

function doMultiply(filedir) {
  let factor = options.factor;
  let unit = options.unit;
  fs.readFile(filedir, 'utf-8', function (err, file) {
    console.log('into ',chalk.blue(filedir))
    fs.appendFile(logfilename, '\n'+ filedir, (error)  => {
      if (error) return console.log("追加文件失败" + error.message);
    })
    // let res = file.replace(/(\d+(\.\d+)?)px/g, function (full, match1, match2) {
    // let res = file.replace(new RegExp("(\\d+(\\.\\d+)?)"+unit, 'g'), function (full, match1, match2) {
    let pattern = "(-?\\d+(\\.\\d+)?)";
    if(options.negative){
      pattern = "(-\\d+(\\.\\d+)?)";
    }
    if(options.positive){
      pattern = "(\\d+(\\.\\d+)?)";
    }
    let res = file.replace(new RegExp(pattern + unit, 'g'), function (full, match1, match2) {
      if (options.exclude_1px && full === '1'+ unit) return full;
      console.log('multiply', chalk.green(match1), 'into', chalk.magentaBright(match1 * factor));
      fs.appendFile(logfilename, '\n'+' multiply '+ match1+' into '+ match1 * factor, (error)  => {
        if (error) return console.log("追加文件失败" + error.message);
      })
      return match1 * factor + unit;
    })
    fs.writeFile(filedir, res, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  })
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function handlepx(filePath = __dirname){
  createLog();
  doHandlepx(filePath);
}
function doHandlepx(filePath = __dirname) {

  if (isDirectory(filePath)) {
    fs.readdir(filePath, function (err, files) {
      if (err) {
        console.warn(err)
      } else {
        //traverse files
        files.forEach(function (filename) {
          //get absolute path
          let filedir = path.join(filePath, filename);
          let stat = fs.lstatSync(filedir);
          
          if (stat.isDirectory()) {
            doHandlepx(filedir)
          } else {
            if ( options.postfix.includes(path.extname(filename).slice(1))) {
              doMultiply(filedir);
            }
          }
        })
      }
    })
  } else {
    doMultiply(filePath)
  }
}

module.exports.options = options;
module.exports.handlepx = handlepx;
