function buttonCalculateOneClicked() {
    //fetch the input
    fetch("input.txt").then(res => res.text()).then(text => {
        calculateSolutionOne(text);
    });
}

function calculateSolutionOne(text) {
    const massesStrings = text.split(/\r?\n/);
    let sum = 0;
    for(mass of massesStrings){
        sum += Math.floor( parseInt(mass) / 3 ) - 2;
    }
    const answerDiv = document.getElementById("answerOne");
    answerDiv.innerText = "Answer: " + sum + " fuel required";
}

function buttonCalculateTwoClicked() {
    //fetch the input
    fetch("input.txt").then(res => res.text()).then(text => {
        calculateSolutionTwo(text);
    });
}

function calculateSolutionTwo(text) {
    const massesStrings = text.split(/\r?\n/);
    const massesInts = massesStrings.map((item)=>{
        return parseInt(item);
    });
    let sum = 0;
    for(mass of massesInts){
        let fuel = Math.floor( mass / 3 ) - 2;
        let fuelMass = calculateRecursiveFuelMass( fuel );
        sum += fuel + fuelMass;
    }
    const answerDiv = document.getElementById("answerTwo");
    answerDiv.innerText = "Answer: " + sum + " fuel required";
}

function calculateRecursiveFuelMass(mass) {
    if(mass <= 0){
        return 0;
    }else{
        const fuel = Math.floor( mass / 3 ) - 2;
        if(fuel <= 0){
            return 0;
        }else{
            return fuel + calculateRecursiveFuelMass( fuel );
        }
    }
}