document.querySelectorAll('.main__list-item').forEach(element => {
    element.addEventListener('click', setData);
});

function setData(e) {
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
            document.querySelector('.main__image-container-img').alt = `image of ${obj.name}`;
            document.querySelector('.main__text-title').innerHTML = obj.name;
            document.querySelector('.main__text-container').innerHTML = obj.description;
            document.querySelector('.main__footer-distance > .main__footer-value').innerHTML = obj.distance;
            document.querySelector('.main__footer-travel-time > .main__footer-value').innerHTML = obj.travel;
        })
        .catch(err => console.log(err));
}