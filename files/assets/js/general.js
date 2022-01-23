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

function parallaxXLeft(scrollingOffsets) {
    for(let i = 0; i < allSphereObjectsLeft.length; i++) {
        allSphereObjectsLeft[i].querySelector('figure').style.left = (((scrollingOffsets[i] + allSphereObjectsLeft[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString())/2) + "px";
    }
}

function parallaxXRight(scrollingOffsets) {
    for(let i = 0; i < allSphereObjectsLeft.length; i++) {
        allSphereObjectsRight[i].querySelector('figure').style.right = (((scrollingOffsets[i] + allSphereObjectsLeft[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString())/2) + "px";
    }
}

let allScrollingOffsets = [];
let allSphereOffsetsLeft = [];
let allSphereOffsetsRight = [];

const allScrollingObjects = document.querySelectorAll('.scrolling');
allScrollingObjects.forEach(object => {
    const originalYOffset = getPosition(object).offsetTop;
    allScrollingOffsets.push(originalYOffset);
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

window.addEventListener("scroll", function(){
    parallaxY(allScrollingOffsets);
    parallaxXLeft(allSphereOffsetsLeft);
    parallaxXRight(allSphereOffsetsRight);
    footerEffect();
    fixHeader();
});
