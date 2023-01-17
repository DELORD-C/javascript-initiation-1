window.addEventListener('resize', function () {
    console.log('resize');
});

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.submit();
})

let elem = document.querySelector('p');

elem.addEventListener('click', () => {
    elem.style.color = 'red';
});