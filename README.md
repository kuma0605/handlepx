# divide css value with unit(px) into half 

## install
npm i pxtohalf -g

## usage          
pxtohalf go [directory/filePath] [cssFileExtension]

## Note:
1px will not be converted.

### arguments
##### directory/filePath : optional
default: __dirname
###### relative/absolute path both works.
###### You can ignore cssFileExtesion when you specify filePath.

##### cssFileExtension : optional
default: css

#### exmaple
1. pxtohalf go ./ scss 
2. pxtohalf go ./common.scss


 