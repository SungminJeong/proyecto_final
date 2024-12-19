import './Shop.css';
import data from '../../data';
import PrintModal from '../../components/PrintModal/PrintModal';
import Cart from '../../components/Cart/Cart';

const { products } = data;
const { items, cartItems } = data;

const template = () => `
    <section class="ourproducts">
    <section>
        <article class="background">
            <h1>shop</h1>
            <p><span>Home > </span> Shop</p>
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
            <h2>All our products</h2>
            <ul class="busca-list"></ul>
        </div>
        <ul class="produc_list"></ul>
        <div class="modal_page"></div>
    </main>
	</section>
`

const Shop = () => {
    document.querySelector('main').innerHTML = template();
    function paintingPage(products){
        const ul = document.querySelector('.produc_list');
        const busca_ul = document.querySelector('.busca-list');
        const lengthOfarr = products.length;

        document.querySelector('.filtro').addEventListener('click', () => {
            document.querySelector('.produc_list').classList.toggle('smaller');
        })
    
        products.map((product) => {
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
                if(!product.favorite){
                    const container = document.querySelector('.price_favorite');
                    const heartIcon = document.createElement('img');
                    heartIcon.classList.add('cart_favorite');
                    heartIcon.src = "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/akar-icons_heart.png?raw=true";
                    container.appendChild(heartIcon);

                    heartIcon.addEventListener('click', (e) => {
                        product.favorite = !product.favorite;
                        if(product.favorite){
                            heartIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScICnQ2AGiUpeNn0YfCdiOpAEZo7S5ZTzTRg&s";
                            items.push(product);
                            localStorage.setItem("favorlist", JSON.stringify(items));
                            const actualPosition = items.indexOf(product);
                            console.log(actualPosition)
                        }else{
                            heartIcon.src = "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/akar-icons_heart.png?raw=true";
                            const actualPosition = items.indexOf(product);
                            items.splice(actualPosition, 1);
                            localStorage.setItem("favorlist", JSON.stringify(items));
                        }
                        console.log(product.favorite)
                        console.log(items)
                    });
                }else{
                    const container = document.querySelector('.price_favorite');
                    const heartIcon = document.createElement('img');
                    heartIcon.classList.add('cart_favorite');
                    heartIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScICnQ2AGiUpeNn0YfCdiOpAEZo7S5ZTzTRg&s";
                    container.appendChild(heartIcon);
                    
                    heartIcon.addEventListener('click', (e) => {
                        product.favorite = !product.favorite;
                        if(product.favorite){
                            heartIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScICnQ2AGiUpeNn0YfCdiOpAEZo7S5ZTzTRg&s";
                            items.push(product);
                            localStorage.setItem("favorlist", JSON.stringify(items));
                            const actualPosition = items.indexOf(product);
                            console.log(actualPosition)
                        }else{
                            heartIcon.src = "https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/akar-icons_heart.png?raw=true";
                            const actualPosition = items.indexOf(product);
                            items.splice(actualPosition, 1);
                            localStorage.setItem("favorlist", JSON.stringify(items));
                        }
                        console.log(product.favorite)
                        console.log(items)
                    });
                }
                
                const cartIcon = document.querySelector('.cartIcon');
                cartIcon.addEventListener('click', () => {
                    console.log("CartIcon connected!")
                    product.cart = !product.cart;
                        if(product.cart){
                            alert("Añadido")
                            cartItems.push(product);
                            localStorage.setItem("cartList", JSON.stringify(cartItems));
                            const actualPosition = cartItems.indexOf(product);
                            //Cart();
                            console.log(cartItems)
                        }else{
                            alert("Borrado")
                            const actualPosition = cartItems.indexOf(product);
                            cartItems.splice(actualPosition, 1);
                            localStorage.setItem("cartList", JSON.stringify(cartItems));
                            console.log(cartItems)
                        }
                })
                //////////////////////////////////////////////////////
                const closeBtn = document.querySelector('.close_btn');
                closeBtn.addEventListener('click', () => {
                    modal.classList.remove('active')
                });
        })
            ul.appendChild(li);
        });
        busca_ul.innerHTML = `
            <li id="pordefecto">All (${lengthOfarr})</li>
            `
        function sideBar(products){            
            let result = products.reduce((acc, item) =>{
                acc[item.category] = (acc[item.category] || 0) + 1;
                return acc
            },{});

            for(let key in result){
                let sideBarLi = document.createElement('li');
                sideBarLi.innerHTML = `
                ${key} (${result[key]})
                `;
                sideBarLi.classList.add('sideBarLi');
                busca_ul.appendChild(sideBarLi);
                
                sideBarLi.addEventListener('click', (e) => {
                    console.log(key)
                    const clickedItems = products.filter(
                        (product) => product.category.includes(key)
                        );
                    if(clickedItems.length){
                        console.log(e.target)
                        const busca_ul = document.querySelector('.busca-list');
                        document.querySelector('.produc_list').innerHTML = "";
                        document.querySelector('.busca-list').innerHTML = "";
                        paintingPage(clickedItems)
                        const pordefecto = document.querySelector('#pordefecto')
                        pordefecto.innerHTML = `All(${lengthOfarr})`
                        pordefecto.addEventListener('click', () => {
                            document.querySelector('.produc_list').innerHTML = "";
                            paintingPage(products)
                        })
                    }
                })
            }
        };

        sideBar(products);

        const span = document.querySelector('#span1');
        span.innerHTML = `${products.length} results`
        
        
        listener();
    };
    paintingPage(products);
    function listener () {
        const searchInput = document.querySelector('#searchInput');
        searchInput.addEventListener("input", () => {
            const filteredItems = products.filter(
                (product) =>
                    product.category.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchInput.value.toLowerCase())
                );
            if(filteredItems.length){
                document.querySelector('.produc_list').innerHTML = "";
                document.querySelector('.busca-list').innerHTML = ""
                
                paintingPage(filteredItems)
            }
        });
    };

};

export default Shop;