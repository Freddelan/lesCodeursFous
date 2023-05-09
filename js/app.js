const competencesBtnFred = document.getElementById("competences-btn-fred");
const competencesMenuFred = document.getElementById("competences-menu-fred");
const competencesBtnDenis = document.getElementById("competences-btn-denis");
const competencesMenuDenis = document.getElementById("competences-menu-denis");
const competencesBtnNico = document.getElementById("competences-btn-nico");
const competencesMenuNico = document.getElementById("competences-menu-nico");
const titre = document.getElementById("titlelateam");

competencesBtnFred.addEventListener("click", function () {
    if (getComputedStyle(competencesMenuFred).display != "none") {
        competencesMenuFred.style.display = "none";
    } else {
        competencesMenuFred.style.display = "block";
    }
});

competencesBtnDenis.addEventListener("click", function () {
    if (getComputedStyle(competencesMenuDenis).display != "none") {
        competencesMenuDenis.style.display = "none";
    } else {
        competencesMenuDenis.style.display = "block";
    }
});

competencesBtnNico.addEventListener("click", function () {
    if (getComputedStyle(competencesMenuNico).display != "none") {
        competencesMenuNico.style.display = "none";
    } else {
        competencesMenuNico.style.display = "block";
    }
});

setInterval(function () {
    titre.classList.toggle("blink");
}, 1000);
