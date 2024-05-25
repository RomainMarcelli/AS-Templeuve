var swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true, // Pour créer une boucle infinie
    slidesPerView: 3, // Nombre de diapositives visibles à la fois par défaut
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
    breakpoints: {
        0: {
            slidesPerView: 1, // Nombre de diapositives visibles à la fois pour les écrans de 1px à 1040px
        },
        1041: {
            slidesPerView: 3, // Nombre de diapositives visibles à la fois pour les écrans de plus de 1040px
        }
    }
});



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

// Accédez à l'iframe par son ID
var iframe = document.getElementById('659815e5b16e1b08c507a730');

// Vérifiez si l'iframe a été chargée
iframe.onload = function() {
    // Accédez au document de l'iframe
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Trouvez tous les éléments div avec la classe 'c-widget__footer'
    var divsToDelete = iframeDoc.querySelectorAll('.c-widget__footer');

    // Parcourez tous les éléments div sélectionnés
    divsToDelete.forEach(function(div) {
        // Supprimez chaque élément div du DOM de l'iframe
        div.parentNode.removeChild(div);
    });
};


function showIframe(id) {
    // Masquer tous les iframes
    var iframes = document.querySelectorAll('.classement .iframe');
    iframes.forEach(function(iframe) {
        iframe.style.display = 'none';
    });

    // Afficher l'iframe correspondant à l'ID donné
    var iframeToShow = document.getElementById(id);
    if (iframeToShow) {
        iframeToShow.style.display = 'block';
    }

    // Retirez la classe active de tous les liens
    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Ajoutez la classe active au lien actuellement cliqué
    var currentLink = document.querySelector('.navbar a[href="#"][onclick="showIframe(\'' + id + '\')"]');
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

document.getElementById("facebookIcon").addEventListener("click", function() {
    window.location.href = "https://www.facebook.com/groups/458338641019931/";
});

// Appeler showIframe lorsque la page se charge
document.addEventListener('DOMContentLoaded', function () {
    showIframe('6597e8e313509708cbfbf558');
});

