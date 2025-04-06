let nav = document.querySelector('.nav');
let loader = document.getElementById('loader');
let btn = document.querySelector('.menu-btn');
let right = document.querySelector(".rightSection");
let left = document.querySelector(".leftSection")
let body = document.querySelector("body");

function toggle() {
    nav.classList.toggle('activem');
}

window.addEventListener("load", function () {
    document.body.classList.remove("loading");
    body.style.overflow = "auto"; 
    nav.style.position = "absolute";
    loader.style.display = "none";
    nav.classList.add("start-animation");
    right.classList.add("start-animation");
    left.classList.add("start-animation");
    var typed = new Typed("#element", {
        strings: [ "Video Editor","Web designer","Developer"],
        typeSpeed: 100,
        smartBackspace: true,
    });
});
