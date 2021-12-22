// Objects --> Level02

const users = 
{
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: 
    {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },

    Paul: 
    {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// 1. Trouvez la personne qui possède de nombreuses compétences dans l'objet users.

let tabSkills = [];
let nomUser = '';

for(const user in users) 
{
    tabSkills.push(users[user].skills.length);

    if(users[user].skills.length === Math.max(...tabSkills))
    {
      nomUser = user;
    }
}

console.log(nomUser);

// 2.1. Comptez les users connectés

let tabLoggin = [];

for(const user in users) 
{
    if(users[user].isLoggedIn === true)
    {
      tabLoggin.push(user);
    }
}

console.log(tabLoggin.length);

// 2.2. Comptez les users ayant 50 points et plus.

let tabPoints = [];

for(const user in users) 
{
    if(users[user].points >= 50)
    {
      tabPoints.push(user);
    }
}

console.log(tabPoints.length);

// 3. Recherchez des personnes qui sont des développeurs MERN Stack à partir de l'objet users. MERN (MongoDB, Express, React, Node)

let tabDevMERN = [];

for(const user in users) 
{
    if(users[user].skills.includes('MongoDB') || users[user].skills.includes('Express') || users[user].skills.includes('React') || users[user].skills.includes('Node'))
    {
      tabDevMERN.push(user);
    }
}

console.log(tabDevMERN);

// 4. Définissez votre nom dans l'objet users sans modifier l'objet utilisateur d'origine

users.Rudy = 
{
    email: 'mollet.rudy@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'SQL'],
    age: 33,
    isLoggedIn: false,
    points: 10
}

console.log(users);

// 5. Obtenez toutes les clés ou propriétés de l'objet users

let tabPropUsers = []
for(const user in users) 
{
    tabPropUsers.push(user);
}
console.log(tabPropUsers);

// 6. Obtenez toutes les valeurs de l'objet users

console.log(Object.values(users));

