const formAddProduct = document.querySelector(".add-product-form");
const inputName = document.querySelector(".product-name");
const inputPrice = document.querySelector(".product-price");
const products = JSON.parse(localStorage.getItem('products')) || [];
// if jsonParse returns null, an empty array will be made




formAddProduct.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const product={
        name: inputName.value,
        price: inputPrice.value
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
})

