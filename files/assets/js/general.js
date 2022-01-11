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
        allScrollingObjects[i].style.top = (scrollingOffsets[i] + allScrollingObjects[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString() + "px";
    }
}

function parallaxXLeft(scrollingOffsets) {
    for(let i = 0; i < allSphereObjectsLeft.length; i++) {
        allSphereObjectsLeft[i].querySelector('figure').style.left = (((scrollingOffsets[i] + allSphereObjectsLeft[i].offsetHeight/2) - (window.pageYOffset + window.innerHeight/2).toString())/2) + "px";
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

window.addEventListener("scroll", function(){
    parallaxY(allScrollingOffsets);
    parallaxXLeft(allSphereOffsetsLeft);
});
