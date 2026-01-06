
// Manipulation des dates en JavaScript

// Je déclare une variable "date" qui a une intance de l'objet Date()
const maDate = new Date();

const anneeEnCours  = maDate.getFullYear();

let elementSpanAnnee = document.querySelector("#annee");
elementSpanAnnee.textContent = anneeEnCours;

let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate.getMonth();


const dateComplete = date.toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

console.log(dateComplete);


let elementSpanHeureMayotte = document.querySelector("#heureMayotte");
elementSpanHeureMayotte = maintenant.toLocaleDateString("fr-FR");

const options = {
    hour: "2-digit",
    minute: "2-digit", 
    second:"2-digit",
}
