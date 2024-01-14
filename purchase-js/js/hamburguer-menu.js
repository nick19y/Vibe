class ShoppingCartMenu{
    constructor(shoppingCartMenu, navListMenu, navLinksMenu, removeBtnMenu){
        this.shoppingCartMenu = document.querySelector(shoppingCartMenu);
        this.navListMenu = document.querySelector(navListMenu);
        this.navLinksMenu = document.querySelectorAll(navLinksMenu);
        this.availableClass = "available";
        this.removeBtnMenuShoppingCart = document.querySelector(removeBtnMenu);
        this.handleClickShoppingCart = this.handleClickShoppingCart.bind(this);
    }
    handleClickShoppingCart(){
        if(this.navListMenu.classList.contains("available")){
            this.navListMenu.classList.remove("available");
        } else{
            this.navListMenu.classList.add("available");
        }
    }
    addClickEventShoppingCart(){
        this.shoppingCartMenu.addEventListener("click", this.handleClickShoppingCart);
        this.removeBtnMenuShoppingCart.addEventListener("click", this.handleClickShoppingCart);
    }
    initShoppingCart(){
        if(this.shoppingCartMenu){
            this.addClickEventShoppingCart();
        }
        return this;
    }
}
const shoppingCartMenu = new ShoppingCartMenu(
    ".shopping-cart",
    ".shopping-list",
    ".shopping-list-ul li",
    ".close-btn-shopping-cart",
)
shoppingCartMenu.initShoppingCart();

class HamburguerMenu{
    constructor(hamburguerMenu, navList, navLinks, removeBtn){
        this.hamburguerMenu = document.querySelector(hamburguerMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.removeBtn = document.querySelector(removeBtn);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.navList.classList.contains("active")){
            this.navList.classList.remove("active");
        } else{
            this.navList.classList.add(this.activeClass);
        }
    }
    addClickEvent(){
        this.hamburguerMenu.addEventListener("click", this.handleClick);
        this.removeBtn.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.hamburguerMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const hamburguerMenu = new HamburguerMenu(
    ".menu",
    ".nav-list",
    ".nav-list li",
    ".close-btn-nav-list",
)

hamburguerMenu.init();