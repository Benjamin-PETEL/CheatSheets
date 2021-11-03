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
});

// H3
const h3s = document.querySelectorAll("h3");
h3s.forEach(h3 => {
    h3.classList.add("text-l", "font-medium", "underline", "mt-4")
});

// PRE
const pres = document.querySelectorAll("pre");
pres.forEach(pre => {
    pre.classList.add("m-3", "p-3", "bg-yellow-300", "font-mono")
});