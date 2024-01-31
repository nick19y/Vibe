const products = JSON.parse(localStorage.getItem('products')) || [];
const productsShoppingCart = JSON.parse(localStorage.getItem('productsShoppingCart')) || [];


// HTML
const productsHtml = document.querySelector(".products");
const btnTeste = document.querySelector(".teste");
function createProductElement(product){
    productsHtml.innerHTML+=`
    <div class="product">
        <img src="img/shopping.webp" alt="">
        <div class="name">${product.name}</div>
        <div class="price">R$${product.price}</div>
        <div class="update-btn"></div>
    </div>
    `

    const updateBtnJs = document.createElement('button');
    const updateBtn = document.querySelector(".update-btn");
}
products.forEach(element => {
    createProductElement(element);
});


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

products.map((item)=>{
    let productItem = document.querySelector('.models .products .product').cloneNode(true);
    document.querySelector('.productArea').append(productItem);
    productItem.querySelector('.product img').src = item.img;
    productItem.querySelector('.product .name').innerHTML = item.name;
    productItem.querySelector('.product .price').innerHTML =  `R$ ${item.price}`;

    productItem.querySelector(".product .purchase-btn").addEventListener('click', ()=>{
        productsShoppingCart.push(item);
        localStorage.setItem('productsShoppingCart', JSON.stringify(productsShoppingCart));
    })  
})

let shoppingCart = document.querySelector('.shopping-cart');

shoppingCart.addEventListener('click', ()=>{
    productsList.innerHTML="";
    productsShoppingCart.forEach(product=>{
        createShoppingCartElement(product);
    })     
})


let exitBtn = document.querySelector(".exit-btn")
exitBtn.addEventListener("click", ()=>{
    sessionStorage.removeItem("logged-user")
    window.open("login.html", "_self");
})