# handle css value with unit(px) 
# multiply value with factor 

## A CLI tool not a loader

## install
npm i handlepx -g

## usage          
handlepx go [directory/filePath] [fileExtension] [factor]

## Note:
1px will be converted.

## arguments
### directory/filePath : optional
default: __dirname
###### relative/absolute path both works.
###### You can ignore cssFileExtesion when you specify filePath.

### fileExtension : optional
default: css

### factor : optional
default: 0.5

## exmaple
1. handlepx go ./ scss 0.5
2. handlepx go ./common.scss scss 0.5


 