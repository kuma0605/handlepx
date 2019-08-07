# handle css value with unit
multiply value with factor 

## A CLI tool not a loader

## install
    npm i handlepx -g

## desc
    will convert match value to value*factor
### match pattern
    "(-?\\d+(\\.\\d+)?)"

## usage          
    handlepx go <directory/filePath>

### option
    -E --exclude_1px 
    -P --postfix [items] // list, e.g. css,less,sass, default: css
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
    1. extension:scss， factor:2
        handlepx go -P scss -F 2 ./ 
    2. exclude 1px
        handlepx go -E ./common.scss 
    3. convert both scss and css
        handlepx go -P scss,css ./test
    4. convert rem unit
        handlepx go -U rem ./



 