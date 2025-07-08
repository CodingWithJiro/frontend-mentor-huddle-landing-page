function showIconLight() {
    const iconLight = document.querySelector(".theme__icon--light");
    iconLight.classList.remove("hidden");
}

function hideIconLight() {
    const iconLight = document.querySelector(".theme__icon--light");
    iconLight.classList.add("hidden");
}

function showIconDark() {
    const iconDark = document.querySelector(".theme__icon--dark");
    iconDark.classList.remove("hidden");
}

function hideIconDark() {
    const iconDark = document.querySelector(".theme__icon--dark");
    iconDark.classList.add("hidden");
}

function addActiveTheme() {
    const button = document.querySelector(".theme__button");
    button.classList.add("active");
}

function removeActiveTheme() {
    const button = document.querySelector(".theme__button");
    button.classList.remove("active");
}

function addDarkTheme() {
    const html = document.querySelector("html");
    html.classList.add("dark");
}

function toggleDarkTheme() {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
}

function savedTheme() {
    return localStorage.getItem("theme");
}

function prefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function changeBackgroundImageToDark() {
    const bgDesktop = document.querySelector(".background__image--desktop");
    const bgMobile = document.querySelector(".background__image");
    bgDesktop.setAttribute("srcset", "./assets/img/bg-desktop-dark_1318x800.svg");
    bgMobile.setAttribute("src", "./assets/img/bg-mobile-dark_375x373.svg");
    bgDesktop.classList.add("shadow");
    bgMobile.classList.add("shadow");
}

function changeBackgroundImageToLight() {
    const bgDesktop = document.querySelector(".background__image--desktop");
    const bgMobile = document.querySelector(".background__image");
    bgDesktop.setAttribute("srcset", "./assets/img/bg-desktop_1318x800.svg");
    bgMobile.setAttribute("src", "./assets/img/bg-mobile_375x373.svg");
    bgDesktop.classList.remove("shadow");
    bgMobile.classList.remove("shadow");
}

preLoadDarkTheme();
function preLoadDarkTheme() {
    if (savedTheme() === "dark" || (savedTheme() === null && prefersDark() ) ) {
        addDarkTheme();
        addActiveTheme();
        hideIconLight();
        showIconDark();
        changeBackgroundImageToDark();
    }
}

function isDarkTheme() {
    const html = document.querySelector("html");
    return html.classList.contains("dark");
}

function savePreferredTheme() {
    localStorage.setItem("theme", isDarkTheme() ? "dark" : "light");
}

toggleTheme();
function toggleTheme() {
    const button = document.querySelector(".theme__button");

    button.addEventListener("click", () =>  {
        toggleDarkTheme();

        if ( isDarkTheme() ) {
            addActiveTheme();
            hideIconLight();
            showIconDark();
            changeBackgroundImageToDark();
        } else {
            removeActiveTheme();
            showIconLight();
            hideIconDark();
            changeBackgroundImageToLight();
        }

        savePreferredTheme();
    });
}
