# divide css value with unit(px) into half 

## install
npm i pxtohalf -g

## usage          
pxtohalf go [folderPath/filePath] [cssFileExtension]

## Note:
1px will not be converted.

### arguments
##### folderPath/filePath : optional
default: __dirname
###### You can ignore cssFileExtesion If you specify filePath.

##### cssFileExtension : optional
default: css

#### exmaple
1. pxtohalf go ./ scss 
2. pxtohalf go ./common.scss


 