const inputReader = require('./inputReader');

let checksum = 0;
let answer = '';

//read the file and get the initial state and rules
setTimeout(()=>{
    checksum = inputReader.getChecksum();
    answer = inputReader.getPartTwo();
    console.log(checksum,answer);
},1000);