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

const p312 = {...p3, ...p1, ...p2};
console.log(p312);     // {c: 3, a: 1, b; 2}

const p4 = {d: 4, ...p3, c: 99};
console.log(p4);       // {d: 4, c: 99, a; 7}

console.log('------------')

// "...Rest" naudojmas perdaryti(redaguoti narių eiliškumą) tą patį masyvą 
const marks = [10, 2, 8, 4, 6];
const [first, second, ...rest] = marks
console.log(first);    // 10 
console.log(second);   // 2 
console.log(rest);     // [8, 4, 6] 

const marks1 = [first, second, ...rest]; 
console.log(marks1);   // [10, 2, 8, 4, 6] 

console.log('------------')
// su tekstais

// su slice paimtas masyvo likutis
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const n1 = names[0];
const n2 = names[1];
const n34 = names.slice(2); 

console.log(n1);        // Jonas
console.log(n2);        // Maryte
console.log(n34);       // ['Petras', 'Ona'] 

// su indeksais paimti pavieniai masyvo nariai
const [x, y, z, q, k] = names;
console.log(x);         // Jonas
console.log(y);         // Maryte
console.log(z);         // Petras
console.log(q);         // Ona
console.log(k);         // undefined

// arba su "..." sukomplektuotas masyvo likutis
const [x1, y1, ...z1] = names;
console.log(x1);        // Jonas
console.log(y1);        // Martyte
console.log(z1);        //['Petras', 'Ona']

// su miksais
const mix = [1, 'asd', true, [], {}, undefined]; 
const [m1, m2, m3, ...mRest] = mix;
console.log(m1);        // 1
console.log(m2);        // asd
console.log(m3);        // true
console.log(mRest);     // [], {}, undefined

console.clear();
console.log('-------------');

// su objektais
const person = {
    address: 'Miestas g. 7',
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const pName = person.name;
const pAge = person.age;
//const pName = person.name;
console.log(pName);         // Jonas
console.log(pAge);          // 99

// arba

const {name, age, ...p} = person;
console.log(name);          // Jponas
console.log(age);           // 99
console.log(p);             // address: 'Miestas g. 7', isMarried: true


const students = [
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},

];

// Studentui vardu Jonas yra 99 metai
console.log('----####----');

// su for
for (let i = 0; i < students.length; i++){
    const student = students[i];
    //console.log(student);
    const name = student.name;
    const age = student.age;
    const result = `Studentui vardu ${name} yra ${age} metai.`
    console.log(result);
};

console.log('----####----');

// su for-of

for (const student of students){
    const name = student.name;
    const age = student.age;
    const result = `Studentui vardu ${name} yra ${age} metai.`;
    console.log(result);
};

console.log('----####----')

// bei abu būdai su destrukturizavimu

for (let i  = 0; i < students.length; i++){
    const {name, age} = students[i];
    const result = `Studentu vardu ${name} yra ${age} metai.`;
    console.log(result);
};

console.log('----####----')

for (const student of students){
    const {name, age} = student;
    const result = `Studentui vardu ${name} yra ${age} metai.`;
    console.log(result)
};

console.log('----####----');

// 
for (const {name, age} of students){
    const result = `Studentui vardu ${name} yra ${age} metai.`;
    console.log(result);
};

console.clear();

const numbers = [
    [0],
    [1, 11],
    [2, 22, 222],
    [3, 33, 333, 3333],
    [4],
    [5],
    [6],    
];
// Pirmas skaicius yra x ir dar yra y papildomu skaiciu.

for (const numberList of numbers){
    const first = numberList[0];
    const rest = numberList.slice(1);
    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaiciu.`;
    console.log(result);
};

// su destrukturizavimu
for (const numberList of numbers) {
    const [first, ...rest] = numberList;
    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaiciu.`
    //console.log(result);
}
// arba net
for (const [first, ...rest] of numbers) {
    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaiciu.`
    //console.log(result);
}

console.clear();
















