const products = JSON.parse(localStorage.getItem('products')) || [];
const productsHtml = document.querySelector(".products");

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

let exitBtn = document.querySelector(".exit-btn")
exitBtn.addEventListener("click", ()=>{
    sessionStorage.removeItem("logged-user")
    window.open("login.html", "_self");
})