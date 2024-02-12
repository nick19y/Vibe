const formAddProduct = document.querySelector(".add-product-form");
const inputName = document.querySelector(".product-name");
const inputPrice = document.querySelector(".product-price");
const inputCategory = document.querySelector(".product-category");
const products = JSON.parse(localStorage.getItem('products')) || [];
const tShirt = JSON.parse(localStorage.getItem('products')) || [];
const pants = JSON.parse(localStorage.getItem('products')) || [];
const underwear = JSON.parse(localStorage.getItem('products')) || [];
const accessories = JSON.parse(localStorage.getItem('products')) || [];
const shoes = JSON.parse(localStorage.getItem('products')) || [];


let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");


inputFile.addEventListener("change", function(){
    const reader = new FileReader();
    // leitor de arquivo
    console.log(this.files[0]);
    reader.addEventListener("load", ()=>{
        localStorage.setItem("recent-image", reader.result);
        // resultado do leitor de arquivo atribuído como uma strig ao localStorage
        console.log(reader.result);
    });
    reader.readAsDataURL(this.files[0])
    // leitor de arquivo "lendo" o arquivo como uma URL
})


// usar esse código na hora de exibir a imagem
document.addEventListener("DOMContentLoaded", ()=>{
    const recentImageDataURL = localStorage.getItem("recent-image");
    if(recentImageDataURL){
        profilePic.setAttribute("src", recentImageDataURL);
    }
})

formAddProduct.addEventListener("submit", (event)=>{
    event.preventDefault();

    const product={
        name: inputName.value,
        price: inputPrice.value,
        category: inputCategory.value,
        img: localStorage.getItem("recent-image"),
    }
    switch (product.category) {
        case "camiseta" || "CAMISETA" || "Camiseta" || "camisa" || "CAMISA", "Camisa":
            tShirt.push(product);
            localStorage.setItem('tShirt', JSON.stringify(tShirt));
            break;
        case "calça" || "CALÇA" || "Calça":
            pants.push(product);
            localStorage.setItem('pants', JSON.stringify(pants));
            break;
        case "sapato" || "tênis" || "SAPATO" || "TÊNIS" || "Sapato" || "Tênis":
            shoes.push(product);
            localStorage.setItem('shoes', JSON.stringify(shoes));
            break;
        case "acessórios" || "acessório" || "ACESSÓRIOS" || "ACESSÓRIO" || "Acessórios" || "Acessório":
            accessories.push(product);
            localStorage.setItem('accessories', JSON.stringify(accessories));
            break;
        case "underwear" || "UNDERWEAR" || "Underwear":
            underwear.push(product);
            localStorage.setItem('underwear', JSON.stringify(underwear));
            break;
        default:
            console.log("Categoria inválida");
          break;
      }
      
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
    console.log(this.files);
    // this.files só funciona com o evento change e não o submit

    localStorage.removeItem("recent-image");
})