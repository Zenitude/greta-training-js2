// Arrays --> Level00

// 1. Déclarez un tableau vide.

let tableau = [];

// 2. Déclarer un tableau avec plus de 5 éléments.

let tabPlusDe5 = [1, 2, 3, 4, 5, 6, 7]

// 3. Trouvez la longueur (length) de votre tableau.

console.log(tabPlusDe5.length);

// 4. Obtenez le premier élément, l'élément du milieu et le dernier élément du tableau.

console.log(tabPlusDe5[0]);
console.log(tabPlusDe5[Math.floor(tabPlusDe5.length/2)]);
console.log(tabPlusDe5[tabPlusDe5.length-1]);

/* 5. Déclarez un tableau appelé mixedDataTypes, placez différents types de données dans le tableau et recherchez la longueur du tableau. 
La taille du tableau doit être supérieure à 5 */

let mixedDataTypes = [10, 'chaine', true, 'bidule', 64, false];
console.log(mixedDataTypes.length);

// 6. Déclarez un tableau nommé itCompanies et attribuez les valeurs initiales: Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Affichez le tableau avec console.log()

console.log(itCompanies);

// 8. Affichez le nombre des entreprises dans le tableau.

console.log(itCompanies.length);

// 9. Affichez la première entreprise, la moyenne et la dernière entreprise.

console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length-1]);

// 10. Affichez chaque entreprise.

itCompanies.forEach(entreprise =>
{
    console.log(entreprise);
});

// 11. Changez le nom de chaque entreprise en majuscules un par un et affichez-les

itCompanies.forEach(entreprise =>
{
    console.log(entreprise.toUpperCase());
});

// 12. Affichez le tableau sous forme de phrase: Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises d'IT.

console.log(itCompanies.join(', '));

// 13. Vérifiez si une certaine entreprise existe dans le tableau itCompanies. S'il existe, retournez l'entreprise sinon retournez une société introuvable.

let ent = 'Facebook';
if(itCompanies.includes(ent))
{
    console.log(`La compagnie ${ent} existe`);
}
else
{
    console.log('Société introuvable');
}

// 14. (Facultatif) Filtrez les entreprises qui ont plus d'un 'o' sans utiliser la méthode filter



// 15. Trier le tableau en utilisant la méthode sort()

console.log(itCompanies.sort());

// 16. Inversez le tableau en utilisant la méthode reverse()

console.log(itCompanies.reverse());

// 17. Découpez les 3 premières entreprises du tableau

console.log(itCompanies.slice(3));

// 18. Découpez les 3 dernières entreprises du tableau

console.log(itCompanies.slice(-3));

// 19. Séparez (the middle) entreprise d'IT ou des entreprises à partir du tableau.



// 20. Supprimez la première entreprise d'IT à partir du tableau.

itCompanies.shift();
console.log(itCompanies);
itCompanies.unshift('Oracle');

// 21. Supprimez (the middle) entreprise d'IT ou des entreprises à partir du tableau.


// 22. Supprimez la dernière entreprise d'IT à partir du tableau.

let tabSecours = itCompanies.pop();
console.log(itCompanies);

// 23. Supprimez toutes les entreprises d'IT.*/

itCompanies = [];
console.log(itCompanies);