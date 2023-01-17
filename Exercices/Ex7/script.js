let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let nom = document.getElementById('nom'),
        cp = document.getElementById('cp'),
        tel = document.getElementById('tel'),
        email = document.getElementById('email'),
        error = false;
    defaultBorder([nom, cp, tel, email]);
    if (nom.value.match(/^[a-z]{2}[A-z]*$/i) == null) {
        error = true;
        redBorder(nom);
    }
    if (cp.value.match(/^[0-9]{5}$/i) == null || parseInt(cp.value <= 0)) {
        error = true;
        redBorder(cp);
    }
    if (tel.value.match(/^(0|\+33)([0-9]{9})$/i) == null) {
        error = true;
        redBorder(tel);
    }
    if (email.value.match(/^(.+)@(.+)\.([A-z]{2,7})$/i) == null) {
        error = true;
        redBorder(email);
    }
    if (!error) {
        form.submit();
    }
})

function redBorder (element) {
    element.style.border = 'solid 2px red';
}

function defaultBorder (elements) {
    elements.forEach(element => {
        element.style.border = '';
    });
}

function resetForm() {
    form.reset();
}