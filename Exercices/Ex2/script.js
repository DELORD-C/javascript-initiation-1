function chaineDeCaracteres(n) {
    let chaine = "";
    for (let index = 0; index < n; index++) {
        chaine += '8';
        chaine = chaine + '8';
    }
    console.log(chaine);
}

chaineDeCaracteres(10);