const inputReader = require('./inputReader');

let hotChocolates = '';
let elves = [];

//read the file and start
setTimeout(()=>{
    let initialState = inputReader.getInitialState();
    hotChocolates = initialState;
    compute();
},250);

compute = () => {
    //initialize elves as integers
    initElves();
    let numberOfTrials = parseInt(hotChocolates);
    numberOfTrials = 768071;
    while(hotChocolates.length<numberOfTrials+10){
        hotChocolates = combineRecipes();
        pickNewRecipes();
        //console.log(hotChocolates);
    }
    //print solution
    console.log('solution: '+hotChocolates.substr(numberOfTrials,10));
}

initElves = () => {
    for( let elf in hotChocolates ){
        elves.push(parseInt(elf));
    }
    //console.log(elves);
}

//combine recipes 
combineRecipes = () => {
    let newHotChocolatesList = hotChocolates;
    for( let elf = 0; elf<elves.length-1; elf+=2){
        scores = {
            elf1 : parseInt(hotChocolates[parseInt(elves[elf])]),
            elf2 : parseInt(hotChocolates[parseInt(elves[elf+1])])
        }
        let newHotChocolate = parseInt(scores.elf1) + parseInt(scores.elf2);
        //console.log('elf1: '+scores.elf1,'elf2: '+scores.elf2,'newCombination: '+newHotChocolate);
        newHotChocolatesList += newHotChocolate;
    }
    return newHotChocolatesList;
}

pickNewRecipes = () => {
    let newElves = [];
    for(let elfPos in elves){
        let elfScore = parseInt(hotChocolates[elves[parseInt(elfPos)]]);
        let newPosition = parseInt(elves[parseInt(elfPos)]) + 1 + elfScore;
        //console.log('elfScore: '+elfScore,'elfNewPosition: '+newPosition, 'hcLength: '+ hotChocolates.length);
        newElves[parseInt(elfPos)] = newPosition % hotChocolates.length;
    }
    elves = newElves;
    //console.log(elves);
}