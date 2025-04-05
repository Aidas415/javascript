/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER - 1);

console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log('\nisFinite "Nurodo ar reikšmė išreikšta skaitmenimis"');
console.log(isFinite(5), Number.isFinite(5));
console.log(isFinite(3.14), Number.isFinite(3.14));
console.log(isFinite(Infinity), Number.isFinite(Infinity));
console.log(isFinite(NaN), Number.isFinite(NaN));
console.log(isFinite('ahbxgs'), Number.isFinite('ahbxgs'));
console.log(isFinite(true), Number.isFinite(true));
console.log(isFinite([]), Number.isFinite([]));
console.log(isFinite({}), Number.isFinite({}));

console.log('\nisInteger "Nurodo ar skaičius yra sveikasis"');
console.log(Number.isInteger(3));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(0))
console.log(Number.isInteger(-3.14));
console.log(Number.isInteger(-3));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger('asd'));
console.log(Number.isInteger(true));
console.log(Number.isInteger(false));
console.log(Number.isInteger('asd'));
console.log(Number.isInteger([]));
console.log(Number.isInteger(NaN));

console.log('\nisNaN "Nurodo ar reikšmė yra skaičiaus tipo klaida"')
console.log(Number.isNaN(3.14), isNaN(3.14));
console.log(Number.isNaN(5), isNaN(5));
console.log(Number.isNaN(Infinity), isNaN(Infinity));
console.log(Number.isNaN(NaN), isNaN(NaN));
console.log(Number.isNaN('asd'), isNaN('asd'));
console.log(Number.isNaN({}), isNaN({}));

// visada patikimiau naudoti "typoef". Po jo lieka tik skaičiai ir tada toliau filtruoji".

if (typeof a !== 'number');
{

};

const userInput = '22';
const date = userInput + '5';
console.log(date);

const userInput1 = '22';
const date1 = userInput1 * '5';
console.log(date1);

// parseInt

console.log('\nparseInt "Iš teksto tipo reikšmės paima sveikus skaičius. tekste juos mato tik iš priekio". ');
console.log(parseInt('65'));
console.log(parseInt('65.314'));
console.log(parseInt('-65'));
console.log(parseInt('-65.314'));

console.log(parseInt('labas'));
console.log(parseInt('labas111'));
console.log(parseInt('222labas'));
console.log(parseInt('123labas456'));
console.log(parseInt('222lab333as444'));
console.log(parseInt('2,5'));
console.log(parseInt('2.5'));

console.log(parseInt(true));

// parseFloat

console.log('\nparseFloat "Iš teksto tipo reikšmės paima skaičius ir po kablelio (tik po pirmojo)"')
console.log(parseFloat('63.4'));
console.log(parseFloat('-12.4'));
console.log(parseFloat('--12.4'));
console.log(parseFloat('20'));
console.log(parseFloat('-20'));
console.log(parseFloat('55labas'));
console.log(parseFloat('labas55'));
console.log(parseFloat('55la22bas66'));
console.log(parseFloat('20.45.99'));

// epsilon

const b = 12.3456789;
console.log(b);
console.log(typeof b);
console.log(typeof typeof b);
console.log(typeof typeof typeof b );
console.log('-----------');
const c = b.toFixed(4);
console.log(c);
console.log(typeof c);

const d = parseFloat(c);
console.log(d);
console.log(typeof d);

console.log('-------------')
console.log('\ntoFixed "Skaičiuje po kablelio palieka nurodytą kiekį skaitmenų".')
console.log(12.3456789. toFixed(7));
console.log(12.3456789. toFixed(6));
console.log(12.3456789. toFixed(5));
console.log(12.3456789. toFixed(4));
console.log(12.3456789. toFixed(3));
console.log(12.3456789. toFixed(2));
console.log(12.3456789. toFixed(1));
console.log(12.3456789. toFixed(0));

console.log(3.14. toFixed(0));
console.log(3.14. toFixed(1));
console.log(3.14. toFixed(2));
console.log(3.14. toFixed(3));
console.log(3.14. toFixed(4));
console.log(3.14. toFixed(5));



