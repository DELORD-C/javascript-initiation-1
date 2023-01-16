function fadeOut(event) {
    event.target.style.opacity = 0;
}

function fadeIn(event) {
    event.target.style.opacity = 1;
}

function scaleOut(event) {
    event.target.style.transform = 'scale(0.5)';
    // event.target.style.width = '30px';
    // event.target.style.height = '30px';
}

function scaleIn(event) {
    event.target.style.transform = 'scale(1)';
    // event.target.style.width = '50px';
    // event.target.style.height = '50px';
}

function strafeLeft(event) {
    event.target.style.transform = 'translateX(50px)';
}

function strafeRight(event) {
    event.target.style.transform = 'translateX(0)';
}

function rotateLeft(event) {
    event.target.style.transform = 'rotate(180deg)';
}

function rotateRight(event) {
    event.target.style.transform = 'rotate(0deg)';
}

function greyScaleOn(event) {
    event.target.style.filter = 'grayscale(1)'
}

function greyScaleOff(event) {
    event.target.style.filter = 'grayscale(0)'
}