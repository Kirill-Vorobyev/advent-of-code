function buttonCalculateOneClicked() {
    fetch("input.txt").then(res => res.text()).then( text => {
        calculateSolutionOne(text);
    });
}

function calculateSolutionOne(input){
    let width = 25;
    let height = 6;
    let layerSize = width * height;
    let layers = chunkString(input, layerSize);
    let lowestLayer = [1000,0,0];
    for(layer of layers){
        const layerCounts = [0,0,0];
        for(char of layer){
            switch(char){
                case "0":
                    layerCounts[0] += 1;
                    break;
                case "1":
                    layerCounts[1] += 1;
                    break;
                case "2":
                    layerCounts[2] += 1;
                    break;
            }
        }
        if(layerCounts[0] < lowestLayer[0]){
            lowestLayer[0] = layerCounts[0];
            lowestLayer[1] = layerCounts[1];
            lowestLayer[2] = layerCounts[2];
            console.log("set lowest Layer",lowestLayer);
        }
    }
    document.getElementById('answerOne').innerText = lowestLayer[1] * lowestLayer[2];
}

function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

function buttonCalculateTwoClicked() {
    fetch("input.txt").then(res => res.text()).then( text => {
        calculateSolutionTwo(text);
    });
}

function calculateSolutionTwo(input) {
    const container = document.getElementById('answerTwo');
    let width = 25;
    let height = 6;
    let layerSize = width * height;
    let layers = chunkString(input, layerSize);
    layers.reverse();
    var finalImageArray = [];
    for(var i=0; i<6; i++){
        row = [];
        for(var j=0;j<25;j++){
            row[j]=2;
        }
        finalImageArray.push(row);
    }
    console.log(finalImageArray);
    for(layer of layers){
        rows = chunkString(layer, 25);
        for(var i=0; i<6; i++){
            for(var j=0;j<25;j++){
                if(rows[i][j] != "2"){
                    finalImageArray[i][j] = rows[i][j];
                }
            }
        }
    }
    console.log(finalImageArray);
    for(row of finalImageArray){
        let str = "";
        for(char of row){
            switch(char){
                case "0":
                    str += " ";
                    break;
                case "1":
                    str += "0";
                    break;
                case "2":
                    str += " ";
                    break;
            }
        }
        console.log(str);
        document.getElementById('answerTwo').innerText += str;
    }
}