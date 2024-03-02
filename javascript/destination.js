document.querySelectorAll('.main__list-item').forEach(element => {
    element.addEventListener('click', getData);
});

function getData(e) {
    const image = document.querySelector('.main__image');
    const name = document.querySelector('.main__text-h1');
    const description = document.querySelector('.main__text-container');

    fetch('../assets/data.json')
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.destinations[e.target.value];
        })
        .then(obj => {
            console.log(obj);
            document.querySelector('.main__image-container-img').src = obj.images.webp;
            document.querySelector('.main__text-title').innerHTML = obj.name;
            document.querySelector('.main__text-container').innerHTML = obj.description;
        })
        .catch(err => console.log(err));
}