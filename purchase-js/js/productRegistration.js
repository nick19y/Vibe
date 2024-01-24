const formAddProduct = document.querySelector(".add-product-form");
const inputName = document.querySelector(".product-name");
const inputPrice = document.querySelector(".product-price");
const products = JSON.parse(localStorage.getItem('products')) || [];


let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");


function addItemImage(){
    inputFile.addEventListener("change", function(){
        const reader = new FileReader();
        // leitor de arquivo
        console.log(this.files[0]);
        reader.addEventListener("load", ()=>{
            localStorage.setItem("recent-image", reader.result);
            // resultado do leitor de arquivo atribuído como uma strig ao localStorage
        });
        reader.readAsDataURL(this.files[0])
        // leitor de arquivo "lendo" o arquivo como uma URL
        console.log(reader.result);
        return reader.result;
    })
}


// usar esse código na hora de exibir a imagem
document.addEventListener("DOMContentLoaded", ()=>{
    const recentImageDataURL = localStorage.getItem("recent-image");
    if(recentImageDataURL){
        profilePic.setAttribute("src", recentImageDataURL);
    }
})
let image = addItemImage();
console.log(image);

formAddProduct.addEventListener("submit", (evento)=>{
    evento.preventDefault();


    const product={
        name: inputName.value,
        price: inputPrice.value,
        img: image,
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();



    console.log(this.files);
    // this.files só funciona com o evento change e não o submit
})






