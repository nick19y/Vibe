const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const formCreateAccount = document.querySelector(".createAccountForm");
const users = JSON.parse(localStorage.getItem("user")) || [];

formCreateAccount.addEventListener("submit", (event)=>{
    event.preventDefault();

    const user ={
        name : userName.value,
        email : userEmail.value,
        password: userPassword.value,
    }
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
    window.open("index.html", "_self");
})

