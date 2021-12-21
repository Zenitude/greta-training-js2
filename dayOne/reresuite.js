// Exercices Aléatoires --> Level02

// 2. En utilisant 'prompt', obtenez l'année de naissance de l'utilisateur et si l'utilisateur a 18 ans ou plus, autorisez l'utilisateur à conduire sinon dites à l'utilisateur d'attendre un certain nombre d'années.

let dateNaissance = prompt('Saisissez votre année de naissance');
let anneeEnCours = new Date().getUTCFullYear();

/*
Entrez votre date de naissance: 1994
Vous avez 26 ans. Vous êtes autorisé de conduire.
*/

/*Entrez votre date de naissance: 2005
Vous avez 16 ans. Vous serez autorisé à conduire après 2 ans.
*/

if(anneeEnCours - dateNaissance > 18)
{
    alert(`Vous avez ${anneeEnCours - dateNaissance} ans. Vous êtes autorisé de conduire.`)
}
else if (anneeEnCours - dateNaissance === 17)
{
    alert(`Vous avez ${anneeEnCours - dateNaissance} ans. Vous serez autorisé à conduire dans 1 an.`)
}
else if (anneeEnCours - dateNaissance === 16)
{
    alert(`Vous avez ${anneeEnCours - dateNaissance} ans. Vous serez autorisé à conduire dans 2 ans.`)
}
else
{
    alert(`Vous avez ${anneeEnCours - dateNaissance} ans. Vous êtes trop jeune pour conduire.`)
}
    
// 3. Écrivez un script qui invite l'utilisateur à entrer le nombre d'années. Calculez le nombre de secondes qu'une personne peut vivre. Supposons que quelqu'un ne vive que cent ans.
/* Entrez le nombre de vôtres que vous habitez: 100
Vous avez vécu 3153600000 secs.*/

let naissanceUtilisateur = '15/01/1988';
let dateConvertUser = new Date(naissanceUtilisateur.split('/').reverse().join('-'));
let dateActuelle = new Date();
let calculSeconde = dateActuelle - dateConvertUser;
let nombreAnnee = dateActuelle.getFullYear()-dateConvertUser.getFullYear();
let resteAns = 100-nombreAnnee;
let annee100 = dateActuelle.getFullYear() + resteAns;
let user = dateConvertUser.getUTCDay();
console.log(user);
let centAns = new Date(`${annee100}-${dateConvertUser.getMonth()+1}-${dateConvertUser.getDay()}`);
console.log(`Vous avez vécu ${calculSeconde} secs soit ${nombreAnnee} ans. Il vous reste ${centAns - dateActuelle} secs à vivre jusqu'à 100 ans.`);

// 4. Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time

let dateLisible = new Date();
let anneeLisible = dateLisible.getFullYear();
let moisLisible = dateLisible.getMonth();
let joursLisible = dateLisible.getUTCDay();
let heureLisible = dateLisible.getHours();
let minutesLisible = dateLisible.getMinutes();

if(moisLisible < 10) moisLisible = `0${moisLisible}`;
if(joursLisible < 10) anneeLisible = `0${joursLisible}`;
if(heureLisible < 10) heureLisible = `0${heureLisible}`;
if(minutesLisible < 10) minutesLisible = `0${minutesLisible}`;

// YYYY-MM-DD HH:mm

console.log(`${anneeLisible}-${moisLisible}-${joursLisible} ${heureLisible}:${minutesLisible}`);

//DD-MM-YYYY HH:mm

console.log(`${joursLisible}-${moisLisible}-${anneeLisible} ${heureLisible}:${minutesLisible}`);

//DD/MM/YYYY HH:mm

console.log(`${joursLisible}/${moisLisible}/${anneeLisible} ${heureLisible}:${minutesLisible}`);

// Exercices Aléatoires --> Level04

// 1.Si a est supérieur à b return 'a est superieur à b' sinon 'a est inferieur à b'. Utilisez deux méthodes

//if else
// ternary operator.
let aa = 4
let bb = 3

if(aa > bb) 
{
    console.log('a est supérieur à b') 
}
else 
{
    console.log('b est supérieur à a');
}

let result = aa > bb ? 'a est supérieur à b' : 'b est supérieur à a';
console.log(result);

// 2.Les nombres pairs sont divisibles par 2 et le reste est zéro. Comment vérifier si un nombre est pair ou n'utilise pas JavaScript?

/*Enter un nombre: 2
2 est un nombre pair*/

//Enter un nombre: 9
//9 est un nombre impair.

let nbPair = 9;
if(nbPair % 2 === 0)
{
    console.log('Ce nombre est pair');
}
else
{
    console.log('Ce nombre est impair');
}