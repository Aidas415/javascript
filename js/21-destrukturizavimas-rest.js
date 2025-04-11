// "..." - tai masyvo kopijavimui skirta funkcija

const a1 = [1, 11, 111];
const a2 = [2, 22, 222];
const a3 = [3, 33, 333];
const a4 = [4, 44, 444];

// jeigu siekimybė būtų [1, 11, 111, 2, 22, 222]
// tai galima panaudoti "concat"
const a12 = a1.concat(a2)
console.log(a12);          // [1, 11, 111, 2, 22, 222]

// bet galima ir kopijuoti masyvą "..."
const b12 = [...a1, ...a2]
console.log(b12)           // [1, 11, 111, 2, 22, 222]

const b423 = [...a4, ...a2, ...a3]
console.log(b423)          // [4, 44, 444, 2, 22, 222, 3, 33, 333]

const b333 = [...a3, ...a3, ...a3];
console.log(b333);         // [3, 33, 333, 3, 33, 333, 3, 33, 333]


//  galima įterpti į vidurį [7, 4, 44, 444, 88]
const c1 = [7, ...a4, 88]
console.log(c1);           // [7, 4, 44, 444, 88]

// su objektais

const o1 = {name: 'Jonas'};
const o2 = {age: 99};
const o3 = {isMarried: true};

const o12 = {...o1, ...o2};
console.log(o12)      // {name: 'Jonas', age: 99}

const o123 = {...o1, ...o2, ...o3};
console.log(o123);    // {name: 'Jonas', age: 99, isMarried: true}

const p1 = {a: 1};
const p2 = {b: 2};
const p3 = {c: 3, a: 7};

const p12 = {...p1, ...p2};
console.log(p12);     // {a: 1, b: 2}

// o įkeliant ant viršaus (kaip raktą a:), reikšmė atsinaujina (įrašoma paskutinė)
const p123 = {...p1, ...p2, ...p3};
console.log(p123);     // {a: 7, b: 2, c; 3}












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













