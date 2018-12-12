$('document').ready(main());

let stars = {}

function main(){
    $.get('/positions',(data)=>{
        stars = data;
        console.log(data);
    });
    let canvas = $('#sandbox');
    let slider = $('<div/>').attr({id: 'slider'}).slider({
        range: true,
        min: 10000,
        max: 12000,
        step: 1
    }).appendTo(canvas);
    slider.on('slidechange',(event,ui)=>{
        console.log(ui.value);
        compute(ui.value);
    });
    let xSky = window.outerWidth/2;
    let ySky = window.outerHeight/2;
    let sky = $('<div/>').attr({id:'sky'}).css({position: 'absolute', width: 10, height: 10, top: ySky, left: xSky, background: 'red'}).appendTo(canvas);
}

function compute(time) {
    let sky = $('#sky');
    sky.empty();
    for(let star of stars){
        let myX = parseInt(star.x) + parseInt(star.vx) * time;
        let myY = parseInt(star.y) + parseInt(star.vy) * time;
        $('<div/>').css({ position: 'absolute', top: myY, left: myX, width: 2, height: 2, background: 'white'}).appendTo(sky);
    }
}