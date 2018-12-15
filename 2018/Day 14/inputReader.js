//initial hot chocolate scores
let hc = '';

let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('test.txt')
});

lineReader.on('line', function (line) {
    hc = line;
});

exports.getInitialState = ()=>{
    return hc;
}