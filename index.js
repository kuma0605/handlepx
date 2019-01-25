var fs = require('fs');
var path = require('path');

function isDirectory(filePath){
  let stat = fs.lstatSync(filePath);
  return stat.isDirectory()
}

function doDivide(filedir){
  fs.readFile(filedir,'utf-8',function(err, file){
      console.log('into', filedir)
      let res = file.replace(/(\d+(\.\d+)?)px/g, function(full, match1, match2){
        if(full==='1px')return full;
        console.log('divide', match1, 'into', match1/2);
        return match1/2+'px';
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
function pxtohalf(filePath=__dirname, extension='css'){
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
                  pxtohalf(filedir, extension)
                }else{
                    if(filename.includes('.'+extension)){
                        doDivide(filedir);
                    }
                }
            })
        }
    })
  }else{
    doDivide(filePath)
  }
}

module.exports.pxtohalf=pxtohalf;
