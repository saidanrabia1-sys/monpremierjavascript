
// Manipulation des dates en JavaScript

// Je déclare une variable "date" qui a une intance de l'objet Date()
const maDate = new Date();

const anneeEnCours  = maDate.getFullYear();

//Affichage de l'année 
let elementSpanAnnee = document.querySelector("#annee");
elementSpanAnnee.textContent = anneeEnCours;

//Affichage de mois 
let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate.getMonth();

//Affichage de la date complète
let dateComplete = document.getElementById("dateComplete");
dateComplete.textContent = maDate.toLocaleDateString();

console.log(dateComplete);

// Affichage heure de mayotte 
function afficherHeure() {
  document.getElementById("heureMayotte").textContent =
    new Date().toLocaleTimeString("fr-FR");
}

afficherHeure();
setInterval(afficherHeure, 1000);//J'exécute une fonction à intervalles de temps réguliers 

//Affichage heure de paris 
function afficherHeureParis() {
    const maintenant = new Date().toLocaleTimeString("fr-FR", {
      timeZone: "Europe/Paris"
    });
    document.getElementById("heureParis").textContent = maintenant;
  }

  setInterval(afficherHeureParis, 1000);//setInterval permet de bien afficher l'heure a temps 
  afficherHeureParis();

