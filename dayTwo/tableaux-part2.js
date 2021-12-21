// 2. Supprimez d'abord toutes les ponctuations et changez la chaîne en tableau et comptez le nombre de mots dans le tableau.

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.';
text = text.split('.').join('');
text = text.split(',').join('');
let tabText = text.split(' ');
console.log(tabText);
console.log(tabText.length);

// 3. Dans le panier suivant (shoppingCart), ajoutez, supprimez, modifiez des articles

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// ajoutez 'Meat' au début de votre panier s'il n'a pas déjà été ajouté.

shoppingCart.unshift('Meat');
console.log(shoppingCart);

// ajoutez 'Sugar' à la fin de votre panier s'il n'a pas déjà été ajouté.

shoppingCart.push('Sugar');
console.log(shoppingCart);

// supprimez 'Honey' si vous êtes allergique au miel

shoppingCart.splice(4,1);
console.log(shoppingCart);

// modifier le thé en 'Green Tea'

shoppingCart.splice(3,1,'Green Tea');
console.log(shoppingCart);

// 6.Concaténez les deux variables suivantes et stockez-les dans une variable fullStack.

const frontEnd = ['HTML', 'CSS', 'JS', 'VueJs', 'VueX']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


