# handle css value with unit
multiply value by factor 

## A CLI tool not a loader

## install
    npm i handlepx -g

## desc
    will convert match value to value*factor
### match pattern
    "(-?\\d+(\\.\\d+)?)" + unit

## usage          
    handlepx go <directory/filePath> [options]

### option
    -X --exclude_1px 
    -E --postfix [items] // list, e.g. css,less,sass, default: css
    -F --factor [value] // integer/float , default: 0.5
    -U --unit [value] // default: px
    -N --negative //only convert negative value
    -P --positive //only convert postivie value

## Note:
1px will be converted by default.
## exclude 1px
To exclude 1px, you can add option -X/--exclude_1px.

## arguments
### directory/filePath : required
default: __dirname
###### relative/absolute path both works.
###### You can ignore cssFileExtesion when you specify filePath.

## exmaple
    1. extension:scss， factor:2
        handlepx go ./ -E scss -F 2 
    2. exclude 1px
        handlepx go ./common.scss -X 
    3. convert both scss and css
        handlepx go ./test -E scss,css
    4. convert rem unit
        handlepx go ./ -U rem



 