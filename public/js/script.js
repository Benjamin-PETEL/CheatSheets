// -------------------- Nav Menu ---------------------
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    menu.classList.toggle("-right-full");
    menu.classList.toggle("right-0");

    // TODO
    // hamburger.classList.toggle("active");
}