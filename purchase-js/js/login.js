const formLogin = document.querySelector(".form-login");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

function checkUser(){
    const userName = localStorage.getItem("logged-user");
    if(userName){
        return 
    }
}
formLogin.addEventListener("submit", ()=>{
    window.open("index.html");
})