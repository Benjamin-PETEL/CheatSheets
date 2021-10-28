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


// --------------------- Style -----------------------
// H1
const h1s = document.querySelectorAll("h1");
h1s.forEach((h1) => {
    h1.classList.add("text-4xl", "font-bold", "text-center");
});

// H2
const h2s = document.querySelectorAll("h2");
h2s.forEach(h2 => {
    h2.classList.add("text-xl", "font-medium", "underline", "mt-4")
})