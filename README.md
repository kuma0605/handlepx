# divide css value with unit(px) into half 

## A CLI tool not a loader

## install
npm i pxtohalf -g

## usage          
pxtohalf go [directory/filePath] [fileExtension]

## Note:
1px will not be converted.

### arguments
##### directory/filePath : optional
default: __dirname
###### relative/absolute path both works.
###### You can ignore cssFileExtesion when you specify filePath.

##### fileExtension : optional
default: css

#### exmaple
1. pxtohalf go ./ scss 
2. pxtohalf go ./common.scss


 