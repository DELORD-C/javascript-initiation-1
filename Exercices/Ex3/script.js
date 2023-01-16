function sapinDeNoel(h) {
    for (let n = 1; n <= h; n++) {
        let espaces = "", zeros = "";
        for (x = 0; x < h - n; x++) {
            espaces += " ";
        }
        for (y = 0; y < n * 2 - 1; y++) {
            if (n == 1) {
                zeros = '@'
            }
            else {
                let rand = Math.random();
                if (rand > 0.8) {
                    zeros += "*";
                }
                else {
                    zeros += "0";
                }
            }
        }
        console.log(espaces + zeros);
    }
    let espacesFinaux = "";
    for (let z = 0; z < h - 1; z++) {
        espacesFinaux += " ";
    }
    console.log(espacesFinaux + '|')
}

sapinDeNoel(10);