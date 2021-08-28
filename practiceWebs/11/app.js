const searchIcon = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');
const loginIcon = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const closeForm = document.querySelector('#form-close');
const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () => {
    searchIcon.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

};

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchIcon.addEventListener('click', () => {
    searchIcon.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

loginIcon.addEventListener('click', () => {
    loginForm.classList.add('active');
});

closeForm.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        const src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
