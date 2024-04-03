// js/equipe.js

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

    const isBurger = src === "../../img/burger-menu.svg";
    const iconName = isBurger ? "../../img/close.svg" : "../../img/burger-menu.svg";

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

// LINK Facebook

document.getElementById("facebookIcon").addEventListener("click", function() {
    window.location.href = "https://www.facebook.com/groups/458338641019931/";
});
