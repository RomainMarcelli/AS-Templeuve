// Initialisation de Swiper
var swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true, // Pour créer une boucle infinie
    slidesPerView: 3, // Nombre de diapositives visibles à la fois
    spaceBetween: 10, // Espace entre les diapositives
    centeredSlides: true, // Pour centrer la diapositive active
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
