import './Nav.css';
import Cart from '../Cart/Cart';



const Nav = () => {
    return `
      <ul class="nav_menu">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      
      <nav class="nav_area">
      <ul class="modal">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <ul class="nav_icons">
        <li>
          <a href="/shop">
            <img src="https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/Vector2.png?raw=true" alt="hahah">
          </a>
        </li>
        <li>
          <a href="/favorite">
            <img class="favorite" src="https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/akar-icons_heart.png?raw=true" alt="hahah">
          </a>
        </li>
        <li>
          
            <img class="cart" src="https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/Vector3.png?raw=true" alt="haha">
          
        </li>
      </ul>
    </nav>

      
      <section class="cart_modal"></section>
    `
}

export const iconListener = () => {
  document.querySelector('.cart').addEventListener('click', () => {
    document.querySelector('.cart_modal').classList.toggle('active');
    Cart();
  });

  document.querySelector('#hamburger').addEventListener('click', () => {
    const ul = document.querySelector('.modal');
		ul.classList.toggle('hamActive');
  })
}



export default Nav;
