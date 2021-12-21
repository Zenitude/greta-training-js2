// Conditions --> Level02

// 1. Écrivez un code qui peut donner des notes aux élèves en fonction de leurs scores:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = 70;
let note;

if(score >= 80 )
{
    note = 'A';
}
else if(score >= 70)
{
    note = 'B';
}
else if(score >= 60)
{
    note = 'C';
}
else if(score >= 50)
{
    note = 'D';
}
else
{
    note = 'F';
}

console.log(note);

// 2. Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. Si l'entrée utilisateur est: - Septembre, octobre ou novembre, la saison est l'automne. - Décembre, janvier ou février, la saison est l'hiver. - Mars, avril ou mai, la saison est le printemps - Juin, juillet ou août, la saison est l'été

// Exercices Aléatoires --> Level03

// 1. Ecrire un programme qui indique le nombre de jours dans un mois.

  /*Enter un mois: Janvier
  Janvier a 31 jours.

  Enter un mois: JANVIER
  Janvier a 31 jours

  Enter un mois: Fevrier
  FEvrier a 28 jours.

  Enter un mois: FEvrier
  Fevrier a 28 jours.*/

  let moisEntier = 'JANVIER';
  moisEntier = moisEntier.toLowerCase();
  moisEntier = moisEntier.split('');
  moisEntier[0] = moisEntier[0].toUpperCase();
  moisEntier = moisEntier.join('');
  console.log(moisEntier);

  if(moisEntier === 'Janvier' || moisEntier === 'Mars' || moisEntier === 'Mai' || moisEntier === 'Juillet' || moisEntier === 'Août' || moisEntier === 'Octobre' || moisEntier === 'Décembre')
  {
    console.log(`${moisEntier} a 31 jours`);
  }
  else if(moisEntier === 'Avril' || moisEntier === 'Juin' || moisEntier === 'Septembre' || moisEntier === 'Novembre')
  {
    console.log(`${moisEntier} a 30 jours`);
  }
  else
  {
    console.log(`${moisEntier} a 28 ou 29 jours`);
  }