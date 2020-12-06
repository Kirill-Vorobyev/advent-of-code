const fs = require('fs');

const input = fs.readFileSync( "input.txt",{encoding:'utf8', flag:'r'} );
const inputArray = input.split('\n');

const passwords = inputArray.reduce((pass,curr,index)=>{
    pass[index] = {
        "password": curr.split(":")[1].slice(1),
        "lowerBound": parseInt(curr.split(":")[0].split(" ")[0].split("-")[0]),
        "upperBound": parseInt(curr.split(":")[0].split(" ")[0].split("-")[1]),
        "letter": curr.split(":")[0].split(" ")[1]
    }
    return pass;
},{});

let validPasswords = 0;
for(const passwd of Object.values(passwords)){
    let containsCount = 0;
    for( const char of passwd.password.split("") ){
        if (char == passwd.letter ) containsCount++;
    }
    if( containsCount >= passwd.lowerBound && containsCount <= passwd.upperBound ){
        validPasswords++;
    }
}


console.log(validPasswords);