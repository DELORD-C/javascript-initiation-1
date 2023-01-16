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
    if (answer != null && answer.length > 0) {
        let paragraphe = document.createElement('p');
        paragraphe.innerHTML = answer;
        let h1 = document.querySelector('h1');
        h1.after(paragraphe);
    }
}

function testConfirm() {
    if (confirm("Voulez-vous vraiment supprimer le paragraphe ?")) {
        let paragraphe = document.querySelector('p');
        paragraphe.remove();
    }
}