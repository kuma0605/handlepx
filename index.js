var fs = require('fs');
var path = require('path');
var options = {
  exclude_1px: false
}

function isDirectory(filePath){
  let stat = fs.lstatSync(filePath);
  return stat.isDirectory()
}

function doMultiply(filedir, factor){
  fs.readFile(filedir,'utf-8',function(err, file){
      console.log('into', filedir)
      let res = file.replace(/(\d+(\.\d+)?)px/g, function(full, match1, match2){
        if(options.exclude_1px&&full==='1px')return full;
        console.log('multiply', match1, 'into', match1*factor);
        return match1*factor+'px';
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
function handlepx(filePath=__dirname, extension='css', factor=0.5){
  
  if(isDirectory(filePath)){
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //traverse files
            files.forEach(function(filename){
                //get absolute path
                let filedir = path.join(filePath,filename);
                let stat = fs.lstatSync(filedir);
                if(stat.isDirectory()){
                  handlepx(filedir, extension, factor)
                }else{
                    if(filename.includes('.'+extension)){
                        doMultiply(filedir, factor);
                    }
                }
            })
        }
    })
  }else{
    doMultiply(filePath, factor)
  }
}

module.exports.options = options;
module.exports.handlepx=handlepx;
