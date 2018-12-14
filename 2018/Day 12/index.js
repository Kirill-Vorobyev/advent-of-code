const inputReader = require('./inputReader');

let state = [];
let rules = [];
let offset = 0;

//read the file and get the initial state and rules
setTimeout(()=>{
    let initialState = inputReader.getInitialState();
    state = initialState;
    rules = inputReader.getRules();
    compute(initialState);
},500);

compute = (initialState) => {
    console.log(initialState);
    for(let i=0;i<97;i++){
        step();
        console.log(state);
        console.log(offset);
        console.log(i);
    }
    let total = 0;
    for(let pot in state){
        if(state[parseInt(pot)]=='#'){
            total += (parseInt(pot)+offset+49999999903);
        }
    }
    console.log(total);
}

step = () => {
    let nextState = '..';
    //pad the start
    while(!state.startsWith('....')){
        state = '.'+state;
        offset--;
    }
    //pad the end
    while(!state.endsWith('....')){
        state = state + '.';
    }
    for(let pos = 0; pos<state.length; pos++){
        if(pos<state.length-2){
            let switched = false;
            for(let rule of rules){
                if(state.startsWith(rule.pattern,parseInt(pos))){
                    //console.log('rule match: '+rule.pattern+' = '+state.substr(parseInt(pos),5)+' at position '+parseInt(pos+2)+' modifying '+state.substr(parseInt(pos+2),1)+' into '+rule.output);
                    nextState += rule.output;
                    switched = true;
                    break;
                }
            }
            if(!switched){
                //console.log('no rule matched inserting previous pot')
                nextState += '.';
            }
        }
    }
    state = nextState;
}