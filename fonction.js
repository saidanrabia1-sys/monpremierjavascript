
/**
 *  Les fonctions en JavaScript
 */

console.log("Section Fonction");

/**
 * La fonction additionner () dit additionner des nombres 
 * et retourner le resultat de l'addition
 * La Fonction additionner a besoin de deux paramètres: (chffre1, chiffre2)
 * Ensuite , la fonction additionner additionne les deux paramètres : chiffre1 + chiffre2
 * Ensuite la fonction additionner retourne ou renvoie le  resultat du calcul
 */
function additionner(chiffre1,chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
};

// J'utilise la fonction additionner(chiffre1, chiffre2) pour calculer la somme de deux nombres

let sommes = 15 + 8 ;

let sommesAddition = additionner(15,8);

console.log("sommesAddition", sommesAddition);

// Fonction soustraction 
function Soustraire(chiffre1, chiffre2){
    let resultat = chiffre1 - chiffre2;
    return resultat;
};

// J'utilise la fonction(chiffre1, chiffre2)pour calculer la somme de deux nombres 

let resteSoustraction = Soustraire(15, 8);

console.log("resteSoustraction", resteSoustraction); 

// Fonction multiplication 
function Multiplication(chiffre1, chiffre2) {
    let resultat = chiffre1 * chiffre2 ;
    return resultat;
};

// J'utilise la fonction(chiffre1, chiffre2)pour calculer la somme de deux nombres 

let resteMultiplication = Multiplication(15,8);

console.log("resteMultiplication", resteMultiplication);