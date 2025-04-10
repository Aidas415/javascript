
const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

//const keys = ['age', 'isMarried', 'name'];
const keys = Object.keys(person);
console.log(keys);              // ['name', 'age', 'isMarried'] 

console.log(person[keys[0]]);        // 99
console.log(person[keys[1]]);        // true
console.log(person[keys[2]]);        // Jonas

for (const key of keys){            //99
    console.log(person[key]);       // true
}                                   // Jonas


// for-in leidžia viską supaprastinti

for (const key in person){          // Jonas
    console.log(person[key]);       // 99
}                                   // true

// 1)
const text = 'Labas';

const symbols = {};

for (const symbols of text [
    
])


/*
symbols['L'] = 1;
symbols['a'] = 1;
symbols['b'] = 1;
symbols['a'] += 1;
symbols['s'] = 1;
*/
console.log(symbols);       // {L: 1, a: 2, b: 1, s: 1}








// 2)
const counts = {
    'L': 1,
    'a': 2,
    'b': 1,
    's': 1,
};

// 3)
const max = 2;
const letter = 'a';

console.log('-----------------')

const obj = {
    name: 'Maryte',
};
console.log(obj); // {name: 'Maryte'}

obj.age = 88;
console.log(obj); // {name: 'Maryte', age: 88}

obj.isMarried = false;
console.log(obj); // {name: 'Maryte', age: 88, isMarried: false}

console.log('-----------------');






