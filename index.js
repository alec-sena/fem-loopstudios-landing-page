const navHamburger = document.getElementById("nav-hamburger");
const navClose = document.getElementById("nav-close");
const landing = document.getElementById("landing");
const landingNavLinks = document.getElementById("landing__nav-links");

const toggleNavMenu = () => {
    navHamburger.classList.toggle("display-none");
    navClose.classList.toggle("display-none");
    landing.classList.toggle("display-none");
    landingNavLinks.classList.toggle("display-none");
}

navHamburger.addEventListener("click", toggleNavMenu);
navClose.addEventListener("click", toggleNavMenu);