const formindex = document.querySelector(".form-index");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const btnTeste = document.querySelector(".btn");
const users = JSON.parse(localStorage.getItem("user"));

// usar session storage
console.log(users)
users.forEach((user) =>console.log(user))
function checkUser(){
    userEmailindex = userEmail.value;
    userPasswordindex = userPassword.value;
    users.forEach((user) =>{
        if(userEmailindex == user.email && userPasswordindex == user.password){
            sessionStorage.setItem("logged-user", JSON.stringify(user));
            window.open('main.html', '_self');
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
    // window.open('main.html', '_self');
})