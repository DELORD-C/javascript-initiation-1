let title = document.querySelector('h1');

setTimeout(() => {
    title.style.color = 'red';
    clearInterval(interval);
}, 5000);

let interval = setInterval(() => {
    title.innerHTML = title.innerHTML + '0';
}, 1000)