/*
OBJECT - objektas, (kitose kalbose siek tiek panasu i: hashmap, dictionary)
*/

const empty = {};
console.log(empty);

const person = 
{
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(person);

// Sveiki, namo vardas X.
console.log(`Sveiki, mano vardas ${person['name']}`);

//Man yra X metu.
console.log(`Man yra ${['age']} metu.`);

//Standartine sintakse
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

//Supaprastinta sintakse
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

const demo = 
{
    'color': "red",
    5: 77,
    '5': 5,
    'is married': true,
}
console.log(demo['color']);
console.log(demo['5']);












const pc = 
{
    cpuCores: 8,
    ram: 16,
    diskSpace: 512,
    diskType: 'ssd',
    os:'win10',
}
console.log(pc.ram);


console.log(pc);

















