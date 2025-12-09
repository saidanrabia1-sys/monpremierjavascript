/**
 * Les conditions en JavaScript
 */

let nombreFruit = 19;

/**
 * J'affiche l'alerte si le nombre de fruit est égal à 18
 */

/**
 * Ma condition commence par le mot-clé IF
 * La syntaxe à respecter est :
 * if(ma condition) {
 *      Action à exécuter 
 * }

*/
if(nombreFruit == 18){ // nous avons une comparaison à égalité strict 
    alert("vous avez atteint 18 fruits."); // fonction alert ()

};

let noteEleve = 10;

if (noteEleve >= 10 ){
    alert("vous êtes admis avec une note de "+ noteEleve);
};



let ageTelspectateur = 18;

if(ageTelspectateur <= 18 ) {// Si l'age est moins de 18 
    alert("vous pouvez regarder Le Roi Lion ! Car vous avez " + ageTelspectateur);
};

if(ageTelspectateur >= 18 ) {// Si l'age est égal ou supérieur à 18 
    alert("vous pouvez regarder RAMBO ! Car vous avez " + ageTelspectateur);
};

// La condition avec IF ELSE
let pointPermis = 12; 
if (pointPermis == 12 ) {
    alert("vous avez un bonnus! ");
    
} else {
    alert("vous avez des malus!");
}