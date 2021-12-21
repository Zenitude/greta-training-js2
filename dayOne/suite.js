// Data Types --> Level01

// 1. Déclarez une variable nommée defi et attribuez-lui une valeur initiale 'Pratiquer les algorithmes en JavaScript'.

let defi = 'Pratiquer les algorithmes en JavaScript';


// 2. Affichez la chaîne sur la console du navigateur en utilisant console.log()

console.log(defi);

// 3. Affichez le length de la chaîne sur la console du navigateur en utilisant console.log()

console.log(defi.length);

// 4. Remplacez tous les caractères de chaîne en majuscules en utilisant la méthode toUpperCase()

console.log(defi.toUpperCase());

// 5. Remplacez tous les caractères de chaîne par des lettres minuscules en utilisant la méthode toLowerCase()

console.log(defi.toLowerCase());

// 6. Découpez (slice) le premier mot de la chaîne en utilisant la méthode substr() ou bien substring()

console.log(defi.substring(0, 9));

// 7.Découpez la phrase Jours en JavaScript from 10 jours en JavaScript.

let phrase = '10 jours en JavaScript';

// 8. Vérifiez si la chaîne contient un mot Script en utilisant la méthode includes()

console.log(phrase.includes('Script'));

// 9. Divisez la chaine string dans un array en utilisant la méthode split()

let array = ['10', 'jours', 'en', 'JavaScript'];

// 10. Divisez la chaine "10 Jours en JavaScript" à l'espace en utilisant la méthode split()

let tab = phrase.split(' ')
console.log(tab);

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split divisez la chaîne à la virgule et changez-la en tableau.

let divers = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let newArray = divers.split(', ');
console.log(newArray);

// 12. Changez 10 Jours en JavaScript à 10 Jours en PHP en utilisant la méthode replace() .

console.log(phrase.replace('JavaScript', 'PHP'));

// 13. Qu'est-ce que le caractère à l'index 15 dans la chaine "10 Jours en JavaScript"? Utilisez la méthode charAt() .

console.log(phrase.charAt(15));

// 14. Quel est le code de caractère de J dans la chaine '10 Jours en JavaScript' en utilisant charCodeAt()

console.log(phrase.charCodeAt('J'));

// 15. Utilisez indexOf pour déterminer la position de la première occurrence de a dans 10 Jours en JavaScript

console.log(phrase.indexOf('a'));

// 16. Utilisez lastIndexOf pour déterminer la position de la dernière occurrence de a dans 10 Jours en JavaScript.

console.log(phrase.lastIndexOf('a'));

// 17. Utilisez indexOf pour trouver la position de la première occurrence du mot parceque dans la phrase suivante:'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'

let nouvellePhrase = "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
console.log(nouvellePhrase.indexOf('parceque'));

// 18. Utilisez lastIndexOf pour trouver la position de la dernière occurrence du mot parceque dans la phrase suivante:'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'

console.log(nouvellePhrase.lastIndexOf('parceque'));

// 19. Utilisez search pour trouver la position de la première occurrence du mot parceque dans la phrase suivante:'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'

console.log(nouvellePhrase.search('parceque'));

// 20. Utilisez la méthode trim() pour supprimer tout espace blanc de fin au début et à la fin d'une chaîne. ' 10 Jours en JavaScript '.

let phraseSuivante = ' 10 Jours en JavaScript ';
console.log(phrase.trim());

// 21. Utilisez la méthode startsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai

console.log(phrase.startsWith('10'));

// 22. Utilisez la méthode endsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai

console.log(phrase.endsWith('Script'));

// 23. Utilisez la méthode match() pour trouver tous les a dans "10 Jours en JavaScript"

console.log(phrase.match('a'));

// 24. Utilisez la méthode concat() et fusionner '10 Jours en' avec 'JavaScript' tà une seule chaîne, '10 Jours en JavaScript'

let debutPhrase = '10 Jours en';
let finPhrase = 'JavaScript'
console.log(debutPhrase.concat(finPhrase));

// 25. Utilisez la méthode repeat() pour afficher "10 Jours en JavaScript" 2 fois

console.log(phrase.repeat(2));