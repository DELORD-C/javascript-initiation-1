function search (event) {
    let imgList = document.getElementsByTagName('img');
    for (let image of imgList) {
        if (image.alt.toLowerCase().includes(event.target.value.toLowerCase())) {
            image.style.display = 'inline';
        }
        else {
            image.style.display = 'none';
        }
    }
}