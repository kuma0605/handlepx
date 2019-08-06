# handle css value with unit
multiply value with factor 

## A CLI tool not a loader

## install
    npm i handlepx -g

## usage          
    handlepx go <directory/filePath>

### option
    -E --exclude_1px 
    -P --postfix [items] // list e.g. css,less,sass
    -F --factor [value] // integer/float , default: 0.5
    -U --unit [value] // default: px

## Note:
1px will be converted by default.
## exclude 1px
To exclude 1px, you can add option -E/--exclude_1px.

## arguments
### directory/filePath : required
default: __dirname
###### relative/absolute path both works.
###### You can ignore cssFileExtesion when you specify filePath.

## exmaple
    1. 当前目录下 后缀 scss， 系数2
        handlepx go -P scss -F 2 ./ 
    2. 当前目录下common.scss文件，不处理1px
        handlepx go -E ./common.scss 
    3. test目录下 scss 和 css文件
        handlepx go -P scss,css ./test



 