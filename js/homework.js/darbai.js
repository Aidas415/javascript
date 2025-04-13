
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



  let marks = [4, 1, 7, 1, 5, 2];
  function getAverage(marks){
    let sum6 = 0;
    for (let i = 0; i < marks.length; i++){
      sum6 += marks[i];  
    }
    console.log(sum6);

   // return Math.round(sum);
     return sum6;
  }



/*
console.log(getAverage(marks));
console.log();
for(const sum of marks){
  
  console.log(sum);
}
*/



//return Math.round(sum);

function grow(x){
    let result = 1;
    for (let i = 0; i < x.length; i++){
      result *= x[i];
    }
  return result;
  }
  return result;
  console.log(result);

