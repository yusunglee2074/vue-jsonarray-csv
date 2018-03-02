# vue-jsonarray-to-csv

This small code forked by http://jsfiddle.net/hybrid13i/JXrwM/
Upgrade support nested Obejct and make component of vue.js.

## Usage
    npm install vue-jsonarray-csv
    import vueCsv from 'vue-jsonarray-csv'
    create component with this library.

### Require props
jsonArray => jsonArray data.
fileName => will result filename.
firstRowForLabel => will be first row. (Should be like `'a,b,c....'` or `'key, title, name, address...'`)
keys => will be each row value. dot spread express of Eash object in jsonArray  
(Should be like `'["key", "title", "User.name", "User.address"]'`)
buttonName => button name.
divClass => Library templat is just the button inside one div. This prop will be div className.


### Any bug.
Report github issue or lys0333@gmail.com or just modify your self, this very simple library.
Thank you.
