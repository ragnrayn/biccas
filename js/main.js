// Functionality for toogle mobile menu
let menu = document.querySelector(".header-menu");
let mobileBtn = document.querySelector(".mobile-menu");

mobileBtn.addEventListener("click", () => {
    menu.classList.toggle("mobile-toggle");
})
