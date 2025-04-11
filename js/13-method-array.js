/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// push Į sąrašą prideda po naują narį iš galo
const list = [];
console.log(list);              // []

list.push(10);                  // [10]
console.log(list);

list.push(2);
console.log(list);              // [10, 2]

list.push(8);
console.log(list);              // [10, 2, 8]

list.push(4, 6);
console.log(list);              // [10, 2, 8, 4, 6]

list.push(1, 2, 3, 4, 5);       // [10, 2, 8, 4, 6, 1, 2, 3, 4, 5]
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
console.log(doubleNumbers);     // [20, 4, 16, 8, 12]

console.log('----------')

// Vardų ilgiai masyve
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSize = [];
const nameFirstLetters = [];
const toUpperCaseNames = [];
for (let i = 0; i < names.length; i++)
    {
        const name = names[i];
        console.log('---', name, name.length, name[0]); //---Jonas 5 J
        nameSize.push(name.length);                     //---Maryte 6 M
        nameFirstLetters.push(name[0]);                 //---Petras 6 P
        toUpperCaseNames.push(name.toUpperCase())       //---Ona 3 O
    }
console.log(nameSize);                 // [5, 6, 6, 3]
console.log(nameFirstLetters);         // [J, M, P, O]
console.log(toUpperCaseNames);        

console.clear();
 
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
console.log(n12);                      //

//console.clear();

console.log('------------');

const numbers2 = [10, 2,  8, 4, 6]; 
console.log(numbers2);                 // [10, 2, 8, 4, 6]

numbers2.push(9);
console.log(numbers2);                 // [10, 2, 8, 4, 6, 9]

// pop() Pašalina sąrašo narį. Po vieną nuo galo.
// Bei gr1žina tai, ką pašalino
const g1 = numbers2.pop();
const g2 = numbers2.pop();
console.log(numbers2, g1, g2);          // [10, 2, 8, 4] 9 6

console.log('------------');

// unshift Į sąrašą prideda po naują narį iš priekio
numbers2.unshift(11);
numbers2.unshift(22);
numbers2.unshift(33);
console.log(numbers2);                  // [33, 22, 11, 10, 2, 4]

// shif Pašalina pirmąjį narį iš sąrašo
const g3 = numbers2.shift();
const g4 = numbers2.shift();

console.log(numbers2, g3, g4);          // [11, 10, 2, 8, 4] 33 22

const magic = [11, 22, 33, 44, 55];     
console.log(magic.includes(5));         // false
console.log(magic.includes(55));        // true

console.log(magic.indexOf(5));          // -1
console.log(magic.indexOf(55));         // 4

console.clear();

console.log('------------');

const texts = ['agurkas', 'pomidoras', 'svogunas', 'paprika'];

// reikalingi produktai: a, b, c, d.
const products = `reikalingi produktai: ${texts.join(', ')}.`;
console.log(products);      // reikalingi produktai: agurkas, pomidoras, svogunas, paprika.

console.log('------------');

console.log(texts); // [agurkas, pomidoras, svogunas, paprika]
texts.reverse();
console.log(texts); // [paprika, svogunas, pomidoras, agurkas]

// concat - sujungia masyvus

const c1 = [1, 11];
const c2 = [2, 22];
const c3 = [3, 33];
const c4 = [4, 44];

const c12 = c1.concat(c2);  
console.log(c12);       // [1, 11, 2, 22]

const c34 = c3.concat(c4);
console.log(c34);       // [3, 33, 4, 44]

const c123 = c1.concat(c2).concat(c3);
console.log(c123);      // [1, 11, 2, 22, 3, 33]

const c1234 = c1.concat(c2, c3, c4);
console.log(c1234);     // [1, 11, 2, 22, 3, 33, 4, 44]

const c111 = c1.concat(c1, c1);
console.log(c111);      // [1, 11, 1, 11, 1, 11]

console.clear()

// splice "ištrina masyvą nuo nurodytos pozicijos. galima nurodyti kiek narių ištrinti(antru dėmeniu)"

const h = [11, 22, 33, 44, 55];
console.log(h);         // [11, 22, 33, 44, 55]
h.splice(3);
console.log(h);         // [11, 22, 33]
const h1 = [11, 22, 33, 44, 55];
h1.splice(0, 3);        
console.log(h1);        // [44, 55]
const h3 = [11, 22, 33, 44, 55];
h3.splice(1, 3)         
console.log(h3);        // [11, 55]
const h4 = [11, 22, 33, 44, 55];
h4.splice(2, 2);
console.log(h4);        // [11, 22, 55]

//           0   1   2   3   4
const h5 = [11, 22, 33, 44, 55];
h5.splice(1, 2);
console.log(h5);        // [11, 44, 55] 

// rodyklinė funkcija
const f = s => s[0];

// MAP - ciklo būdu atlieka nurodytus veiksmus su kiekvienu nariu 
const k = [10, 2, 8, 4, 6];
const k2 = [];

for(const n of k) {
    k2.push(n * 2);
}
console.log(k2);        // [20, 4, 16, 8, 12]

console.log('--------------')

function triple(n) {
    return n * 3;
}
const k3 = k.map(triple);
console.log(k3);        // [30, 6, 24, 12, 18]

const quadro = n => n * 4;
const k4 = k.map(quadro); 
console.log(k4);        // [40, 8, 32, 16, 24]


const k5 = k.map(n => n * 5);
console.log(k5);        // [50, 10, 40, 20, 30]


const k6 = k.map(n => n);
console.log(k6);        // [10, 2, 8, 4, 6]


const k7 = k.map(n => n +1);
console.log(k7);        // [11, 3, 9, 5, 7]

// su tekstais

const dict = ['pomidoras', 'agurkas', 'bulve'];
const dict2 = dict.map(w => w[0]);
console.log(dict2);     // ['p', 'a', 'b']

const dict3 = dict.map(w => w.length);
console.log(dict3);     // [9, 7, 5]

const dict4 = dict.map(w => w[0].toUpperCase() + w[1] + w[2] + ' ' + w.length);
console.log(dict4);     // ['Pom 9', 'Agu 7', 'Bul 5']

console.log('------------');


const people = [
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
    {name: 'Peras', age: 77},
    {name: 'Ona', age: 66},
];
const people100 = people.map(p => `'${p.name} liko ${100 - p.age} metai.'`);
console.log(people100);     // "Jonas liko 1 metai."
                            // "Maryte liko 12 matai."    
                            // "Petras liko 23 metai."
                            // "ona liko 34 metai."

const peopleNames = people.map(person => person.name);
console.log(peopleNames);   // ['Jonas', 'Maryte", 'Petras", 'Ona']


const peopleAges = people.map(person => person.age);
console.log(peopleAges);    // [99, 88, 77, 66]

console.clear();

console.log('***********');


const peopleMarried = people.map(person => {
    person.isMarried = true;
    person.luckyNumber = 13;
    return person;
});
console.log(peopleMarried);


console.log('***********');

const p = [10, 2, 8, 4, 6];
const p5 = [];

for (const n of p){
    if(n > 5){
        p5.push(n);
    }
}
console.log(p5);            // [6, 8, 10]

         // filter "ciklo būdu pasilieka tai, kas tenkina sąlygą"

const p6 = p.filter(n => n > 6);
console.log(p6);            // [8, 10]

const p7 = p.filter(n => n < 7);
console.log(p7);            // [2, 4, 6]

const p8 = p.filter(n => n > 2 && n < 8);
console.log(p8);            // [4, 6]

                    // filtar su tekstais

const text5 = ['labas', '', 'rytas', '', 'Lietuva'];
const text5Updated = text5.filter(t => t.length > 0);
console.log(text5Updated);  // ['labas', 'rytas', 'Lietuva']
// arba trumpiau
const text5Updated1 = text5.filter(t => t);
console.log(text5Updated1);  // ['labas', 'rytas', 'Lietuva']
// arba išfiltruoti žodžius
const text5Updated2 = text5.filter(t => t === 'rytas');
console.log(text5Updated2);  // ['rytas']

console.clear();

console.log('--------------')

           // fill užpildo masyvą "n" kartų nurodyta reikšme.

const defoult5 = [0, 0, 0, 0, 0];
const defoult7 = Array(7).fill(99); // [99, 99, 99, 99, 99, 99, 99]
console.log(defoult7);

const zeros = Array(10);
const zeros2 = Array(10).fill(0);
console.log(zeros);                 // [     10 tuščių vietų    ]      
console.log(zeros2);                // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const neegativees = Array(4).fill(false);
console.log(neegativees);           // [false, false, false, false]

const emptySpaces = Array(6).fill('');
console.log(emptySpaces);           // ['', '', '', '', '', '']

const labas5 = Array(5).fill('labas');
console.log(labas5);           // ['labas', 'labas', 'labas', 'labas', 'labas']

// arba atnaujina, rašo ant viršaus naują reikšmę.

const demo = [10, 2, 8, 4, 6];
console.log(demo);             // [10, 2, 8, 4, 6] 
demo.fill(777);
console.log(demo);             // [777, 777, 777, 777, 777] 

console.clear();

        // every pagal užklausą patikrina bendrą masyvo narių reikšmę

const trees = ['uosis', 'egle', 'azuolas', 'tuopa'];  
const allTreesValid = trees.every(s => s.length > 0);
console.log(allTreesValid);         // true

const allTreesNamesSize5 = trees.every(s => s.length === 5);
console.log(allTreesNamesSize5);    // false

        // some pagal užklausą patikrina nors vieno masyvo nario reikšmę
  
const someTreesValid = trees.some(s => s.length > 5);
console.log(allTreesValid);         // true

const someTreesNamesSize5 = trees.some(s => s.length === 5);
console.log(someTreesNamesSize5);   // true

const someTreesNamesSize10 = trees.some(s => s.length === 10);
console.log(someTreesNamesSize10);   // false







// reduce



















