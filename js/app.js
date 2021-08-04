const menu = () => {
    let menuButton = document.querySelector(".hamburger-menu img");
    let menuPage = document.querySelector(".nav-box-items");
    let exceptHeader = document.querySelectorAll("section, footer");
    menuButton.addEventListener("click", function() {
        active = menuPage.classList.toggle("active");
        if (active) {
            menuButton.src = "images/icon-close.svg";
            exceptHeader.forEach( (elements) => {
                elements.style.display = "none";
            })
        }
        else {
            menuButton.src = "images/icon-hamburger.svg";
            exceptHeader.forEach( (elements) => {
                elements.style.display = "block";
            })            
        }
        
        
    } ) 
    

}

menu();