import './Cart.css';
import data from '../../data';

const { cartItems, products } = data;

const template = () => `
<div class="cartTitle">
    <h1>Shopping Cart</h1>
    <button id="closeModalBtn">X</button>
</div>

<ul class="cartLists">
    
</ul>

<div class="cartBottom">
    <p>Total: </p>
    <p class="ShowPrice"></p>
    
</div>
`;

const Cart  = () => {
    document.querySelector('.cart_modal').innerHTML = template();
    const cartItemsInJson = JSON.parse(localStorage.getItem("cartList"));
    const ul = document.querySelector('.cartLists');
    let count = 0;
    for(const item of cartItemsInJson){
        let li = document.createElement('li');
        li.classList.add("cartList");
        li.innerHTML = `
        <img src="${item.imgage} alt="${item.name}">
        <div class="cart_info">
            <p>${item.name}</p>
            <p>${item.price} Euro</p>
        </div>
        `
        count += item.price;
        document.querySelector('.ShowPrice').innerText = count + " Euro";
        const delBtn = document.createElement('button');
        
        delBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        `;
        delBtn.classList.add("trashCan");
        
        delBtn.addEventListener('click', (e) => {
            const actualPosition = cartItems.indexOf(item);
            cartItems.splice(actualPosition, 1);
            li.remove()
            count-= item.price;
            document.querySelector('.ShowPrice').innerText = count + " Euro";
            localStorage.setItem("cartList", JSON.stringify(cartItems));
        })
        li.appendChild(delBtn);
        ul.appendChild(li);
    }
    document.querySelector('#closeModalBtn').addEventListener('click', () => {
        document.querySelector('.cart_modal').classList.toggle('active');
        ul.innerHTML = "";
    });
    console.log(count)
};


export default Cart;