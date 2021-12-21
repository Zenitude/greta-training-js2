// Loops --> Level00

// 1. Itérer de 0 à 10 en utilisant la boucle for, while et do while

for(let i = 0 ; i <= 10 ; i++)
{
    console.log(i);
}

let nb = 0;
while(nb <= 10)
{
    nb;
    console.log(nb);
    nb = nb + 1;
}

let doW = 0;
do
{
    doW 
    console.log(doW);
    doW = doW + 1;
}
while(doW <= 10);

// 2. Itérez 10 à 0 en utilisant la boucle for, while et do while

for(let i = 10 ; i >= 0 ; i--)
{
    console.log(i);
}

let nb2 = 10;
while(nb2 >= 0)
{
    nb2;
    console.log(nb2);
    nb2 = nb2 - 1;
}

let doW2 = 10;
do
{
    doW2 
    console.log(doW2);
    doW2 = doW2 - 1;
}
while(doW2 >= 0);

// 4. Écrivez une boucle qui crée le modèle suivant à l'aide de console.log():

/*#
##
###
####
#####
######
#######*/

let tag = '#';

for(let i = 0 ; i < 7 ; i++)
{
    tag
    console.log(tag);
    tag = tag + '#';
}

// 5. Utilisez une boucle pour affichez le modèle suivant à l'aide de console.log():

/*0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/

let a = 0;

for(let i = 0 ; i <= 10 ; i++)
{
    a = i;
    console.log(a * a);
}

// 6. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que des nombres pairs

for(let i = 0 ; i <= 100 ; i++)
{
    if(i % 2 === 0)
    {
        console.log(i);
    }
}

// 7. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres impairs

for(let i = 0 ; i <= 100 ; i++)
{
    if(!(i % 2 === 0))
    {
        console.log(i);
    }
}

// 8. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres premiers

for(let i = 0 ; i <= 100 ; i++)
{
    if((i % 1 === 0 && i % 13 === 0))
    {
        console.log(i);
    }
}

// 9. Utilisez la boucle for pour parcourir de 0 à 100 et afficher la somme de tous les nombres.

let nbr = 0;
for(let i = 0 ; i <= 100 ; i++)
{
    nbr = nbr + i;
}
console.log(nbr);

// Loops --> Level01

// 1. Développez un script qui génère n'importe quel nombre de caractères aléatoire:

/*fe3jo1gl124g
xkqci4utda1lmbelpkm03rba*/

let resultat = "";
let caracteres = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < (Math.random() * caracteres.length) ; i++) 
{
    resultat += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}

console.log(resultat);

// 2. Ecrivez un script qui génère un numéro de couleur RGB aléatoire.

let rouge = Math.floor(Math.random() * 255);
let vert = Math.floor(Math.random() * 255);
let bleu = Math.floor(Math.random() * 255);

console.log(`rgb(${rouge},${vert},${bleu})`);
