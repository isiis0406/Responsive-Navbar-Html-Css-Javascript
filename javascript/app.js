let hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', function(e) {
    const menu = document.querySelector("nav > ul");
    menu.classList.toggle("nav-slide")
    hamburger.classList.toggle("cross")
}
)
