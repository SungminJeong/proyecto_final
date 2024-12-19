import './Header.css';
import data from '../../data';
import Nav from '../Nav/Nav';

const {header} = data;

const Header = () => {
	return `
	<section class="logo">
		<section class="logo-title">
			<h1><a href="/">${header.header_title}</a></h1>
		</section>
		<section id="hamburger">
        	<img src="${header.header_hamburger}" alt="hamburger"/>
        </section>
    </section>
	${Nav()}
    `
};

export default Header;