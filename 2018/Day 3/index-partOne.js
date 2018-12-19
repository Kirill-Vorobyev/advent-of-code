const inputReader = require('./inputReader');

let claims = [];
let cloth = [];
for(let y=0;y<1000;y++){
    cloth[y] = [];
}

for(let y=0;y<1000;y++){
    for(let x=0;x<1000;x++){
        cloth[y][x]=0;
    }
}

//read the file and get the initial state and rules
setTimeout(()=>{
    claims = inputReader.getClaims();
    compute();
},1000);

compute = () => {
    console.log(claims);
    for(let claim of claims){
        for(let locY=claim.loc.y; locY < claim.loc.y+claim.size.y; locY++){
            for(let locX=claim.loc.x; locX < claim.loc.x+claim.size.x; locX++){
                if(cloth[locY][locX]==0){
                    cloth[locY][locX] = claim.id;
                }else{
                    cloth[locY][locX] = -1;
                }
            }
        }
    }
    let overlap = 0;
    for(let y=0;y<1000;y++){
        for(let x=0;x<1000;x++){
            if(cloth[y][x]==-1){
                overlap++;
            }
        }
    }
    console.log(overlap);
}
