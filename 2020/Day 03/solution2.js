const fs = require('fs');

const input = fs.readFileSync( "input.txt",{encoding:'utf8', flag:'r'} );
const inputArray = input.split('\n');

let treesEncountered = [];
let posX = 0, posY = 0;
let vX = 0, vY = 0;
const velocities = [
    [1,1],
    [3,1],
    [5,1],
    [7,1],
    [1,2]
]
for(let vel=0;vel<velocities.length;vel++){
    vX = velocities[vel][0];
    vY = velocities[vel][1];
    posX = 0;
    posY = 0;
    treesEncountered.push(0);
    for(let y=0; y<inputArray.length; y+=vY){
        let row = inputArray[y];
        console.log(row.charAt(posX % row.length));
        if(row.charAt(posX % row.length) == "#"){
            treesEncountered[vel]++;
        }
        posX += vX;
    }
}

console.log(treesEncountered.reduce((acc,curr)=>{ return acc*curr; }));