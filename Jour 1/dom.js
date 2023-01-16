// let title = document.getElementById('title');
// let title = document.getElementsByTagName('h1');
// let title = document.querySelector('h1');
// let title = document.querySelectorAll('h1');

// console.log(title)
// title.style.color = 'red'

function clickTitle (event) {
    event.target.style.color = 'red';
    // console.log(event)
}

function testAlert() {
    alert("Ceci est une alerte !");
}

function testPrompt() {
    let answer = prompt("Comment allez-vous ?");
    console.log(answer);
}

function testConfirm() {
    let answer = confirm("Voulez-vous vriament ne rien faire ?");
    console.log(answer);
}