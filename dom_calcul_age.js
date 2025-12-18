// Récupération des éléments du DOM
function calculAge() {
    const anneeNaissance = parseInt(document.getElementById("anneeNaissance").value);
    const ageResultat = document.getElementById("ageResultat");
    const anneeCourante = new Date().getFullYear();

    if (!isNaN(anneeNaissance) && anneeNaissance > 1900 && anneeNaissance <= anneeCourante) {
        const age = anneeCourante - anneeNaissance;
        ageResultat.textContent = age + " ans";
    } else {
        ageResultat.textContent = "Année invalide";
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

/**
 * J'insère des balises dans le fichier HTML grâce au code JavaScript  
 */
// Je créé un élement (balise) nommé <section>
let elementSection = document.createElement("section");

// Je récupère la balise <body> , puis je stocke <body> dans la variable elementBody.
let elementBody = document.querySelector('body');

elementBody.appendChild(elementSection);

let nouveauTitre = document.createElement("h3");

nouveauTitre.textContent ="Mon titre de la section";

elementSection.appendChild(nouveauTitre);

// Je créé un élement (balise) nommé <maman>
let elementMaman = document.createElement('maman');

elementBody.appendChild(elementMaman);

// Dans la balise <maman> je crée une balise  <h3>
let nouveauTitre2 = document.createElement("h3");

nouveauTitre2.textContent = "Bonjour maman";

elementSection.appendChild(nouveauTitre2);

// Je crée une balise image 
let elementImg = document.createElement("img");

// Je lui ajoute un attribu src 
elementImg.src = "image rsma.web";

// j'ajoute un attribut 
elementImg.setAttribute("alt","RSMA Mayotte");

// J'ajoute une liste de classe 
elementImg.classList.add("img");
elementImg.className = "image RSMA";

// Supprimer une classe de l'élément img
elementImg.classList.remove("image3");


// J'insere l'image dans le body
elementBody.appendChild(elementImg);
