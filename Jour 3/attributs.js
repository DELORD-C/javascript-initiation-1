let h1 = document.querySelector('h1');

//Gestion des attributs
let titleh1 = h1.getAttribute('title');
h1.setAttribute('title', 'Attributs');
h1.setAttribute('test', 'test');


//Gestion des classes
let classh1 = h1.classList;
classh1.add('test');
classh1.remove('main');
if (classh1.contains('test')) {
    console.log('h1 possède la classe test.');
}
else {
    console.log('h1 ne possède pas la classe test.');
}
classh1.toggle('title');
console.log(classh1);


//Gestion du contenu
let pfirst = document.querySelector('#first > p');
console.log(pfirst);

pfirst.innerHTML += '<span>test</span>';
pfirst.textContent = 'text';