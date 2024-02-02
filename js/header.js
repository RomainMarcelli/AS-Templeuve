// header.js
document.addEventListener("DOMContentLoaded", function () {
    // Charger le header dans l'élément avec l'id "headerContainer"
    const headerContainer = document.getElementById("headerContainer");

    const headerRequest = new XMLHttpRequest();
    headerRequest.open("GET", "header.html", true);

    headerRequest.onreadystatechange = function () {
        if (headerRequest.readyState === 4 && headerRequest.status === 200) {
            headerContainer.innerHTML = headerRequest.responseText;
        }
    };

    headerRequest.send();
});
