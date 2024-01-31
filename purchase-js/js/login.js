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
            sessionStorage.setItem("logged-user", JSON.stringify(user));
            window.open('index.html', '_self');
            console.log(user);
        }
        else{
            document.write("Senha incorreta");
            return;
            // FAZER TRATAMENTO COM ID 
        }
    })
}

btnTeste.addEventListener("click", ()=>{
    checkUser();
    // window.open('index.html', '_self');
})