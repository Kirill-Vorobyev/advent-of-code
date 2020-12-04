const fs = require('fs');

const input = fs.readFileSync( "input.txt",{encoding:'utf8', flag:'r'} );
const inputArray = input.split('\n');

const targetValue = 2020;

//Hacky abstraction to allow me to call this one level deeper.
//TODO: make recursive with depth as input
function findSumValues( sum, array ){
    const values = array.filter((el)=>{
        const remainder = sum - parseInt(el);
        return array.includes(`${remainder}`);
    });
    return values;
}

const values = inputArray.filter((el)=>{
    const partialTarget = targetValue - parseInt(el);
    const output = findSumValues( partialTarget, inputArray );
    return output.length;//truthy
});

console.log(`The three numbers in the input that add to ${targetValue} are ${values[0]}, ${values[1]}, and ${values[2]}`);

const multiple = values.reduce( (prev,curr) => {
    return prev*curr;
});

console.log(`${values[0]} * ${values[1]} * ${values[2]}  = ${multiple}`);