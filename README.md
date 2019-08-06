# handle css value with unit(px) 
# multiply value with factor 

## A CLI tool not a loader

## install
npm i handlepx -g

## usage          
handlepx go <directory/filePath> <fileExtension> [factor]

### option
-E --exclude_1px 

## Note:
1px will be converted by default.
To exclude 1px, you can add option -E/--exclude_1px.

## arguments
### directory/filePath : required
default: __dirname
###### relative/absolute path both works.
###### You can ignore cssFileExtesion when you specify filePath.

### fileExtension : required
default: css

### factor : optional
default: 0.5

## exmaple
1. handlepx go ./ scss 0.5
2. handlepx go -E ./common.scss scss 0.5


 