
// sort
const texts =['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda'];
console.log(texts);

texts.sort();
console.log(texts);



const numbers = [10, 1, 2, 8, 4, 6].sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);


const people = 
[
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
];

people.sort((a,b) => a.age - b.age);
console.log(people);











