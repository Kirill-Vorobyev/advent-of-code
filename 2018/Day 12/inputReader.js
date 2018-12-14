let initialState = [];
let rules = [];

let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    if(line.includes('initial state')){
        initialState = line.substr(15);
    }else if(line.includes('=>')){
        let pattern = line.substr(0,5);
        let output = line.substr(line.length-1);
        let rule = {
            pattern: pattern,
            output: output
        }
        rules.push(rule);
    }
});

exports.getInitialState = ()=>{
    return initialState;
}

exports.getRules = ()=>{
    return rules;
}