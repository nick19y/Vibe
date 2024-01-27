const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const formCreateAccount = document.querySelector(".createAccountForm");

formCreateAccount.addEventListener("submit", (event)=>{
    event.preventDefault();

    const user ={
        name : userName.value,
        email : userEmail.value,
        password: userPassword.value,
    }
    sessionStorage.setItem("logged-user", JSON.stringify(user));
})

