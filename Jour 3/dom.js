//Navigation
let h1 = document.querySelector('h1');
let maindiv = h1.nextElementSibling;
let p = maindiv.firstElementChild.firstElementChild.firstElementChild;
let p2 = p.parentElement.nextElementSibling.firstElementChild;
console.log(p2)


//Creation d'element
let newElement = document.createElement('p');
newElement.innerHTML = 'Nouvel élément';
newElement.classList.add('test');

//Ajouter un enfant
maindiv.appendChild(newElement);
// maindiv.insertBefore(newElement, maindiv.firstElementChild);
// maindiv.firstElementChild.before(newElement);

//Ajouter un voisin
maindiv.before(newElement);

//Supprimer un élément
newElement.remove();