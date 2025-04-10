// "..." - tai masyvo kopijavimui skirta funkcija

const a1 = [1, 11, 111];
const a2 = [2, 22, 222];
const a3 = [3, 33, 333];
const a4 = [4, 44, 444];

// [1]




const b12 = [...a1, ...a2]
console.log(b12)            // [1, 11, 111, 2, 22, 222]

const b423 = [...a4, ...a2, ...a3]
console.log(b423)



// [7, 4, 44, 444, 88]
const c1 = [7, ...a4, 88]
console.log(c1);


const o1 = {name: 'Jonas'};
const o2 = {age: 99};
const o3 = {isMarried: true};

const o12 = {...o1, ...o2};
console.log(o12)

const o123 = {...o1, ...o2, ...o3};
console.log(o123);

const p1 = {a: 1};
const p2 = {a: 2};
const p3 = {a: 3};

console.log('------------')

const marks = [10, 2, 8, 4, 6];
const [first, second, ...rest] = marks
console.log(first);
console.log(second);
console.log(rest);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const n1 = names[0];
const n2 = names[1];
const n34 = names.slice(2); 

console.log(n1);            // Jonas
console.log(n2);            // Maryte
console.log(n34);           // ['Petras', 'Ona'] 













