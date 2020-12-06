const fs = require('fs');

const input = fs.readFileSync( "input.txt",{encoding:'utf8', flag:'r'} );
const inputArray = input.split('\n');

let treesEncountered = 0;
let posX = 0, posY = 0;
let vX = 3, vY = 1;

for(let y=0; y<inputArray.length; y+=vY){
    let row = inputArray[y];
    console.log(row.charAt(posX % row.length));
    if(row.charAt(posX % row.length) == "#"){
        treesEncountered++;
    }
    posX += vX;
}

console.log(treesEncountered);