function buttonCalculateOneClicked() {
    fetch("input.txt").then(res => res.text()).then( text => {
        calculateSolutionOne(text);
    });
}

function calculateSolutionOne(input){
    const program = input.split(",").map(val => {
        return parseInt(val);
    });
    const solutionNumber = 1;
    adjustProgram(program);
    executeProgram(program, solutionNumber);
}

function adjustProgram(program){
    program[1] = 12;
    program[2] = 2;
}

function executeProgram( program, solution){
    for( let instructionPointer = 0; instructionPointer < program.length; instructionPointer += 4 ){
        switch(program[instructionPointer]){
            case 1:
                addOpcode(program[instructionPointer+1], program[instructionPointer+2], program[instructionPointer+3], program);
                break;
            case 2:
                mulOpcode(program[instructionPointer+1], program[instructionPointer+2], program[instructionPointer+3], program);
                break;
            case 99:
                haltOpcode(program);
                if(solution == 1){
                    // output in the dom for solution one
                    let answerOneSpan = document.getElementById("answerOne");
                    answerOneSpan.innerText = "Program Halted! Value at position 0="+program[0];
                }else{
                    // return value for solution two
                    return program[0];
                }
                break;
            default:
                magicSmoke(program);
        }
    }
}

function addOpcode( inPointer1, inPointer2, outPointer, program){
    //console.log("addOpcode");
    program[outPointer] = program[inPointer1] + program[inPointer2]; 
}

function mulOpcode( inPointer1, inPointer2, outPointer, program){
    //console.log("mulOpcode");
    program[outPointer] = program[inPointer1] * program[inPointer2]; 
}

function haltOpcode( program ){
    //console.log("program halted");
    //console.log(program);
}

function magicSmoke ( program ){
    //console.log("magic smoke");
    //console.log(program);
}

function buttonCalculateTwoClicked() {
    fetch("input.txt").then(res => res.text()).then( text => {
        calculateSolutionTwo(text);
    });
}

function calculateSolutionTwo(input) {
    const program = input.split(",").map(val => {
        return parseInt(val);
    });
    const solutionNumber = 2;
    const targetOutput = 19690720;
    let output = 0;
    const answerTwoSpan = document.getElementById("answerTwo");

    for(let noun = 0; noun <= 99; noun++){
        for(let verb = 0; verb <= 99; verb++){
            const memory = JSON.parse(JSON.stringify(program));
            setNounAndVerb(memory,noun,verb);
            output = executeProgram(memory,solutionNumber);
            if(output == targetOutput){
                answerTwoSpan.innerText = "Matches Found! Value at position 0="+targetOutput+" when noun="+noun+" and verb="+verb+" Thus, 100  * noun + verb = "+(100*noun+verb);
                break;
            }
        }
        if(output == targetOutput){
            break;
        }
    }
}

function setNounAndVerb(memory,noun,verb) {
    memory[1] = noun;
    memory[2] = verb;
}