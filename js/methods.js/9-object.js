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
console.log(student.parients.length);
console.log(student.parients[0].name);
console.log(student.parients[1].name);
console.log(student.parients[0].phoneNumbers.length);
console.log(student.parients[1].phoneNumbers[1]);

const studentName1 = 'Jonas';
const studentAge1 = 99;
const studentIsMarried1 = true;
const studentName2 = 'Maryte';
const studentAge2 = 88; 
const studentIsMarried2 = false;

//                name, age, isMarried

const student1 = ['Jonas', 99, true];
const student2 = ['Maryte', 88, false];
const student3 = ['Petras', false, 77,];
const student4 = [true, 66, 'Ona'];

const stud1 = 
{
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const stud2 = 
{
    name: 'Maryte', 
    age: 88,
    isMarried: false,
};
console.log(stud1.name);
console.log(stud2.name);

function createArray(number) {
    const newArray = [];
    let numberString = '';
    for (let counter = 0; counter < number; counter++) {
        newArray.push(number[counter]);
    }
    return newArray;
}

console.log(createArray(1),[1]);
console.log(createArray(2),[1,2]);
console.log(createArray(3),[1,2,3]);
console.log(createArray(4),[1,2,3,4]);
console.log(createArray(5),[1,2,3,4,5]);




