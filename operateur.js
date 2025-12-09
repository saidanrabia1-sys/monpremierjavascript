// Ici je code les opérateurs en JavaScript
// Addition

let prixUnitaire = 13;
let valeurAjoutee = 7;
let valeurReduction = 5;
let valeurDivision = 4;

// Première technique d'additionner des nombresv
let prixAdditionne1 = 3+7;

// J'affiche la valeur de la variable prixAdditionne1
console.log("prixAdditionne1 :", prixAdditionne1);

// Deuxième méthode d'additionner des nombres à l'aide des variables 
let prixAdditionne2 = prixUnitaire + valeurAjoutee;

// J'affiche la valeur de la variable prixAdditionne2
console.log("prixAdditionne2:", prixAdditionne2);

// Addition des chaines de caractères 
// Exemple : "Fatima" + "Amina"; Résultat attendu est "Fatima Amina"
let eleve1 = "Fatima";
let eleve2 = "Amina";


// Je concatène deux variables et j'ajoute un espace entre les deux variables. Le résultat attendu : "Fatima Amina "
console.log(eleve1 +" " +eleve2);

let eleveCombo = eleve1 + " " + eleve2;

// Je concatène deux variables. Et, je les stocke dans une variable.
console.log("eleveCombo:", eleveCombo);


// Soustraction 

// Soustraction des nombres a l'aide des variables 
let prixReduit= prixUnitaire - valeurReduction;

// J'affiche la valeur de la variable prixReduits
console.log("prixReduit" , prixReduit);


// Multiplication 

let prixMultiple =  prixUnitaire * valeurAjoutee;

console.log("prixMultiple:" , prixMultiple);

// Division
// Le signe / permet de diviser des nombres 

let prixDivise = prixUnitaire / valeurDivision ; 

console.log ("résultat de prix divisé: " , prixDivise);


/**
 * Les opérateurs de comparaison
 * Nous allons comparer les valeurs stacker dans les variables. 
 * Allons-y !
 */

console.log("Section Comparaison");
let village1= "Mamoudzou";
let commune2 = "Mamoudzou";

/**
 * Je vérifie que les deux variables on la même valeur. 
 * la même valeur 
 * le même type de valeur 
 * 
 * Le signe === (tripke égale) permet de comparer les valeurs et le typre de données.
 * Les types de données sont :
 * - sting (chaîne de caractères)
 * number (nombre)
 * bollean (booléen) soit true ou false
 * array (tableau)
 * object (objet)
*/
console.log(village1 == commune2);


/**
 * Je vérifie que le deux variables ont: 
 * la même valeur
 * le même type de valeur 
 */
console.log(village1 === commune2);

/**
 * signe > signifie : "superieur à ou bien plus grand que"
 *  
 */
let age1 = 12;
let distanceParcourus = 5;

// Est-ce que l'age est supérieur à la distance parcourue ?
console.log(age1 > distanceParcourus);

// Est-ce que l'age est plus petit que la distance parcourue ?
console.log(age < distanceParcourus);



let age2 = 12;
let distanceParcourue = 5;

// Est-ce que l'age est plus grand ou égale à la distanceParcourue ?
console.log( age2 >= distanceParcourue);

// Est-ce que l'age est plus petit ou égale à la distanceParcourue ?
console.log(age2 <= distanceParcourue );


let village2 = "Mamoudzou"
let commune3 = "Mamoudzou"

// Est-ce que le village est différent à la commune ?
console.log(village2 != distanceParcourue);


// Est-ce que la commune est strictement différent du village ?
console.log(commune3 !== distanceParcourue);