import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import { router, navListeners } from "./utils/router";
import './style.css'
import { iconListener } from './components/Nav/Nav';


document.querySelector('#app').innerHTML = `
<header></header>
<main></main>
<footer></footer>
`;

const init = () => {
    const header = document.querySelector('header');
    header.innerHTML = `${Header()}`
    const footer = document.querySelector('footer');
    footer.innerHTML = `${Footer()}`
}

init();

router();
navListeners();
iconListener();
