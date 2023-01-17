let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let emailField = document.getElementById('email');
    let results = emailField.value.match(/^(.+)@(.+)\.([A-z]{2,7})$/i);
    if (results != null) {
        form.submit();
    }
    else {
        emailField.style.border = '1px solid red';
    }
})