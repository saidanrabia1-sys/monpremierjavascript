console.log(" Section - Je suis dans la boucle ");

let nombreTour = 0;

/**
 * La boucle WHILE
 * while signifie "tant que"
 * Tant que la limite n'est pas atteint , alors l'action s'exécute.
 * la boucle While va exécuter la même opération autant que de fois que
 * la limite n'est pas atteinte.
 * Et à chaque tour, la variable nombreTour augmente de 1 (+1) 
 */

while (nombreTour < 7){
    console.log("Tour de la maison au départ:",nombreTour);
    nombreTour = nombreTour + 1;

    console.log("Nombre de tours Après le passage : ", nombreTour);
};

// Boucle FOR 
for (let indice = 0; indice < 3; indice++ ) {
    console.log("L'indice est de : " , indice);
};

let listeEleves = ["Said Anrabia","Mohamed Anzilati","Houmadi Chahida","Chamssidine Nael"];
console.log("Taille du tableau : ", listeEleves.length);
console.log(eleves[0]); //Je récupère le 1er membre du tableau
console.log(eleves[1]); //Je récupère le 2ème membre du tableau
console.log(eleves[2]); //Je récupère le 3ème membre du tableau
console.log(eleves[3]); //Je récupère le 4ème membre du tableau

for (let indice = 0; indice < listeEleves.length; indice++){
    console.log(listeEleves[indice]);
};