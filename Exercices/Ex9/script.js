let lis = document.getElementsByTagName('li');
let dragElem;
let lastDragElem;
let tempElem = document.createElement('li');

tempElem.style.height = "20px";
tempElem.style.display = "none";
tempElem.style.listStyle = "none";
document.querySelector('ul').appendChild(tempElem);

for (li of lis) {
    li.addEventListener('dragstart', (event) => {
        dragElem = event.target;
        dragElem.style.opacity = 0;
        dragElem.style.height = '0px';
        tempElem.style.display = 'list-item';
    });

    li.addEventListener('dragover', (event) => {
        lastDragElem = event.target;
        lastDragElem.style.borderTop = "solid 10px gray";
    });

    li.addEventListener('dragleave', (event) => {
        event.target.style.border = 'none';
    });

    li.addEventListener('dragend', (event) => {
        if (dragElem != lastDragElem && lastDragElem != null) {
            lastDragElem.before(dragElem)
        }
        dragElem.style.opacity = 1;
        dragElem.style.height = '';
        tempElem.style.display = 'none';
        dragElem = null;
        lastDragElem = null;
    });
}