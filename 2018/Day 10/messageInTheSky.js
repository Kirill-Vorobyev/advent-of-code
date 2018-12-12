let points = [];

let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    let x = line.substr(10,6);
    let y = line.substr(18,6);
    let vx = line.substr(36,2);
    let vy = line.substr(40,2);
    let point = {
        x: x,
        y: y,
        vx: vx,
        vy: vy
    }
    points.push(point);
});

exports.getData = ()=>{
    return points;
}