
let anneeActuelle = 2025;

function calculAge(anneeNaissance){
    return anneeActuelle - anneeNaissance;
};

let inputAnnee = document.getElementById("anneeNaissance");

let divResultat = document.getElementById("resultat");

inputAnnee.addEventListener("input", function() {

let anneeValeur = inputAnnee.value;

if (!anneeValeur || isNaN(anneeValeur)) {
    divResultat.textContent = "";
    return;
}

let age = calculAge(anneeValeur);

divResultat.textContent = "Bonjour  J'ai  " + age +" ans en " + anneeActuelle + ",";


});