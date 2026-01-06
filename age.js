
let anneeEncours = new Date().getFullYear();

function calculAge(anneeNaissance) {
    return anneeEncours - anneeNaissance;
}

let inputAnnee = document.getElementById("anneeNaissance");
let divResultat = document.getElementById("resultat");

inputAnnee.addEventListener("input", function () {
    let anneeValeur = Number(inputAnnee.value);

    if (!anneeValeur || isNaN(anneeValeur)) {
        divResultat.textContent = "";
        return;
    }

    if (anneeValeur > anneeEncours || anneeValeur < 1900) {
        divResultat.textContent = "";
        return;
    }

    let age = calculAge(anneeValeur);
    divResultat.textContent = "Tu as " + age + " ans en " + anneeEncours + ".";
});
