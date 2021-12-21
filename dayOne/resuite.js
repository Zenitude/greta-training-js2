// Data Type --> Level02

/* 1. Utilisez console.log() et afficher la déclaration suivante:
 The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/

console.log("'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

/* 2. Utilisez console.log() et afficher la citation suivante:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3. Vérifiez si typeof '10' est exactement égal à 10. Sinon, rendez-le exactement égal.

let type10a = '10'; 
let type10b = 10;

if(parseInt(type10a) === type10b) 
{
    console.log("C'est égal");
}
else
{
    console.log("C'est pas égal");
}

console.log(typeof '10');
console.log(typeof 10);
console.log(typeof parseInt('10'));

// 4. Vérifiez si parseFloat('9.8') est exactement égal à 10 if not make it exactly equal with 10.

let float = 9.8

if(parseFloat(float) === 10)
{
    console.log("C'est égal à 10");
}
else
{
    float = 10;
    console.log(float);
}

// 5. Vérifiez si 'on' se trouve à la fois en python et en jargon

if('python'.includes('on') && 'jargon'.includes('on'))
{
    console.log("'on' se trouve à la fois en python et en jargon");
}
else
{
    console.log("'on' ne se trouve ni en python ni en jargon à la fois");
}

// 6. I hope this course is not full of jargon. Vérifiez si jargon est dans la chaine.

console.log('I hope this course is not full of jargon'.includes('jargon'));

// 7. Générer un nombre aléatoire entre 0 et 100 inclusivement.

console.log(Math.random() * 100);

// 8. Générer un nombre aléatoire entre 50 et 100 inclusivement.

let min = Math.ceil(50);
let max = Math.floor(100)
console.log(Math.random() * (max - min) + 50);

// 9. Générez un nombre aléatoire compris entre 0 et 255 inclusivement.

console.log(Math.random() * 255);

// 10. Utilisez substr pour slicer la phrase because because because de la phrase suivante: 'You cannot end a sentence with because because because is a conjunction'

let autrePhrase = 'You cannot end a sentence with because because because is a conjunction'
console.log(autrePhrase.substring(autrePhrase.indexOf('because'), autrePhrase.lastIndexOf(' is')));
