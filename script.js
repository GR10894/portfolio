let nav = document.querySelector('.nav');
let btn = document.querySelector('.menu-btn');
var typed = new Typed("#element", {
    strings: ["Developer", "Web designer", "Video Editor"],
    typeSpeed: 100,
    smartBackspace: true,
});


function toggle () {
    nav.classList.toggle('activem');
}
