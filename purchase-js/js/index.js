const products = JSON.parse(localStorage.getItem('products')) || [];
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
}
products.forEach(element => {
    createProductElement(element);
});
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