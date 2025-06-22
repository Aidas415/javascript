
const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

// 1)būdas: const keys = ['age', 'isMarried', 'name'];
const keys = Object.keys(person);
console.log(keys);              // ['name', 'age', 'isMarried'] 

console.log(person[keys[0]]);        // 99
console.log(person[keys[1]]);        // true
console.log(person[keys[2]]);        // Jonas

for (const key of keys){            //99
    console.log(person[key]);       // true
}                                   // Jonas


// 2)būdas: for-in leidžia viską supaprastinti

for (const key in person){          // Jonas
    console.log(person[key]);       // 99
}                                   // true

console.log('--------------');

// 1)
const text = 'pavasaris';
const symbols = {};
//for (const symbols of text);
for (const s of text) {
    if (symbols[s]) {
        symbols[s]++;
    } else {
        symbols[s] = 1;
    }
}
console.log(symbols);      // {p: 1, a: 3, v: 1, s: 2, r: 1, i: 1}
  
let max = 0;
for (const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}
console.log(max);          // 3

const maxSymbols = [];
for(const s in symbols) {
    if (symbols[s] === max) {
        maxSymbols.push(s);
    }
}
console.log(maxSymbols);   // ['a']

console.log('---------------')

const text1 = 'papajus';
const symbols1 = {};
for (const s of text1) {
    if (symbols1[s]) {
        symbols1[s]++;
    } else {
        symbols1[s] = 1;
    }
}
console.log(symbols1);     // {p: 2, a: 2, j: 1, u: 1, s: 1}


let max1 = 0;
for(const s in symbols1) {
    if (symbols1[s] > max1) {
        max1 = symbols1[s];
    }
}
console.log(max1);         // 2

const maxSymbols1 = [];
for(const s in symbols1) {
    if (symbols1[s] === max1) {
        maxSymbols1.push(s);
    }
}
console.log(maxSymbols1);  // ['p', 'a'] 

console.log('-----------------')
