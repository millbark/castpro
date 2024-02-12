
var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 17,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
});

