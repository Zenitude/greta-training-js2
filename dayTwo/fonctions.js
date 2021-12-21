// Functions --> Level01

// 1. Déclarez une fonction fullName qui affiche votre nom complet.

function fullName()
{
    return 'Rudy Mollet';
}
console.log(fullName());

// 2. Déclarez une fonction newFullName qui prend firstName, lastName comme paramètre et elle renvoie return votre nom complet.

function newFullName(firstName, lastName)
{
    return `${firstName} ${lastName}`;
}

console.log(newFullName('Rudy', 'Mollet'));

// 3. Déclarez une fonction addNumbers qui prend deux deux paramètres et elle renvoie return la somme.

function addNumbers(nbr1, nbr2)
{
    return nbr1 + nbr2;
}

console.log(addNumbers(10,43));

// 4. Une aire d'un rectangle est calculée comme suit: area = longueur x largeur. Ecrivez une fonction qui calcule areaOfRectangle.

function areaOfRectangle(longueur, largeur)
{
    return longueur * largeur;
}

console.log(areaOfRectangle(10, 2));

// 5. Le périmètre d'un rectangle est calculé comme suit: perimeter = 2x (longueur + largeur). Ecrivez une fonction qui calcule perimeterOfRectangle.

function perimeterOfRectangle(longueur, largeur)
{
    return 2 * (longueur + largeur);
}

console.log(perimeterOfRectangle(10,2));

// 6. L'aire d'un cercle est calculée comme suit: area = π x r x r. Ecrire une fonction qui calcule areaOfCircle

function areaOfCircle(rayon)
{
    return Math.PI * rayon * rayon;
}

console.log(areaOfCircle(5));

// 7. (Facultatif) La température en C° peut être convertie en F° en utilisant cette formule: F° = (C° x 9/5) + 32. Écrivez une fonction qui convertit C° en F°_convertCelciusToFahrenheit_.

function convertCelciusToFahrenheit(celcius)
{
    return (celcius * 9/5) + 32;
}

console.log(convertCelciusToFahrenheit(5));

// 8. (Faclultatif) Écrivez une fonction appelée checkSeason, elle prend un paramètre du mois et renvoie la saison: Automne, Hiver, Printemps ou Été.

function checkSeason(mois)
{
    
    let tabMois = ['Décembre Janvier Février',  'Mars Avril Mai', 'Juin Juillet Août', 'Septembre Octobre Novembre'];
    let trimestre; 
    
    for(let i = 0 ; i < tabMois.length ; i++)
    {
        if(tabMois[i].includes(mois))
        {
            trimestre = i;
        }
    }

    switch(trimestre)
    {
        case 0 :
            return "C'est l'Hiver";
            break;
        
        case 1 :
            return "C'est le Printemps";
            break;

        case 2 : 
            return "C'est l'Été";
            break;

        case 3 : 
            return "C'est l'Automne";
            break;
    } 
}

console.log(checkSeason('Janvier'));

// 9. (Facultatif) Math.max renvoie son plus grand argument. Écrivez une fonction findMax qui prend trois arguments et renvoie leur maximum sans utiliser la méthode Math.max.

/*console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0*/

function findMax(nbr1, nbr2, nbr3)
{
    return Math.max(nbr1, nbr2, nbr3);
}

console.log(findMax(1,9,6));