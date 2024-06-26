(function () {
  "use strict";

  // Gestion de l'ouverture et de la fermeture des sections correspondant aux boutons
  const buttons = document.querySelectorAll(".button");
  const sections = document.querySelectorAll("section");

  buttons.forEach(button => {
      button.addEventListener("click", function (event) {
          event.preventDefault();

          const targetId = this.getAttribute("data-target");

          sections.forEach(section => {
              if (section.id === targetId) {
                  section.classList.toggle("visible");
              } else {
                  section.classList.remove("visible");
              }
          });
      });
  });

  // Animation de la timeline
  const timelineItems = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function animateTimeline() {
      timelineItems.forEach(item => {
          if (isElementInViewport(item)) {
              item.classList.add("in-view");
          }
      });
  }

  window.addEventListener("load", animateTimeline);
  window.addEventListener("resize", animateTimeline);
  window.addEventListener("scroll", animateTimeline);
})();


document.addEventListener('DOMContentLoaded', function () {
    // Gestion du clic sur l'image pour afficher en plein écran
    const imageToEnlarge = document.getElementById('imageToEnlarge');
    imageToEnlarge.addEventListener('click', function () {
        openFullscreen(this.src);
    });
});

function openFullscreen(src) {
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const fullscreenImage = document.getElementById('fullscreenImage');

    fullscreenImage.src = src;
    fullscreenContainer.classList.add('active');
}

function closeFullscreen() {
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    fullscreenContainer.classList.remove('active');
}