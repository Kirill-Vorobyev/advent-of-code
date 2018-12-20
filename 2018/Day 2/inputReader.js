let twoCount = 0;
let threeCount = 0;
let answer = '';
let seenStrings = [];

let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    //part one
    let letters = {};
    for(let char of line){
        if(letters[char]===undefined){
            letters[char]=1;
        }else{
            letters[char]+=1;
        }
    }

    let two = 0;
    let three = 0;
    for(let letter in letters){
        //console.log(line, letter,letters[letter]);
        if(letters[letter]==2){
            two = 1;
        }
        if(letters[letter]==3){
            three = 1;
        }
    }
    twoCount += two;
    threeCount += three;
    //part two
    let lastChar = 0;
    if(seenStrings.length > 0){
        for(let string of seenStrings){
            let diff = 0;
            for(let char in line){
                if(string[char]!=line[char]){
                    diff++;
                    lastChar = char;
                }
            }
            if(diff==1){
                for(let c in line){
                    if(c!=lastChar){
                        answer += line[c];
                    }
                }
                break;
            }
        }
    }
    seenStrings.push(line);
});


exports.getChecksum = ()=>{
    return twoCount * threeCount;
}

exports.getPartTwo = ()=>{
    return answer;
}