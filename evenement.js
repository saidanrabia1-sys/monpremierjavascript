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
let elementButonFleche = document.querySelector("#ButonFleche");


/** 
 * 2. J'associe l'evénement KEYDOM mon élément HTML en utilisant la méthode addEvventListener().
 * A l'intérieur de la méthode addEventListener(), je passe une fonction fléchée comme suit ' () => {}'.
*/
elementButonFleche.addEventListener("KEYDOWN", (event) => {
    console.log("=== Je suis dans l' événement KEYDOWN===");
    console.log("Clé event : ", event.key); 
});


/**
 * Mon événements "change"
 * Je code unn événement de type CHANGE.
 * L'événement CHANGE va se déclancher lorsque je remplis le champ en tapant sur les touche de mon clavier
 */

// 1. Tout d'aboord je récupere l'element  HTML qui sera associé à lélément CHANGE

let elementInputNomForm = document.querySelector("Nom");

/** 
 * 2. J'associe l'evénement CHANGE à mon élément HTML en utilisant la méthode addEvventListener().
 * A l'intérieur de la méthode addEventListener(), je passe une fonction fléchée comme suit ' () => {}'.
 * La fonctionn fléchée prend le paramètre 
*/
let messageSalutation; // Je déclare une variable vide.
let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");

elementInputNomForm.addEventListener("change", (event) => {
    console.log(event.target.value);
    messageSalutation = `Bonjour ${event.target.value}`;
    elementSpanNomUtilisateur.textContent = messageSalutation;

});
