// Boolean & Dates --> Level01

// 4. La valeur booléenne est vraie ou fausse.

// I. Écrivez trois déclarations JavaScript qui fournissent une valeur de vérité (True).

let vrai = true;

if(vrai) console.log("c'est vrai");
if(vrai !== false) console.log("c'est encore vrai");
if(!false) console.log("c'est donc vrai");

// II. Écrivez trois instructions JavaScript qui fournissent une valeur erronée (False).

let faux = false;

if(faux != false)
{
    console.log("c'est vrai");
}
else
{
    console.log("bah non c'est faux");
}

if(faux == false)
{
    console.log("là c'est faux");
}
else 
{
    console.log("mais non c'est vrai");
}

if(faux === false)
{
    console.log("Nan nan c'est faux");
}
else
{
    console.log("Nan c'est vrai");
}

// 5. Déterminez d'abord le résultat de l'expression de comparaison suivante sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()

// I. 4 > 3 : 4 est bien supérieur à 3

if(4 > 3) 
{console.log("4 est bien supérieur à 3")}
else
{console.log("4 n'est pas supérieur à 3")}

// II. 4 >= 3 : 4 est bien supérieur ou égale à 3
if(4 >= 3) 
{console.log("4 est bien supérieur ou égale à 3")}
else
{console.log("4 n'est pas supérieur ou égale à 3")}

// III. 4 < 3 : 4 n'est pas inférieur à 3
if(4 < 3) 
{console.log("4 est bien inférieur à 3")}
else
{console.log("4 n'est pas inférieur à 3")}

// IV. 4 <= 3 : 4 n'est pas inférieur ou égale à 3
if(4 <= 3) 
{console.log("4 est bien inférieur ou égale à 3")}
else
{console.log("4 n'est pas inférieur ou égale à 3")}

// V. 4 == 4 : 4 est bien égale à 4
if(4 == 4) 
{console.log("4 est bien égale à 4")}
else
{console.log("4 n'est pas égale à 4")}

// VI. 4 === 4 : 4 est bien strictement égale à 4
if(4 === 3) 
{console.log("4 est bien strictement égale à 4")}
else
{console.log("4 n'est pas strictement égale à 4")}

// VII. 4 != 4 : 4 n'est pas différent de 4
if(4 != 4) 
{console.log("4 est différent de 4")}
else
{console.log("4 n'est pas différent de 4")}

// VIII. 4 !== 4 : 4 n'est strictement pas différent de 4
if(4 !== 4) 
{console.log("4 est strictement différent de 4")}
else
{console.log("4 n'est pas strictement différent de 4")}

// IX. 4 != '4' : 4 est différent de '4'
if(4 != '4') 
{console.log("4 est différent de '4'")}
else
{console.log("4 n'est pas différent de '4'")}

// X. 4 == '4' : 4 est égale à '4'
if(4 == '4') 
{console.log("4 est égale à '4'")}
else
{console.log("4 n'est pas égale à '4'")}

// XI. 4 === '4' : 4 n'est strictement pas égale à '4'
if(4 === '4') 
{console.log("4 est strictement égale à '4'")}
else
{console.log("4 n'est pas strictement égale à '4'")}

// XII. Trouvez la longueur 'length' de python et du jargon et faites une fausse déclaration de comparaison.

let longueurPython = 'python'.length;
let longueurJargon = 'jargon'.length;

if(longueurPython === longueurJargon)
{
    console.log('Pÿthon et Jargon ne sont pas de la même longueur');
}
else
{
    console.log('Pÿthon et Jargon sont de la même longueur');
}

// 6. Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()

// I. 4 > 3 && 10 < 12 : 4 est supérieur à 3 et 10 et inférieur 12
if(4 > 3 && 10 < 12)
{
    console.log('4 est supérieur à 3 et 10 et inférieur 12');
}
else
{
    console.log("Les deux opérations ou l'une des deux est fausse");
}
// II. 4 > 3 && 10 > 12 : 4 est supérieur à 3 et 10 n'est pas supérieur à 12
if(4 > 3 && 10 > 12)
{
    console.log('4 est supérieur à 3 et 10 et inférieur 12');
}
else
{
    console.log("Les deux opérations ou l'une des deux est fausse");
}
// III. 4 > 3 || 10 < 12 : Les deux opérations sont correctes
if(4 > 3 || 10 < 12)
{
    console.log('4 est supérieur à 3 et 10 et inférieur 12');
}
else
{
    console.log("Les deux opérations ou l'une des deux est fausse");
}
// IV. 4 > 3 || 10 > 12 : La première opération est correcte
if(4 > 3 || 10 > 12)
{
    console.log("L'une des deux opérations est correcte");
}
else
{
    console.log("Les deux opérations ou l'une des deux est fausse");
}
// V. !(4 > 3) : L'inverse de vrai c'est donc faux
if(!(4 > 3))
{
    console.log("c'est vrai");
}
else
{
    console.log("c'est faux");
}

// VI. !(4 < 3) : L'inverse de faux donc c'est vrai
if(!(4 < 3))
{
    console.log("c'est vrai");
}
else
{
    console.log("c'est faux");
}

// VII. !(false) : L'inverse de faux donc c'est vrai
if(!(false))
{
    console.log("c'est vrai");
}
else
{
    console.log("c'est faux");
}
// VIII. !(4 > 3 && 10 < 12) : L'inverse de vrai donc c'est faux
if(!(4 > 3 && 10 < 12))
{
    console.log("c'est vrai");
}
else
{
    console.log("c'est faux");
}
// IX. !(4 > 3 && 10 > 12) : L'inverse de faux donc c'est vrai
if(!(4 > 3 & 10 > 12))
{
    console.log("c'est vrai");
}
else
{
    console.log("c'est faux");
}

// X. !(4 === '4') : L'inverse de faux donc c'est vrai
if(!(4 === '4'))
{
    console.log("c'est vrai");
}
else
{
    console.log("c'est faux");
}
// XI. There is no 'on' in both dragon and python

if(!('dragon'.includes('on') && 'python'.includes('on')))
{
    console.log("'on' est pas présent dans Python et Dragon");
}
else
{
    console.log("'on' n'est pas présent dans Python et Dragon");
}

// 7. Utilisez l'objet Date pour effectuer les activités suivantes

let dateDuJour = new Date();

// I. Quelle est l'année aujourd'hui?

console.log(dateDuJour.getFullYear());

// II. Quel est le mois aujourd'hui en nombre?

console.log(dateDuJour.getMonth()+1);

// III. Quelle est la date aujourd'hui?

console.log(`${dateDuJour.getUTCDate()}/${dateDuJour.getMonth()+1}/${dateDuJour.getFullYear()}`);

// IV. Quel est le jour aujourd'hui en nombre?

console.log(dateDuJour.getUTCDate());

// V. Quelles sont les heures maintenant?

console.log(dateDuJour.getHours());

// VI. Quel est le procès-verbal maintenant?


// VII. Découvrez le nombre de secondes écoulées entre le 1er janvier 1970 et aujourd'hui.

console.log(dateDuJour.getTime());
