let audioMuted = true;

const toggleAudioIcon = (e) => {
    if(audioMuted) {
        e.target.src = "files/assets/layout/audio-off-white.png";
        audioMuted = false;
    } else {
        e.target.src = "files/assets/layout/audio-white.png";
        audioMuted = true;
    }
}

if(document.querySelector('.icon-audio')) {
    document.querySelector('.icon-audio').addEventListener('click', toggleAudioIcon);
}


function getPosition(elem){
    let dims = {offsetLeft:0, offsetTop:0};
    do {
        dims.offsetLeft += elem.offsetLeft;
        dims.offsetTop += elem.offsetTop;
    }
    while (elem = elem.offsetParent);
    return dims;
}

function parallaxY(scrollingOffsets) {
    for(let i = 0; i < allScrollingObjects.length; i++) {
        /* allScrollingObjects[i].animate({
            top: (scrollingOffsets[i] + allScrollingObjects[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString() + "px"
        },
            1000,
            'swing',
            function() {
                console.log('Finished');
            }); */
        allScrollingObjects[i].style.top = (scrollingOffsets[i] + allScrollingObjects[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString() + "px";
    }
}

function parallaxYSlow(scrollingOffsets) {
    for(let i = 0; i < allScrollingObjects.length; i++) {
        /* allScrollingObjects[i].animate({
            top: (scrollingOffsets[i] + allScrollingObjects[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString() + "px"
        },
            1000,
            'swing',
            function() {
                console.log('Finished');
            }); */
        allScrollingObjects[i].style.top = ((scrollingOffsets[i] + allScrollingObjects[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2)/2).toString() + "px";
    }
}

function parallaxXLeft(scrollingOffsets) {
    for(let i = 0; i < allSphereObjectsLeft.length; i++) {
        allSphereObjectsLeft[i].querySelector('figure').style.left = (((scrollingOffsets[i] + allSphereObjectsLeft[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString())/2) + "px";
    }
}

function parallaxXRight(scrollingOffsets) {
    for(let i = 0; i < allSphereObjectsRight.length; i++) {
        allSphereObjectsRight[i].querySelector('figure').style.right = (((scrollingOffsets[i] + allSphereObjectsRight[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString())/2) + "px";
    }
}

let allScrollingOffsets = [];
let allSlowScrollingOffsets = [];
let allSphereOffsetsLeft = [];
let allSphereOffsetsRight = [];

const allScrollingObjects = document.querySelectorAll('.scrolling');
allScrollingObjects.forEach(object => {
    const originalYOffset = getPosition(object).offsetTop;
    allScrollingOffsets.push(originalYOffset);
})

const allSlowScrollingObjects = document.querySelectorAll('.scrolling.langsam');
allSlowScrollingObjects.forEach(object => {
    const originalYOffset = getPosition(object).offsetTop;
    allSlowScrollingOffsets.push(originalYOffset);
})

const allSphereObjectsLeft = document.querySelectorAll('.scrolling-sphere-left');
allSphereObjectsLeft.forEach(object => {
    const originalYOffset = getPosition(object).offsetTop;
    allSphereOffsetsLeft.push(originalYOffset);
})

const allSphereObjectsRight = document.querySelectorAll('.scrolling-sphere-right');
allSphereObjectsRight.forEach(object => {
    const originalYOffset = getPosition(object).offsetTop;
    allSphereOffsetsRight.push(originalYOffset);
})

const footerEffect = () => {
    const calc = (((getPosition(document.getElementById('footer')).offsetTop- (window.pageYOffset + window.innerHeight))/document.getElementById('footer').offsetHeight)+1)*100;
    document.getElementById('footer').style.borderTopRightRadius = calc + "%";
    document.getElementById('footer').style.borderTopLeftRadius = calc + "%";
}

const fixHeader = () => {
    if(window.pageYOffset > 20) {
        document.getElementById('header').classList.add('fixed');
    } else if(window.pageYOffset === 0) {
        document.getElementById('header').classList.remove('fixed');
    }
}

console.log(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

if( window.innerWidth >= 1025 ) {
    document.addEventListener("DOMContentLoaded", function (event) {
        window.addEventListener("scroll", function () {
            parallaxY(allScrollingOffsets);
            parallaxYSlow(allSlowScrollingOffsets);
            parallaxXLeft(allSphereOffsetsLeft);
            parallaxXRight(allSphereOffsetsRight);
            footerEffect();
            fixHeader();
        });
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
    });
}



jQuery('.to-top-button').hide();
jQuery(window).scroll(function(){
    const value=400;
    const scrolling = jQuery(window).scrollTop();
    if(scrolling>value){
        jQuery('.to-top-button').fadeIn();
    } else{
        jQuery('.to-top-button').fadeOut();
    }
});
jQuery('.to-top-button').click(function(){
    jQuery('html, body').animate({scrollTop:'0px'},800);
    return !1;
});
