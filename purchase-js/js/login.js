const formLogin = document.querySelector(".form-login");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const btnTeste = document.querySelector(".btn");
const users = JSON.parse(localStorage.getItem("user"));

// usar session storage
console.log(users)
users.forEach((user) =>console.log(user))
function checkUser(){
    userEmailLogin = userEmail.value;
    userPasswordLogin = userPassword.value;
    users.forEach((user) =>{
        if(userEmailLogin == user.email && userPasswordLogin == user.password){
            window.open('index.html', '_self');
        }
    })
}

btnTeste.addEventListener("click", ()=>{
    checkUser();
    // window.open('index.html', '_self');
})