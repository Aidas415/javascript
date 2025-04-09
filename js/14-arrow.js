// Rodyklinė funkcija

const n1 = 7;
const n2 = 5;

function sum(a, b)
{
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);    // 7 + 5 = 12

// kintamajam priskirta anoniminė funkcija
const minus = function(a, b)
{
    return a - b;
}
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);   // 7 - 5 = 2

// 3) arrow function
const multi = (a, b) =>
{
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);   // 7 * 5 = 35

// 3a) arrow function
// jeigu logikos bloke yra tik 1 sąlyga,
// tai galima nerašyti {return}
const div = (a, b) => a / b

console.log(`${n1} / ${n2} = ${div(n1, n2)}`);      // 7 / 5 = 1.4          // 

// 3b) arrow function
// jeigu paramertų bloke yra tik 1 parametras,
// tai galima nerašyti skliaustų
const sqr = a => a * a
console.log(`${n1} * ${n1} = ${sqr(n1)}`);          // 49
console.log(`${n2} * ${n2} = ${sqr(n2)}`);          // 25

// funkcija grąžina vardo pirmą raidę
const firstLetter = name => name[0];
console.log(firstLetter('Jonas'));                  // J
console.log(firstLetter('Maryte'));                 // M

// funkcija grąžina pataisytą vardą




const correctName =  (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();

console.log(correctName('jonas'));                  // Jonas
console.log(correctName('Maryte'));                 // Maryte
console.log(correctName('peTRas'));                 // Petras
console.log(correctName('ONA'));                    // Ona

// Funkcija grąžina atbulinį tekstą
const reverseString = text => text.split('').reverse().join('');

console.log(reverseString('labas'));                // sabal
console.log(reverseString('kedes'));                // sedek
console.log(reverseString('sagos'));                // sogas
console.log(reverseString('alus'));                 // sula

