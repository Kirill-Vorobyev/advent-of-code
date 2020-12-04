const fs = require('fs');

const input = fs.readFileSync( "input.txt",{encoding:'utf8', flag:'r'} );
const inputArray = input.split('\n');

const targetValue = 2020;

const values = inputArray.filter((el)=>{
    const remainder = targetValue - parseInt(el);
    return inputArray.includes(`${remainder}`);
});

console.log(`The two numbers in the input that add to ${targetValue} are ${values[0]} and ${values[1]}`);

const multiple = values[0] * values[1];

console.log(`${values[0]} * ${values[1]} = ${multiple}`);