import './PrintModal.css';



const PrintModal = (product) => `
    <div id="modal_container">
        <div class="modal_upper">
            <img src="${product.imgage}" class="modal_img" alt="${product.name}"/>
            <div class="info_box">
                <p class="productName">${product.name}</p>
                <p>${product.description}</p>
                
                <p>size: ${product.dimension}</p>
                <h2> € ${product.price}</h2>
                <div class="price_favorite">
                    <img class="cart_favorite cartIcon" src="https://github.com/SungminJeong/entrega-Proyecto-1/blob/main/entrega_Proyecto1/assets/Vector3.png?raw=true" alt="favorite"/>
                </div>
                <p>${product.longdesc}</p>
            </div>
        </div>
        <div class="btn_area">
            <button class="close_btn">CLOSE</button>
        </div>
    </div>
`
export default PrintModal;