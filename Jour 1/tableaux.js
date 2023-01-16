let array = [56, 'test', Math.random(), [1, 2, 3]]
let array2 = new Array(56, 'test', Math.random(), [1, 2, 3])

// Ajouter un élément
array.push('fin');

// Supprimer le dernier élément
array.pop();

// Supprimer le premier élément
array.shift()

// Supprimer un élément particulier
delete array[2];
let index = array.indexOf('test');
array.splice(index, 1);

// Inverser un tableau
array.reverse();


// rechercher dans un tableau via une fonction
let fruits = [
    { nom: "pommes", quantite: 2 },
    { nom: "bananes", quantite: 4 },
    { nom: "cerises", quantite: 0 },
]

function pommes (patatra) {
    return patatra.nom == 'pommes';
}

console.log(fruits.find(pommes));