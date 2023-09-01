import './assets/style.css';
import home from './home';
import menu from './menu';
import contact from './contact';

const mainContent = document.querySelector('#content');
mainContent.appendChild(home());

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
    mainContent.appendChild(home());
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
    mainContent.appendChild(menu());
});

const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
    mainContent.appendChild(contact());
});