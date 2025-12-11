// Récupération des éléments du DOM
function calculAge() {
const anneeNaissance = document.getElementById("anneeNaissance").value;
const ageAffichage = document.getElementById("ageResultat");

    if (anneeNaissance && isNaN (anneeNaissance)) {
        const anneeCourante = new Date().getFullYear();
        const age = anneeCourante - parseInt (anneeNaissance);
        ageAffichage.textContent = age + " ans";
    } else {
        ageAffichage.textContent = "";
    }
}