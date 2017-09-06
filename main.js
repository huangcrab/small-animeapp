var playPause = anime({
    targets:'div.box',
    translateY:[{
        value:300,duration:2000
    },{
        value:0,duration:800
    }],
    rotate:{
        value:'1turn',
        easing:'easeInOutSine'
    },
    delay: function(el,i,num){return i * 2800},
    autoplay:false,
    loop:true
});

//document.getElementsByClassName('play').item(0).addEventListener('click',playPause.play);
document.getElementsByClassName('pause').item(0).onclick = playPause.pause;
document.querySelector('#boxes .play').onclick = playPause.play;



/*anime({
    targets:'div.box.blue',
    translateY:[{
        value:300,duration:2000,delay:2800
    },{
        value:0,duration:800
    }],
    rotate:{
        value:'1turn',
        easing:'easeInOutSine',
        delay:2800
    }
});

anime({
    targets:'div.box.green',
    translateY:[{
        value:300,duration:2000,delay:2800*2
    },{
        value:0,duration:800
    }],
    rotate:{
        value:'1turn',
        easing:'easeInOutSine',
        delay:2800*2
    }
});

anime({
    targets:'div.box.yellow',
    translateY:[{
        value:300,duration:2000,delay:2800*3
    },{
        value:0,duration:800
    }],
    rotate:{
        value:'1turn',
        easing:'easeInOutSine',
        delay:2800*3
    }
});*/