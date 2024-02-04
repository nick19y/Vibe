const productsShoppingCart = JSON.parse(localStorage.getItem('productsShoppingCart')) || [];

let productsList = document.querySelector(".item-list-li");
function createShoppingCartElement(product){
    productsList.innerHTML+=
        `
        <li class="shopping-cart-item">
                    <img src="${product.img}" alt="" class="img-shopping-cart">
                    <div class="name-price">
                        <div class="shopping-name">${product.name}</div>
                        <div class="shopping-price">R$${product.price}</div>
                    </div>
                    <div class="amount-close-btn">
                        <img src="img/close-btn (2).png" alt="" class="close-btn-item-list">
                        <div class="amount-btns">
                            <button class="remove-amount-btn alter-amount-btn">
                                <div class="remove-amount-btn-content">-</div>
                            </button>
                            <h2>1</h2>
                            <button class="add-amount-btn alter-amount-btn">+</button>
                        </div>
                    </div>
                </li>
        `
}
let shoppingCart = document.querySelector('.shopping-cart');

shoppingCart.addEventListener('click', ()=>{
    productsList.innerHTML="";
    productsShoppingCart.forEach(product=>{
        createShoppingCartElement(product);
    })     
})

const sendOrderBtn = document.querySelector(".send-order");
sendOrderBtn.addEventListener("click", ()=>{
    window.open("order.html", "_self");
})