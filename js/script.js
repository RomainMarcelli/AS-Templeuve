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
    autoplay: {
        delay: 3000, // Temps en millisecondes entre chaque transition (par exemple, 3000 pour 3 secondes)
        disableOnInteraction: false, // Permet de continuer l'autoplay même si l'utilisateur interagit avec la slide
    },
});

// function showPage(equipes) {
//     // Masquer toutes les sections
//     const sections = document.querySelectorAll('main div');
//     sections.forEach(section => {
//         section.style.display = 'none';
//     });

//     // Afficher la section correspondante à la equipes
//     const selectedSection = document.getElementById(equipes);
//     if (selectedSection) {
//         selectedSection.style.display = 'block';

//         // Si la section est 'equipes', afficher également les divs à l'intérieur
//         if (equipes === 'equipes') {
//             const equipeDivs = selectedSection.querySelectorAll('.txt_equipe');
//             equipeDivs.forEach(div => {
//                 div.style.display = 'flex'; // ou 'block' selon votre mise en page
//             });
//         }
//     }
// }
// showPage('equipe');

// ...

// MENU BURGER

// const toggleMenu = () => {
//     const navigation = document.querySelector("#navbar");
//     const burgerMenu = document.querySelector(".menu_burger a");
//     const svgElement = burgerMenu.querySelector("svg");

//     if (svgElement) {
//         const src = svgElement.getAttribute("src");
//         const isBurger = src === "img/burger-menu.svg";
//         const iconName = isBurger ? "img/close.svg" : "img/burger-menu.svg";

//         svgElement.setAttribute("src", iconName);

//         if (!isBurger) {
//             navigation.classList.add("navigation--mobile--fadeout");
//             setTimeout(() => {
//                 navigation.classList.toggle("navigation--mobile");
//             }, 300);
//         } else {
//             navigation.classList.remove("navigation--mobile--fadeout");
//             navigation.classList.toggle("navigation--mobile");
//         }
//     }
// };

// // Ajoutez une classe à vos éléments <li>
// const menuItems = document.querySelectorAll("#navbar li a");

// // Ajoutez un gestionnaire d'événements de clic à chaque élément <li>
// menuItems.forEach(item => {
//     item.addEventListener("click", () => {
//         // Fermez le menu burger lorsqu'un élément <li> est cliqué
//         toggleMenu();
//     });
// });
const toggleMenu = () => {
    const nav = document.querySelector("#navbar");
    const menuText = document.querySelector("#menuText");

    // Changer le texte en fonction de la visibilité du menu
    if (window.getComputedStyle(nav).getPropertyValue("display") === "none") {
        menuText.innerText = "Fermer";
    } else {
        menuText.innerText = "Menu";
    }
    const navigation = document.querySelector(".navigation");

    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute("src");

    const isBurger = src === "img/burger-menu.svg";
    const iconName = isBurger ? "img/close.svg" : "img/burger-menu.svg";

    burgerMenu.setAttribute("src", iconName);

    if (!isBurger) {
        navigation.classList.add("navigation--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle("navigation--mobile");
        }, 300);
    } else {
        navigation.classList.remove("navigation--mobile--fadeout");
        navigation.classList.toggle("navigation--mobile");
    }
};

// Ajoutez une classe à vos éléments <li>
const menuItems = document.querySelectorAll(".navigation li ");

// Ajoutez un gestionnaire d'événements de clic à chaque élément <li>
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        // Fermez le menu burger lorsqu'un élément <li> est cliqué
        toggleMenu();
    });
});