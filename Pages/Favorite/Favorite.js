import './Favorite.css';
import data from '../../data';
import PrintModal from '../../components/PrintModal/PrintModal';

const { products } = data;
const { items, cartItems } = data;

const template = () => `
    <section class="ourproducts">
    <section>
        <article class="background">
            <h1>Favorite</h1>
            <p><span>Home > </span> Favorite</p>
        </article>

        <div class="nav-bar">
            <p class="showing">showing <span id="span1"></span></p>
            <form action="">
            <input type="text" id="searchInput" placeholder="Buscar"/>
            <button class="search-btn">Buscar</button>
        </form>
            <article class="filtro">
            
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                </svg>
            </article>
        </div>
    </section>

    <main class="prud_container">
        <div class="side-bar">
            <h2 class="isProduct"></h2>
            <ul class="busca-list"></ul>
        </div>
        <ul class="produc_list"></ul>
        <div class="modal_page"></div>
    </main>
	</section>
`

const Favorite = () => {
    const items = JSON.parse(localStorage.getItem("favorlist"));
    document.querySelector('main').innerHTML = template();

    function paintingPage(items){
        const ul = document.querySelector('.produc_list');
        console.log(items.length)
        if(items.length === 0){
            document.querySelector('.isProduct').innerHTML ="Your wishlist is empty"
        }else{
            document.querySelector('.isProduct').innerHTML = "Your wishlist";
        }
        items.map((product) => {
            let li = document.createElement('li');
            if(product.isExprice){
            li.innerHTML = `
            <img class="produc-img" src=${product.imgage} alt=${product.alt}>
            <article>
                <h4 class="nameofpro">${product.name}</h4>
                <p class="description">${product.description}</p>
                <p class="price">${product.price} euro <span class="exprice">${product.exprice} euro</span></p>
                <p><span class="selling">selling for</span> ${product.seller}</p>
            </article>
            `;
            }else{
                li.innerHTML = `
            <img class="produc-img" src=${product.imgage} alt=${product.alt}>
            <article>
                <h4 class="nameofpro">${product.name}</h4>
                <p class="description">${product.description}</p>
                <p class="price">${product.price} euro</p>
                <p><span class="selling">selling for</span> ${product.seller}</p>
            </article>
            `;
            }
            
            li.addEventListener('click', () => {
                const modal = document.querySelector('.modal_page');
                console.log(product)
                modal.innerHTML = "";
                modal.classList.toggle('active');
                modal.innerHTML = PrintModal(product);
                
                const container = document.querySelector('.price_favorite');
                const heartIcon = document.createElement('img');
                heartIcon.classList.add('cart_favorite');
                heartIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScICnQ2AGiUpeNn0YfCdiOpAEZo7S5ZTzTRg&s";
                container.appendChild(heartIcon);

                heartIcon.addEventListener('click', (e) => {
                    product.favorite = !product.favorite;
                    heartIcon.src = "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/akar-icons_heart.png?raw=true";
                        const actualPosition = items.indexOf(product);
                        items.splice(actualPosition, 1);
                        localStorage.setItem("favorlist", JSON.stringify(items));
                        li.remove();
                });

                const cartIcon = document.querySelector('.cartIcon');
                cartIcon.addEventListener('click', () => {
                    console.log("click!")
                    product.cart = !product.cart;
                        if(product.cart){
                            alert("Añadido")
                            cartItems.push(product);
                            localStorage.setItem("cartList", JSON.stringify(cartItems));
                            const actualPosition = cartItems.indexOf(product);
                            console.log(cartItems)
                        }else{
                            alert("Borrado")
                            const actualPosition = cartItems.indexOf(product);
                            cartItems.splice(actualPosition, 1);
                            localStorage.setItem("cartList", JSON.stringify(cartItems));
                            console.log(cartItems)
                        }
                })
                
                const closeBtn = document.querySelector('.close_btn');
                closeBtn.addEventListener('click', () => {
                    location.reload();
                    paintingPage(items);
                    modal.classList.remove('active');
                });
            });
            ul.appendChild(li);
        });
        
        const span = document.querySelector('#span1');
        span.innerHTML = `${items.length} results`;
        listener();
    };
    
    paintingPage(items);
    
    function listener () {
        const searchInput = document.querySelector('#searchInput');
        searchInput.addEventListener("input", () => {
            const filteredItems = items.filter(
                (product) =>
                    product.category.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchInput.value.toLowerCase())
                );
            if(filteredItems.length){
                const busca_ul = document.querySelector('.busca-list');
                document.querySelector('.produc_list').innerHTML = "";
                document.querySelector('.busca-list').innerHTML = ""
                
                paintingPage(filteredItems)
            }
        })
    }
}


export default Favorite;