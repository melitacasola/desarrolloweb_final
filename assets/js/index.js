const navToggle = document.querySelector(".menu__nav-toggle")
const navMenu = document.querySelector(".menu__nav")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu__nav-visible");
})