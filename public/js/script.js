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

// ------------------- Dark-Mode ---------------------
const LIGHT = 'light';
const DARK = 'dark';
const dark_button = document.querySelector("#dark_button");

initDarkLight();
dark_button.addEventListener("click", toggleDarkLight);

function initDarkLight(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) localStorage.theme = DARK;
    else localStorage.theme = LIGHT;
    toggleDarkLightIcon();
    toggleDarkLightTheme();
}

function toggleDarkLight(){
    toggleDarkLightLocalStorage();
    toggleDarkLightIcon();
    toggleDarkLightTheme();
}

function toggleDarkLightLocalStorage(){
    if (localStorage.theme===LIGHT) localStorage.theme=DARK;
    else localStorage.theme=LIGHT;
}

function toggleDarkLightIcon(){
    if (localStorage.theme===LIGHT) dark_button.src="/img/icon_sun.svg";
    else dark_button.src="/img/icon_moon.svg"
}

function toggleDarkLightTheme(){
    if (localStorage.theme===LIGHT) document.documentElement.classList.remove(DARK);
    else document.documentElement.classList.add(DARK);
}

// --------------------- Style -----------------------

const main = document.querySelector("main");

// H1
const h1s = main.querySelectorAll("h1");
h1s.forEach((h1) => {
    h1.classList.add("text-4xl", "font-bold", "text-dark", "dark:text-white", "text-center");
});

// H2
const h2s = main.querySelectorAll("h2");
h2s.forEach(h2 => {
    h2.classList.add("text-xl", "font-medium", "text-dark", "dark:text-white", "underline", "my-4")
});

// H3
const h3s = main.querySelectorAll("h3");
h3s.forEach(h3 => {
    h3.classList.add("text-l", "font-medium", "text-dark", "dark:text-white", "underline", "my-4")
});

// PRE
const pres = main.querySelectorAll("pre");
pres.forEach(pre => {
    pre.classList.add("m-3", "p-3", "bg-dark", "text-white", "font-mono")
});

// A
const as = main.querySelectorAll("a");
as.forEach(a => {
    a.classList.add("underline", "text-blue-700", "hover:text-blue-900")
});

// OL
const ols = main.querySelectorAll("ol");
ols.forEach(ol => {
    ol.classList.add("list-inside", "list-decimal", "ml-4");
});

// UL
const uls = main.querySelectorAll("ul");
uls.forEach(ul => {
    ul.classList.add("list-inside", "list-disc", "ml-4");
});

// IMG
const imgs = main.querySelectorAll("img");
imgs.forEach(img => {
    img.classList.add("w-52", "mx-auto", "mt-12");
});