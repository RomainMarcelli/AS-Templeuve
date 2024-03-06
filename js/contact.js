
const btnContact = document.getElementById('btn_contact');
const btnJoindre = document.getElementById('btn_joindre');

btnJoindre.addEventListener('mouseover', () => {
    btnContact.style.color = '#DB0F00';
    btnContact.style.backgroundColor = 'white';
});

btnJoindre.addEventListener('mouseout', () => {
    btnContact.style.color = 'white';
    btnContact.style.backgroundColor = '#DB0F00';
});

btnJoindre.addEventListener('mouseover', () => {
    btnJoindre.style.color = 'white';
    btnJoindre.style.backgroundColor = '#DB0F00';
});

btnJoindre.addEventListener('mouseout', () => {
    btnJoindre.style.color = '#DB0F00';
    btnJoindre.style.backgroundColor = 'white';
});

btnContact.addEventListener('mouseover', () => {
    btnJoindre.style.color = 'white';
    btnJoindre.style.backgroundColor = '#DB0F00';
});

btnContact.addEventListener('mouseout', () => {
    btnJoindre.style.color = '#DB0F00';
    btnJoindre.style.backgroundColor = 'white';
});

btnContact.addEventListener('mouseover', () => {
    btnContact.style.color = '#DB0F00';
    btnContact.style.backgroundColor = 'white';
});

btnContact.addEventListener('mouseout', () => {
    btnContact.style.color = 'white';
    btnContact.style.backgroundColor = '#DB0F00';
});


// Icon


document.getElementById("facebookIcon").addEventListener("click", function () {
    window.open("https://www.facebook.com/groups/458338641019931/", "_blank");
});
document.getElementById("twitterIcon").addEventListener("click", function () {
    window.open("https://templeuve.footeo.com/", "_blank");
});
document.getElementById("instagramIcon").addEventListener("click", function () {
    window.open("https://templeuve.footeo.com/", "_blank");
});
document.getElementById("tiktokIcon").addEventListener("click", function () {
    window.open("https://templeuve.footeo.com/", "_blank");
});
document.getElementById("youtubeIcon").addEventListener("click", function () {
    window.open("https://templeuve.footeo.com/", "_blank");
});


// Afficher le formulaire 


const formContainer = document.getElementById("formContainer");
const showFormButton = document.getElementById("showFormButton");
const closeForm = document.getElementById("closeForm");

showFormButton.addEventListener("click", function() {
    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
});

closeForm.addEventListener("click", function() {
    formContainer.style.display = "none";
});



