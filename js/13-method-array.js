/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// push Į sąrašą prideda po naują narį iš galo
const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4, 6);
console.log(list);

list.push(1, 2, 3, 4, 5);
console.log(list);

console.clear();

console.log('----------')

// Padvigubinti skačius masyve
const numbers = [10, 2, 8, 4, 6];
const doubleNumbers = [];
for (let i = 0; i < numbers.length; i++)
    {
        const number = numbers[i];
        //console.log('---', number, number * 2);
        doubleNumbers.push(number * 2);
    }
console.log(doubleNumbers);

console.log('----------')

// Vardų ilgiai masyve
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSize = [];
const nameFirstLetters = [];
const upperCaseNames = [];
for (let i = 0; i < names.length; i++)
    {
        const name = names[i];
        console.log('---', name, name.length, name[0]);
        nameSize.push(name.length);
        nameFirstLetters.push(name[0]);
        upperCaseNames.push(name.toUpperCase())
    }
console.log(nameSize);
console.log(nameFirstLetters);
console.log(upperCaseNames);

// 

let n1 = [1, 11, 111];
let n2 = [2, 22, 222, 2222];
const n12 = [];
//const n12 = [1, 11, 111, 2, 22, 222, 2222];
for (let i = 0; i < n1.length; i++)
    {
        n12.push(n1[i]);
    }
for (let i = 0; i < n2.length; i++)
    {
        n12.push(n2[i]);
    }
console.log(n12);

console.clear();

console.log('------------');

const numbers2 = [10, 2,  8, 4, 6]; 
console.log(numbers2);

numbers2.push(9);
console.log(numbers2);

// pop() Pašalina sąrašo narį. Po vieną nuo galo.
// Bei gr1žina tai, ką pašalino
const g1 = numbers2.pop();
const g2 = numbers2.pop();
console.log(numbers2, g1, g2);



console.log('------------');

// unshift Į sąrašą prideda po naują narį iš priekio
numbers2.unshift(11);
numbers2.unshift(22);
numbers2.unshift(33);
console.log(numbers2);

// shif Pašalina pirmąjį narį iš sąrašo
const g3 = numbers2.shift();
const g4 = numbers2.shift();

console.log(numbers2, g3, g4);


















