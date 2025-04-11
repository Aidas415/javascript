
// sort Surikiuoja tekstus abėcėlės tvarka. Atskirai didž. ir maž. raidės. 
const text = ['labas', 'rytas', 'Lietuva'];
console.log(text);  // ['labas', 'rytas', 'Lietuva']
text.sort();
console.log(text);  // ['Lietuva', 'labas', 'rytas']


const texts = ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda'];
console.log(texts); // ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda]
texts.sort();
console.log(texts); // ['Anakonda', 'Lietuva', 'Zirnis', 'aviza', 'duona', 'labas', 'rytas']

const pseudo = ['d', 'b', 'ca', 'pf', 'ba', 'cc', 'baa', 'bac'];
pseudo.sort()
console.log(pseudo); // ['b', 'ba', 'baa', 'bac', ca', 'cc', 'd', 'pf' ]    

console.clear();
console.log('------------')


const numbers = [10, 2, 8, 1, 12, 23, 4, 6].sort((a, b) => a - b);
console.log(numbers);   // [1, 2, 4, 6, 8, 12, 23]

numbers.sort((a, b) => b - a);
console.log(numbers);   // [23, 12, 10, 8, 6, 4, 2, 1]

// sąrašą objektų galima surikiuoti tarkim pagal amžių
const people = 
[
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
];
people.sort((a,b) => a.age - b.age);
console.log(people);    // {name: 'Ona', age: 66}
                        // {name: 'Petras', age: 77}
                        // {name: 'Maryte', age: 88}
                        // {name: 'Jonas', age: 99}
