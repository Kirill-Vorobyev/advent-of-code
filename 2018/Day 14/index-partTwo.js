let hotChocolates = [];
let elves = [];

let initialState = '37';
hotChocolates = initialState;
compute();

compute = () => {
    //initialize elves as integers
    initElves();
    let recipeSequence = '768071';
    while(!hotChocolates.substring(hotChocolates.length - 10).includes(recipeSequence)){
        combineRecipes();
        pickNewRecipes();
    }
    //print solution
    let prefix = hotChocolates.split(recipeSequence)[0];
    console.log('solution: '+prefix.length);
}

initElves = () => {
    for( let elf in hotChocolates ){
        elves.push(parseInt(elf));
    }
    //console.log(elves);
}

//combine recipes 
combineRecipes = () => {
    for( let elf = 0; elf<elves.length-1; elf+=2){
        scores = {
            elf1 : hotChocolates[elves[elf]],
            elf2 : hotChocolates[elves[elf+1]]
        }
        let newHotChocolate = parseInt(scores.elf1) + parseInt(scores.elf2);
        //console.log('elf1: '+scores.elf1,'elf2: '+scores.elf2,'newCombination: '+newHotChocolate);
        hotChocolates+=newHotChocolate;
    }
}

pickNewRecipes = () => {
    let newElves = [];
    for(let elfPos in elves){
        let elfScore = parseInt(hotChocolates[elves[elfPos]]);
        let newPosition = elves[elfPos] + 1 + elfScore;
        //console.log('elfScore: '+elfScore,'elfNewPosition: '+newPosition, 'hcLength: '+ hotChocolates.length);
        newElves[elfPos] = newPosition % hotChocolates.length;
    }
    elves = newElves;
    //console.log(elves);
}