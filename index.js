const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
    },
});