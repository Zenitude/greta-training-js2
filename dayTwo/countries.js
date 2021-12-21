// Arrays --> Level01

// 1. Créez un fichier séparé countries.js et stockez le tableau countries dans ce fichier, créez un fichier distinct web_techs.js et stockez le tableau webTechs dans ce fichier. Accédez aux deux fichiers dans le fichier main.js
const countries = [
  'USA',
  'Canada',
  'Denmark',
  'Algeria',
  'Tunisia',
  'Germany',
  'China',
  'Morocco',
  'Ireland',
  'Japan',
  'France'
]

// 4. Dans le tableau 'countries', vérifiez si 'Morocco existe dans le tableau s'il existe, affichez 'MOROCCO'. S'il n'existe pas, ajoutez à la liste des pays.

if(countries.includes('MOROCCO'))
{
  console.log("MOROCCO n'existe pas");
  countries.push('MOROCCO');
}

