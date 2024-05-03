let loggedUser = JSON.parse(sessionStorage.getItem("logged-user"));


let userNameText = document.querySelector(".user-name-text");
userNameText.innerText=loggedUser.name;
let exitBtn = document.querySelector(".exit-btn")
exitBtn.addEventListener("click", ()=>{
    console.log("olá");
    sessionStorage.removeItem("logged-user")
    window.open("index.html", "_self");
})