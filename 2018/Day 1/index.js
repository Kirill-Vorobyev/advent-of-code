const inputReader = require('./inputReader');

let frequency = 0;
let offsets = [];
let calibratedFrequency = 0;

//read the file and get the initial state and rules
setTimeout(()=>{
    frequency = inputReader.getFrequency();
    offsets = inputReader.getOffsets();
    calibratedFrequency = inputReader.getClaibratedFrequency();
    console.log(frequency,calibratedFrequency);
},1000);