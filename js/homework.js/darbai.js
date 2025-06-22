
function addLength(str) {
    let strArray = str.split(' ');
    let text = [];
    const strArraySize = strArray[i];
    for (let i = 0; i < strArray.length; i++){
        text.push(strArray[i] + ' strArray.length');

        console.log(text);

    }
    return text;
}
console.log()
let x = 'gal dabar bus geriau';

/*
    for (let i =0; i < words.length; i++){

        result = words[i] + ' ' + words[i].length;

        //result +=;       //console.log(words[i]);
    }
    return result;
 }
let str = 'gal kaip nors pavyks';
console.log(addLength(str));  
*/
console.log('-----------------')

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSize = [];
const nameFirstLetters = [];
const toUpperCaseNames = [];
for (let i = 0; i < names.length; i++)
    {
        const name = names[i];
        console.log('---', name, name.length, name[0]); //---Jonas 5 J
        //nameSize.push(name.length);                     //---Maryte 6 M
        //nameFirstLetters.push(name[0]);                 //---Petras 6 P
        //toUpperCaseNames.push(name.toUpperCase())       //---Ona 3 O
    }

    console.log(nameSize);                 // [5, 6, 6, 3]
    console.log(nameFirstLetters);         // [J, M, P, O]
    console.log(toUpperCaseNames);


console.log('---------------')



console.log('-----------------')

function solution(a, b){
    let a1 = a;
    let b1 = b;
    result = '';
    if (a1.length > b1.length) {
       result = 'b1' + 'a1' + 'b1';
    }
    if (a1.length < b1.length) {
       result = 'a1' + 'b1' + 'a1';
    }
    return result;
  }
  
console.log(solution('12', '256'))
let a = 12;
let b = 256;
console.log('--------------')
function integrate(coefficient, exponent) {
    return coefficient / (exponent + 1) + 'x' + '^' + (exponent + 1);  
   }

const coefficient0 = 3;
const exponent0 = 2;
console.log(integrate(coefficient0, exponent0));

function derive(coefficient,exponent) {
    return (coefficient * exponent) +'x' + '^' + (exponent - 1) + (coefficient, exponent);
  }

  console.log('------------');

//return Math.round(sum);

function grow(x){
    let result = 1;
    for (let i = 0; i < x.length; i++){
      result *= x[i];
    }
  return result;
  }
const x5 = [2, 3, 5, 6]
console.log(grow(x5));

//Namu darbai
//parasyti funkcija, kuri apskaiciuotu kiek kartu tam tikra raide pasikartoja zodyje arba sakinyje.
// zodyje

const word = 'pasikiskekopusteliaudamas';
const letterCount = {};
for(const r of word){
  if (letterCount[r]){
    letterCount[r]++;
  }
  else {
    letterCount[r] = 1;
  }
}
console.log(letterCount);

// sakinyje
console.log('-------------')

const sentence = 'idomu, kokiu raidziu bus daugiausia siame sakinyje'
let letterCount1 = {};
for (const r of sentence) {
  if (letterCount1[r]) {
    letterCount1[r]++;
  }
  
}

console.log(letterCount1);

// funkcija
console.log('-------------')

function letterCount2(word1){
  let Count2 = {};
  for (const r1 of word1) {
    if (Count2[r1]) {
      Count2++;
    }
    else {
      Count2 = 1;
    }
  }
}

let word1 = 'Jau saulelė vėl atkopdama budina svietą'
console.log(letterCount2(word1))

//console.clear();

function kartotiniai(x, y) {
  const skaiciai = [];
     for (let i = x; i <= y; i++) {
      if (i % 3 === 0) {
       skaiciai.push(i);
      }
  }
  return skaiciai;
}

const a1 = 0;
const b1 = 50; 
console.log(kartotiniai(a1, b1));

//
console.log('----****----')

function getAverage(marks){
let sum = 0;
  for(let i = 0; i < marks.length; i++){
    sum = sum + marks[i];
    i++
    //console.log(sum);
  }
  return Math.round(sum / marks.length);
}

console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);



const pazym = [4, 3, 6, 8, 5, 10]
console.log(getAverage(pazym));

console.log('---****----')

function problem(x){
  if (x !== typeof number) {
    return Error
  }
  return 50 * x + 6
}

console.log(problem("hello"), "Error");
console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);
console.log(problem(1.2), 66);
console.log(problem(3), 156);
console.log(problem("RyanIsCool"), "Error");
console.log(problem(-3), -144);
console.log(problem(""), "Error");
console.log(problem(0.03), 7.5);


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const la = laLigaGoals;
  const co = copaDelReyGoals;
  const ch = championsLeagueGoals;
  return la + co + ch;
}

const Q7 = 841.5841584158417;
const touareg = 1071.4285714285713;
const espace = 1086.9565217391305;

function toliausiai(masinos){
  let masina = '';
  let tolis = 0;
  for (let i = 0; i < masinos.length; i++) {
    masinos[i] > tolis;
    masina = masinos[i] //> tolis;
    console.log(masinos[i]);  
  }
  return masina;
}

console.log(toliausiai([Q7, touareg, espace]))
//console.log(masina);



console.log(null == undefined);
n = 10 * "2"
console.log(n)

console.log([1,2,3] + [4,5,6])
console.log("hello")

//let ab = 2;
//let bc = "5";
//console.log(bc-ab);

let foo;
console.log(foo);

console.log(typeof NaN);


let numbers = [1,2,3];

numbers[10] = 11;

console.log(numbers.length);


function add(a, b = 5){
  return a + b;
}
console.log(add(10));


const A = 2;
const B = "3";
console.log(A + B)

console.log(typeof[])


function contamination(text, char){ 
  if (text === '' || char === '') {
    return '';
  }
  else {
    text.split('')
  }
};




function contamination(text, char){ 
  if (text === '' || char === '') {
    return '';
  }
  else {
    return text.replaceAll(/[a-zA-Z0-9\s]/g, char);
  }
};

console.log(contamination('abc', 'z'))
/*
function sc(floor){
  let res = '';
  if (floor <= 1) {
    return '"", "good luck!"';
  }
  if (floor <= 6) {
    for(let i = 0; i < floor - 2; i++) {
      [i] = 'Aa~';
      res = res + [i];
      return res + ' Pa! Aa!, "good luck!"';
    }
  }
  else if (floor > 6) {
    for(let i = 0; i < floor - 1; i++) {
      [i] = 'Aa~';
      res = res + [i];
      return res + ' Pa!, "good luck!"'
    }
  } 
}


console.log(sc(7))

console.log(sc(2), "Aa~ Pa! Aa!", "good luck!");  
console.log(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
console.log(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
console.log(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
console.log(sc(1), "", "good luck!"); 
console.log(sc(-1), "", "good luck!");


function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results.sanity;
}


Test.assertDeepEquals(mystery(), {sanity: 'Hello'}, 'Mystery has not returned to sanity');
*/


// iš duotų vardų ištraukti jų inicialus iš didžiosios raidės ir atskirtus kableliu.
function abbrevName(name){
  const names = name.split(' ');
  const firstName = names[0].toUpperCase(0);
  const lastName = names[1].toUpperCase(0);
  return firstName.at(0) + '.' + lastName.at(0);
}
    console.log(abbrevName("Sam Harris"), "S.H");
    console.log(abbrevName("Patrick Feenan"), "P.F");
    console.log(abbrevName("Evan Cole"), "E.C");

console.clear();

/*
function removeEveryOther(arr){
  let newArray = [];  
  for (let i = 0; i < arr.length; i += 2) {
    newArray = newArray.push(arr[i]);  
  }console.log(newArray);
    return newArray;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
*/


console.log(typeof(2))

m = 5 / 0

console.log(m)

n = '5' - 3
console.log(n)

console.log(0 === false)

console.log(null == undefined)

console.log(typeof NaN)

const arr = ['a', 'b', 'c','d'];
arr.reverse();
console.log(arr);

const barr = [1, 2, 3];
const index = barr.indexOf(2);
console.log(index);

