
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

const sentence = 'idomu, kokiu raidziu bus daugiausia siame sakinyje'
let letterCount1 = {};
for (const r of sentence) {
  if (letterCount1[r]) {
    letterCount1[r]++;
  }
  else {
    letterCount1[r] = 1;
  }
}

console.log(letterCount1);

// funkcija

function letterCount2(word1){
  let letterCount2 = {};
  for (const r1 of word1) {
    if (letterCount2[r1]) {
      letterCount2++;
    }
    else {
      letterCount2 = 1;
    }
  }
}

let word1 = 'Jau saulelė vėl atkopdama budina svietą'
console.log(letterCount2(word1))

console.clear();

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
///
/*
function contamination(text, char){ 
  let a = char;
  let newText = text.split('');
  if (newText[i] === '' || a === '') {
    return '';
  }
  else {
    return newText.join('').replaceAll(newText[i], a);
  }
} 

console.log(contamination("abc","z"), "zzz")
console.log(contamination("","z"), "")
console.log(contamination("abc",""), "")
console.log(contamination("_3ebzgh4","&"), "&&&&&&&&")
console.log(contamination("//case"," "), "      ")
*/


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const la = laLigaGoals;
  const co = copaDelReyGoals;
  const ch = championsLeagueGoals;
  return la + co + ch;
}



console.log(goals(0,0,0), 0)
console.log(goals(43, 10, 5), 58);
  





