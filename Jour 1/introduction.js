let variable_a = 50, variable_b = 75;
// var variable_c = 100;

// opérateurs : +-*/%
let variable_c = variable_a + variable_b;

const CONSTANTE_A = `test`;


// Structures de controle conditionnelles

// && AND
// || OR
// opérateurs de comparaison > >= < <= == != === !==
if (variable_a > variable_b) {
    console.log("supérieur");
}
else if (variable_a < variable_b) {
    console.log("inférieur");
}
else {
    console.log("égal");
}

switch (CONSTANTE_A) {
    case 'test':
        console.log('Valide');
        break;
    
    case 'null':
        console.log('Vide');
        break;

    default:
        console.log('Inconnu');
        break;
}



// Structures de controle itératives

for (let index = 0; index < 10; index++) {
    console.log(index);
}

let array = [15, 56, 98, 78, 12, 'Test']

array.forEach(element => {
    console.log(element);
});

let n = 0;
while (n < 3) {
    console.log(n);
    n++;
}