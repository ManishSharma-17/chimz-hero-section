let navLinks = document.querySelector('.menu-links');
let menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show")
    menuIcon.classList.toggle("active")
})