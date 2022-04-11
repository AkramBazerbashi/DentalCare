
const burger = document.querySelector(".burger");
const inside = document.querySelector(".inside");
const hum = document.querySelector(".hum");
const menu = document.querySelector(".menu");

burger.addEventListener('click', function () {
    burger.classList.toggle('toggled');
});

hum.addEventListener('click', function () {
    menu.classList.toggle('openMenu');
    document.body.classList.toggle('stopScroll');
});



const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');

a1.addEventListener('click', () => {
    burger.classList.toggle('toggled');
    menu.classList.toggle('openMenu');
    document.body.classList.toggle('stopScroll');
});

a2.addEventListener('click', () => {
    burger.classList.toggle('toggled');
    menu.classList.toggle('openMenu');
    document.body.classList.toggle('stopScroll');
});

a3.addEventListener('click', () => {
    burger.classList.toggle('toggled');
    menu.classList.toggle('openMenu');
    document.body.classList.toggle('stopScroll');
});

a4.addEventListener('click', () => {
    burger.classList.toggle('toggled');
    menu.classList.toggle('openMenu');
    document.body.classList.toggle('stopScroll');
});

a5.addEventListener('click', () => {
    burger.classList.toggle('toggled');
    menu.classList.toggle('openMenu');
    document.body.classList.toggle('stopScroll');
});


// const home = document.getElementById('jsHome');
// const aboutUs = document.getElementById('jsAboutUs');
// const services = document.getElementById('jsServices');
// const bookNow = document.getElementById('jsBookNow');
// const testimonials = document.getElementById('jsTestimonials');
// window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
//     if (window.scrollY <= 970) {
//         home.classList.add('showA');
//         services.classList.remove('showA');
//         aboutUs.classList.remove('showA');
//         bookNow.classList.remove('showA');
//         testimonials.classList.remove('showA');
//     }
//     else if (window.scrollY <= 2090) {
//         home.classList.remove('showA');
//         services.classList.add('showA');
//         aboutUs.classList.remove('showA');
//         bookNow.classList.remove('showA');
//         testimonials.classList.remove('showA');
//     }
//     else if (window.scrollY <= 3060) {
//         home.classList.remove('showA');
//         services.classList.remove('showA');
//         aboutUs.classList.add('showA');
//         bookNow.classList.remove('showA');
//         testimonials.classList.remove('showA');
//     }
//     else if (window.scrollY <= 4525) {
//         home.classList.remove('showA');
//         services.classList.remove('showA');
//         aboutUs.classList.remove('showA');
//         bookNow.classList.add('showA');
//         testimonials.classList.remove('showA');
//     }
//     else {
//         home.classList.remove('showA');
//         services.classList.remove('showA');
//         aboutUs.classList.remove('showA');
//         bookNow.classList.remove('showA');
//         testimonials.classList.add('showA');
//     }
// })


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 640) {
        header.classList.add('fixed');
    }
});



const arrow = document.querySelector(".arrow");

document.addEventListener('scroll', function () {
    if (window.scrollY >= 500) {
        arrow.classList.add('arrow-show');
        arrow.classList.remove('arrow-hide');
    }
    else if (window.scrollY < 500) {
        arrow.classList.add('arrow-hide');
        arrow.classList.remove('arrow-show');
    }
});





