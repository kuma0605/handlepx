# handle css value with unit(px) 
# multiply value with factor 

## A CLI tool not a loader

## install
npm i handlepx -g

## usage          
handlepx go <directory/filePath>

### option
-E --exclude_1px 
-P --postfix 后缀名
-F --factor 系数

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
1. handlepx go -P scss -F 2 ./ 
2. handlepx go -E ./common.scss 


 