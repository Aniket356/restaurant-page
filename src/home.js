import restaurantImage from './restaurant-image.jpg'

function renderHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const container = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Savory Heaven";
    container.appendChild(heading);

    const p = document.createElement('p');
    p.textContent = "Savory Haven: Where Culinary Artistry Meets Heartfelt Hospitality!";
    container.appendChild(p);

    home.appendChild(container);

    const image = document.createElement('img');
    image.src = restaurantImage;
    home.appendChild(image);

    return home;
}

export default renderHome;