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
    location.reload();
})

let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.addEventListener("change", function(){
    const reader = new FileReader();

    console.log(this.files);
    reader.addEventListener("load", ()=>{
        console.log(reader.result);
        localStorage.setItem("recent-image", reader.result);
    })

    reader.readAsDataURL(this.files[0])
})
document.addEventListener("DOMContentLoaded", ()=>{
    const recentImageDataURL = localStorage.getItem("recent-image");
    if(recentImageDataURL){
        profilePic.setAttribute("src", recentImageDataURL);
    }
    console.log("DOM fully loaded and parsed");
    
})