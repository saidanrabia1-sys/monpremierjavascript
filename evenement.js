/**
 * Je programmes les évènements qui sont déclanchés côté HTML
 */

const elementButtonValiderDate = document.querySelector("#validerDate");


let elementSpandateDuJour = document.querySelector("#dateDuJour");
let elementSpandateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");

const maDate = new Date();

// Mon événement clique
elementButtonValiderDate.addEventListener("click", function() {
    // Je décris l'action à  réaliser lorsque je clique sur le boutton valider
    
    elementSpandateDuJour.innerHTML = maDate ;
    elementSpandateDuJourFormat2.textContent = maDate.toLocaleDateString();

});

/**
 * Mon événements "Keydown"
 * Je code unn événement de type KEYDOM.
 * L'événement KEYDOM va se déclancher lorsque j'appuie un une touche de mon clavier 
 */

// 1. Tout d'aboord je récupere l'element  HTML qui sera associé à lélément KEYDOM
let elementButonFleche = document.querySelector("#boutonFleche");


/** 
 * 2. J'associe l'evénement KEYDOM mon élément HTML en utilisant la méthode addEvventListener().
 * A l'intérieur de la méthode addEventListener(), je passe une fonction fléchée comme suit ' () => {}'.
*/
elementButonFleche.addEventListener("keydom", (event) => {
    console.log("=== Je suis dans l' événement KEYDOWN===");
    console.log("Clé event : ", event.key); 
});


/**
 * Mon événements "change"
 * Je code unn événement de type CHANGE.
 * L'événement CHANGE va se déclancher lorsque je remplis le champ en tapant sur les touche de mon clavier
 */

// 1. Tout d'aboord je récupere l'element  HTML qui sera associé à lélément CHANGE

let elementInputNomForm = document.querySelector("#nom");

/** 
 * 2. J'associe l'evénement CHANGE à mon élément HTML en utilisant la méthode addEvventListener().
 * A l'intérieur de la méthode addEventListener(), je passe une fonction fléchée comme suit ' () => {}'.
 * La fonctionn fléchée prend le paramètre 
*/
let messageSalutation; // Je déclare une variable vide.
let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");

let elementInputAnneeNaissance = document.querySelector("#anneeNaissance");

let elementSpanMessageAge = document.querySelector("#calcul-age")

const date = new Date();

function calculerAge(anneeNaissance) {
  return date.getFullYear() - anneeNaissance;
}



elementInputNomForm.addEventListener("change", (event) => {
    console.log(event.target.value);
    messageSalutation = `Bonjour ${event.target.value}`;
    elementSpanNomUtilisateur.textContent = messageSalutation;

});

elementInputAnneeNaissance.addEventListener("change", (event) => {
    console.log(event.target.value);
    messageAge = ` Vous êtes agé de  ${calculAge(event.target.value)} ans`;
    elementSpanMessageAge.textContent = messageAge;

});



/**
 * Envoyer le formulaire
 * Je vais récupérer les données saisis sur le formulaire :
 * nom
 * prenom
 * situation
 * année de naissance
 */

// je récupère la balise <form> </form> avec ses enfants; Ensuite, je stocke la balise dans la variable elementForm
let elementForm = document.querySelector('form');
console.log("elementForm :", elementForm);


// J'assoccie l'événement 'submit'
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche l'envoi du formulaire
  console.log("Formulaire soumis !");

 
  const nom = document.querySelector("#nom").value;
  console.log("Nom saisi :", nom);

   const prenom = document.querySelector("#prenom").value;
   console.log("Prenom saisi :", prenom);

   const anneeNaissance = document.querySelector("#anneeNaissance").value;
   console.log("Annee saisi :", anneeNaissance);

   const situation = document.querySelector("#situation").value;
   console.log("Situation saisi :", situation);

  
});

