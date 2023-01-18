let requete = new XMLHttpRequest();

requete.onreadystatechange = function () {
    if (requete.readyState === 4) {
        let reponse = JSON.parse(requete.responseText);
        console.log(reponse);
        let div = document.createElement('div');
        reponse.results.forEach(film => {
            document.getElementById('container').innerHTML = '';
            if (film.poster_path == null) {
                film.img = "https://media.istockphoto.com/id/1263395015/fr/photo/loupe-et-point-dinterrogation-sur-fond-violet.jpg?s=612x612&w=0&k=20&c=N7Cx5lrSQpQ0twg7woYQpguOaM_my28al8GKNk4XKo4="
            }
            else {
                film.img = "https://image.tmdb.org/t/p/w500" + film.poster_path;
            }
            div.innerHTML += "<p>" + film.title + "</p><img src='" + film.img + "'>"; 
            document.getElementById('container').appendChild(div);
        });
    }
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let query = document.querySelector('#search').value;
    requete.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=625b3e1220c0fca7c7ac7f6fcca786ac&language=fr&query=' + query);
    requete.send();
});