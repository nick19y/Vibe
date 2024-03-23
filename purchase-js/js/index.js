const formindex = document.querySelector(".form-index");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const btn = document.querySelector(".btn");
const users = JSON.parse(localStorage.getItem("user"));

// usar session storage
console.log(users)
users.forEach((user) =>console.log(user))
function checkUser(){
    let verify;
    userEmailindex = userEmail.value;
    userPasswordindex = userPassword.value;
    users.forEach((user) =>{
        if(userEmailindex == user.email && userPasswordindex == user.password){
            sessionStorage.setItem("logged-user", JSON.stringify(user));
            console.log(user);
            verify=true;
            return verify;
        }
        else{
            verify = false;
            return verify; 
        }
    })
    console.log(verify);
    console.log("fim")
    if(verify){
        window.open('main.html', '_self');
    } else{
        document.write("Senha incorreta");
        console.log(verify);
    }
}

btn.addEventListener("click", ()=>{
    checkUser();
    // window.open('main.html', '_self');
})