let frequency = 0;
let offsets = [];
let seenFrequencies = [];
let findCalibration = true;
let calibratedFrequency = 0;

let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    frequency += parseInt(line);
    offsets.push(parseInt(line));
});

exports.getFrequency = ()=>{
    return frequency;
}

exports.getOffsets = () => {
    return offsets;
}

exports.getClaibratedFrequency = () =>{
    let freq = 0
    seenFrequencies.push(freq);
    while(findCalibration){
        console.log('loop');
        for(let offset of offsets){
            freq += offset;
            if(findCalibration){
                if(!seenFrequencies.includes(freq)){
                    seenFrequencies.push(freq);
                }else{
                    calibratedFrequency = freq;
                    findCalibration = false;
                    console.log(freq);
                }
            }
        }
    }
    return calibratedFrequency;
}