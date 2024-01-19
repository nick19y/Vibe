const formAddProduct = document.querySelector(".add-product-form");
const inputName = document.querySelector(".product-name");
const inputPrice = document.querySelector(".product-price");
const products = JSON.parse(localStorage.getItem('products')) || [];


formAddProduct.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const product={
        name: inputName.value,
        price: inputPrice.value
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
})

