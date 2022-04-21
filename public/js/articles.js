// ------------------- Variables ---------------------
const article = document.querySelector("article");
const navSummary = document.querySelector("#navSummary");
const summary = document.querySelector("#summary");

createSummary();
applyStyle();
loadSummaryButton();

// ------------------- Functions ---------------------
function createSummary(){
    titles = getTitles();
    titles.forEach(title => {
        link = document.createElement("a");
        link.textContent = title;
        link.href = "#"+title;
        link.classList.add("text-xl", "ml-4");
        navSummary.appendChild(link);
        link.addEventListener('click', toggleSummary);
    });
}

function getTitles(){
    const h2s = article.querySelectorAll("h2");
    let titles = [];
    h2s.forEach(h2 => {
        const title = h2.textContent.split(":")[0];
        titles.push(title);
        h2.id = title;
    });
    return titles;
}

function applyStyle(){
    const h1s = article.querySelectorAll("h1");
    const h2s = article.querySelectorAll("h2");
    const h3s = article.querySelectorAll("h3");
    const pres = article.querySelectorAll("pre");
    const ps = article.querySelectorAll("p");
    const as = article.querySelectorAll("a");
    const ols = article.querySelectorAll("ol");
    const uls = article.querySelectorAll("ul");
    const imgs = article.querySelectorAll("img");
       
    // H1
    h1s.forEach((h1) => {
        h1.classList.add("text-3xl", "sm:text-5xl", "font-bold", "text-center", "mb-12");
    });

    // H2
    h2s.forEach(h2 => {
        h2.classList.add("text-xl", "sm:text-3xl", "font-medium", "underline", "mb-4", "mt-9", "scroll-mt-24")
    });

    // H3
    h3s.forEach(h3 => {
        h3.classList.add("text-l", "sm:text-2xl", "font-medium", "underline", "mb-2", "mt-6", "ml-6")
    });

    // PRE
    pres.forEach(pre => {
        pre.classList.add("ml-6", "mb-3", "p-2", "bg-grey", "text-white", "font-mono")
    });

    // P
    ps.forEach(p => {
        p.classList.add("ml-6", "mb-3")
    });

    // A
    as.forEach(a => {
        a.classList.add("underline", "text-blue-700", "hover:text-blue-900")
    });

    // OL
    ols.forEach(ol => {
        ol.classList.add("list-inside", "list-decimal", "ml-4", "mb-2");
    });

    // UL
    uls.forEach(ul => {
        ul.classList.add("list-inside", "list-disc", "ml-4", "mb-2");
    });

    // IMG
    imgs.forEach(img => {
        img.classList.add("w-52", "mx-auto", "mt-12");
    });
}

function loadSummaryButton(){
    const summaryButton = document.querySelector("#summaryButton");
    summaryButton.addEventListener('click', toggleSummary);
}

function toggleSummary(){
    summary.classList.toggle("top-20");
    summary.classList.toggle("left-8");
    summary.classList.toggle("-left-full");
    summary.classList.toggle("top-full");
}