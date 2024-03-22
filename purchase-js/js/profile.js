let exitBtn = document.querySelector(".exit-btn")
exitBtn.addEventListener("click", ()=>{
    console.log("olá");
    sessionStorage.removeItem("logged-user")
    window.open("index.html", "_self");
})