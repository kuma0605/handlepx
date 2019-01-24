var fs = require('fs');
var path = require('path');
require('chalk')
//解析需要遍历的文件夹，默认获取当前目录
// var filePath = path.resolve(__dirname);

//调用文件遍历方法
// pxtohalf(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function pxtohalf(filePath=path.resolve(__dirname), extension='css'){
    console.log('into', filePath, extension)
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                            // console.log(filedir, filename.includes('.css'));
                            if(filename.includes('.'+extension)){
                              fs.readFile(filedir,'utf-8',function(err, file){
                                // console.log(file)
                                let res = file.replace(/(\d+(\.\d+)?)px/g, function(full, match1, match2){
                                  console.log('divide', match1, 'into', match1/2);
                                  if(full==='1px')return full;
                                  return match1/2+'px';
                                })
                                fs.writeFile(filedir, res, 'utf8', function (err) {
                                  if (err) return console.log(err);
                                });
                              })
                            }
                        }
                        if(isDir){
                          pxtohalf(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}

module.exports.pxtohalf=pxtohalf;
