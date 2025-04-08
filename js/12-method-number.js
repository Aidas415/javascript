/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);   // 9007199254740992

console.log(Number.MIN_SAFE_INTEGER);       // -9007199254740991
console.log(Number.MIN_SAFE_INTEGER - 1);   // -9007199254740992

console.log(Number.NEGATIVE_INFINITY);      // -Infinity
console.log(Number.POSITIVE_INFINITY);      // Infinity

// isFinite

console.log('\nisFinite "Nurodo ar reikšmė išreikšta skaitmenimis"');
console.log(isFinite(5), Number.isFinite(5));               // true true
console.log(isFinite(3.14), Number.isFinite(3.14));         // true true
console.log(isFinite(Infinity), Number.isFinite(Infinity)); // false false
console.log(isFinite(NaN), Number.isFinite(NaN));           // false false
console.log(isFinite('ahbxgs'), Number.isFinite('ahbxgs')); // false false
console.log(isFinite(true), Number.isFinite(true));         // true false
console.log(isFinite([]), Number.isFinite([]));             // true false
console.log(isFinite({}), Number.isFinite({}));             // false false

console.clear();

// isInteger

console.log('\nisInteger "Nurodo ar skaičius yra sveikasis"');
console.log(Number.isInteger(3));           // true
console.log(Number.isInteger(3.14));        // false
console.log(Number.isInteger(0))            // true
console.log(Number.isInteger(-3.14));       // false
console.log(Number.isInteger(-3));          // true
console.log(Number.isInteger(Infinity));    // false
console.log(Number.isInteger(-Infinity));   // false
console.log(Number.isInteger('asd'));       // false
console.log(Number.isInteger(true));        // false
console.log(Number.isInteger(false));       // false
console.log(Number.isInteger('asd'));       // false
console.log(Number.isInteger([]));          // false
console.log(Number.isInteger(NaN));         // false

console.clear();

// NaN

console.log('\nisNaN "Nurodo ar reikšmė yra skaičiaus tipo klaida"')
console.log(Number.isNaN(3.14), isNaN(3.14));           // false false
console.log(Number.isNaN(5), isNaN(5));                 // false false
console.log(Number.isNaN(Infinity), isNaN(Infinity));   // false false
console.log(Number.isNaN(NaN), isNaN(NaN));             // true true
console.log(Number.isNaN('asd'), isNaN('asd'));         // false true
console.log(Number.isNaN({}), isNaN({}));               // false true

// visada patikimiau naudoti "typeof". Po jo lieka tik skaičiai ir tada toliau filtruoji".

// typeof

if (typeof a !== 'number');
{

};

const userInput = '22';
const date = userInput + '5';
console.log(date);              // 225

const userInput1 = '22';
const date1 = userInput1 * '5';
console.log(date1);             // 110

console.clear();

// parseInt

console.log('\nparseInt "Iš teksto tipo reikšmės paima sveikus skaičius. tekste juos mato tik iš priekio". ');
console.log(parseInt('65'));                // 65
console.log(parseInt('65.314'));            // 65
console.log(parseInt('-65'));               // -65 
console.log(parseInt('-65.314'));           // -65

console.log(parseInt('labas'));             // NaN
console.log(parseInt('labas111'));          // NaN

console.log(parseInt('222labas'));          // 222
console.log(parseInt('1235abas456'));       // 1235
console.log(parseInt('222l9ab333as444'));   // 22219
console.log(parseInt('2,5'));               // 2
console.log(parseInt('2.5'));               // 2

console.log(parseInt(true));                // NaN

// parseFloat

console.log('\nparseFloat "Iš teksto tipo reikšmės(priekio) paima skaičius ir po kablelio (tik po pirmojo)"')                
console.log(parseFloat('63.4'));            // 63.4
console.log(parseFloat('-12.4'));           // -12.4
console.log(parseFloat('--12.4'));          // NaN
console.log(parseFloat('20'));              // 20
console.log(parseFloat('-20'));             // -20
console.log(parseFloat('55labas'));         // 55
console.log(parseFloat('labas55'));         // NaN
console.log(parseFloat('55la22bas66'));     // 55
console.log(parseFloat('20.45.99'));        // 20.45

console.clear();

console.log('------------')

// epsilon

const b = 12.3456789;                   
console.log(b);                         // 12.3456789
console.log(typeof b);                  // number
console.log(typeof typeof b);           // string
console.log(typeof typeof typeof b );   // string
console.log('-----------');             // -----------
const c = b.toFixed(4);                
console.log(c);                         // 12.3457
console.log(typeof c);                  // string

const d = parseFloat(c);
console.log(d);                         // 12.34567
console.log(typeof d);                  // number

console.clear();

console.log('-------------')
console.log('\ntoFixed "Skaičiuje po kablelio palieka nurodytą kiekį skaitmenų ir suapvalina".Atima arba prideda')
console.log(12.3456789. toFixed(7));    // 12.3456789
console.log(12.3456789. toFixed(6));    // 12.345679
console.log(12.3456789. toFixed(5));    // 12.34568
console.log(12.3456789. toFixed(4));    // 12.3457
console.log(12.3456789. toFixed(3));    // 12.346
console.log(12.3456789. toFixed(2));    // 12.35
console.log(12.3456789. toFixed(1));    // 12.3
console.log(12.3456789. toFixed(0));    // 12

console.log(3.14. toFixed(0));          // 3
console.log(3.14. toFixed(1));          // 3.1
console.log(3.14. toFixed(2));          // 3.14
console.log(3.14. toFixed(3));          // 3.140
console.log(3.14. toFixed(4));          // 3.1400
console.log(3.14. toFixed(5));          // 3.14000



