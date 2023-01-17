// LITTERAUX DE TEMPLATE

let rep = 42;
console.log(`La réponse est ${rep}`);

console.log("1\n2");
console.log(`1
2`);

let a = 5;
let b = 10;
// Quinze vaut 15 et
// non 20.

//Version classique
console.log('Quinze vaut ' + (a + b) + ' et\nnon ' + (2 * a + b) + '.');

//Version utilisant les littéraux de template
console.log(`Quinze vaut ${a + b} et
non ${2 * a + b}.`)


// AFFECTATION PAR DECOMPOSITION

let x, y, rest = [];

//Classique
x = 10, y = 20;

//Décomposition
[x, y] = [10, 20];


//Classique
let array = [10, 20, 30, 40, 50, 60];
x = array.pop(), y = array.pop();
array.forEach(element => {
    rest.push(element);
});


//Décomposition
array = [10, 20, 30, 40, 50, 60];
[x, y, ...rest] = array


// FERMETURES

//Classique
function init() {
    let nom = 'Mozilla';
    function afficheNom() {
        console.log(nom);
    }
    afficheNom();
}

//Fermeture
function creerFonction() {
    let nom = 'Mozilla';
    function afficheNom() {
        console.log(nom);
    }
    return afficheNom;
}

let maFonction = creerFonction();
maFonction();

//Autre exemple
function ajouterA(z) {
    return function(f) {
        return z + f;
    }
}

let ajouter_5 = ajouterA(5);
let ajouter_10 = ajouterA(10);

console.log(ajouter_5(2));
console.log(ajouter_10(2));


// FONCTIONS FLECHEES

function direBonjour () {
    console.log('Bonjour');
}
direBonjour();

let bonjour = () => {
    console.log('Bonjour');
}
bonjour();