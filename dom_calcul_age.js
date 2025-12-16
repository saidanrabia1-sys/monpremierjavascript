// Récupération des éléments du DOM
function calculAge() {
const anneeNaissance = document.getElementById("anneeNaissance").value;
const ageResultat = document.getElementById("ageResultat");

    if (isNaN (anneeNaissance) > 1900  && anneeNaissance <= new Date().getFullYear()){
        const anneeCourante = new Date().getFullYear();
        const age = anneeCourante - anneeNaissance;
        ageResultat.textContent = age + " ans";
    } else {
        ageResultat.textContent = "";
    }
}
/*Je récupère un élément (une balise) situé dans le fichier HTML
(calcule_age.html). J'utilise l'identifiant pour trouver le bon élément.
L'élément récupéé est ensuite stocké dans la variable
elementBouttonValider
*/
let elementBouttonValider = document.getElementById("bouttonValider");
elementBouttonValider.addEventListener("click",function(){
    console.log("elementBouttonvalider :", elementBouttonValider)
});
console.log(document.getElementById("nom"));

// J'affiche l'élément récupéré dans la console
let elementPrenom = document.getElementById("prenom");
elementPrenom.addEventListener("click",function(){
    console.log("prenom :", elementPrenom)
});
console.log(document.getElementById("prenom"));


let elementAnneeNaissance = document.getElementById("anneeNaissance");
elementAnneeNaissance.addEventListener("click",function(){
    console.log("elementAnneeNaissance :", elementAnneeNaissance)
});
console.log(document.getElementById("anneeNaissance"));

console.log(document.head);

console.log(document.title);

// Je récupère lélément HTML (balis) dont l'identifiant est recensement 
let elementDivRecensement = document.querySelector("#recensement");
console.log("elementDivRecensement :", elementDivRecensement);

let elementPRecensement = document.querySelector("#paragraphe1");
console.log(elementPRecensement);

// Je récupère la liste des communes de Mayotte
// Puis je stocke les communes dans la variable elementListCommunes 
let elementsListCommunes = document.querySelector("#listCommunes");

// J'affiche la liste des communes 
console.log(elementsListCommunes);

// J'utilise la boucle For pour parcourir la liste elementListCommunes 
for(let i = 0; i < elementsListCommunes.lenght; i= i+1) {
    console.log(elementsListCommunes[i]);
};

// J'utilise QuerySelectorAll pour récupéré tous les membres de la même classe
let elementClassCommunes = document.querySelectorAll(".commune");
console.log(elementClassCommunes);


for (let i = 0; i < elementClassCommunes.length; i++){
    console.log(elementClassCommunes[i]);
    console.log(elementClassCommunes[i].innerText);
    

};
