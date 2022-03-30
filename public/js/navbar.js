// -------------------- Nav Menu ---------------------
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    menu.classList.toggle("-right-full");
    menu.classList.toggle("right-0");
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