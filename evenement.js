/**
 * Je programmes les évènements qui sont déclanchés côté HTML
 */

const elementBouttonValiderDate = document.querySelector("#validerDate");


let elementSpandateDuJour = document.querySelector("#dateDuJour");
let elementSpandateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");

const maDate = new Date();

elementBouttonValiderDate.addEventListener("click", function() {
    // Je décris l'action à  réaliser lorsque je clique sur le boutton valider
    
    elementSpandateDuJour.innerHTML = maDate ;
    elementSpandateDuJourFormat2.textContent = maDate.toLocaleDateString();

});