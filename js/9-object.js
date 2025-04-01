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

//Standartine sintakse, kai paiimi reikšmę
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

//Supaprastinta sintakse
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

const demo = 
{
    'color': 'red',
    5: 77,
    '55': 7777,
    'is married': true,
}
console.log(demo['color']);
console.log(demo['5']);
console.log(demo[5]);
console.log(demo['55']);
console.log(demo[55]);
console.log(demo['is married']);
console.log(demo.color);

const pc = 
{
    cpuCores: 8,
    ram: 16,
    diskSpace: 512,
    diskType: 'ssd',
    os:'win10',
}
console.log(pc);

pc.ram = 32;
console.log(pc);

pc.os = 'win98';
console.log(pc)

// This PC has X cores.

const s1 = `This PC has ${pc.cpuCores} cores.`;
const s2 = `This PC has ${pc['cpuCores']} cores.`;

console.log(s1);
console.log(s2);

const student = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phoneNambers: [],
    parients: 
    [
        {
            name: 'Petras',
            age: 77,
            phoneNumbers: [11111111, 333333333],
        },
        {
            name: 'Ona',
            age: 66,
            phoneNumbers: [222222222, 444444444],
        },
    ],
};
console.log(student.name);
//console.log(student.phoneNumbers.length);
console.log(student.parients.length);
console.log(student.parients[0].name);
console.log(student.parients[1].name);
console.log(student.parients[0].phoneNumbers.length);
console.log(student.parients[1].phoneNumbers[1]);













