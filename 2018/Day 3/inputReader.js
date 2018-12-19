let claims = [];
let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    line = line.slice(1);
    id = parseInt(line.split('@')[0]);
    loc = line.split('@')[1].split(':')[0];
    size = line.split('@')[1].split(':')[1];
    let claim = {
        id: id,
        loc: {
            x: parseInt(loc.slice(1).split(',')[0]),
            y: parseInt(loc.slice(1).split(',')[1])
        },
        size: {
            x: parseInt(size.slice(1).split('x')[0]),
            y: parseInt(size.slice(1).split('x')[1])
        }
    }
    claims.push(claim);
});

exports.getClaims = ()=>{
    return claims;
}