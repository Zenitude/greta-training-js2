// 1. Créez un fichier séparé countries.js et stockez le tableau countries dans ce fichier, créez un fichier distinct web_techs.js et stockez le tableau webTechs dans ce fichier. Accédez aux deux fichiers dans le fichier main.js

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'Node',
    'Bootstrap'
    ]

// 5. Dans le tableau 'webTechs', vérifiez si 'Sass' existe dans le tableau et s'il existe, affichez «Sass est un préprocesseur CSS». S'il n'existe pas, ajoutez Sass au tableau et affichez-le.

if(webTechs.includes('Sass'))
{
   console.log('Sass est un précoprocesseur CSS'); 
}
else
{
    webTechs.push('Sass');
}
console.log(webTechs);

