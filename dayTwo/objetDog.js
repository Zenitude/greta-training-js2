// Objects --> Level01

// 1. Créez un objet vide appelé chien

let chien = {};

// 2. Affichez l'objet chien sur la console

console.log(chien);

// 3. Ajoutez le nom, les pattes, la couleur, l'âge et les propriétés de cri pour l'objet chien. La propriété bark est une méthode qui renvoie woof woof

chien.nom = 'Médor';
chien.pattes = 4;
chien.couleur = 'gris';
chien.age = 10;
chien.bark =  'woof woof';

console.log(chien);

// 4. Obtenez le nom, les pattes, la couleur, l'âge et la bark de l'objet chien

console.log(chien.nom, chien.pattes, chien["couleur"], chien["age"], chien.bark);

// 5. Définissez les nouvelles propriétés de l'objet chien: race, getDogInfo

chien.race = 'Doberman';
chien.getDogInfo = `${chien.nom}, ${chien.pattes}, ${chien["couleur"]}, ${chien["age"]}, ${chien.bark}, ${chien.race}`;

console.log(chien.getDogInfo);