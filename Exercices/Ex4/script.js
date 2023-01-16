function scaleParagraph () {
    let paragraph = document.getElementById('id');
    if (paragraph.style.fontSize == '') {
        paragraph.style.fontSize = '2rem';
    }
    else {
        let value = parseInt(paragraph.style.fontSize.substring(0, paragraph.style.fontSize.length - 3)) + 1;
        paragraph.style.fontSize = value + 'rem';
    }
}

function hideTitle (event) {
    event.target.style.opacity = 0;
}

function showTitle (event) {
    event.target.style.opacity = 1;
}