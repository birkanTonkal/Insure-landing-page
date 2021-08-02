const menu = () => {
    let menuButton = document.querySelector(".hamburger-menu img");
    let menuPage = document.querySelector(".nav-box-items");
    menuButton.addEventListener("click", function() {
        menuPage.classList.toggle("active");
        console.log(menuPage);
    } ) 

}

menu();