// kad galėtų jį panaudoti, turi būti tik vienas "if/else"

let zodis = '';
if (4 > 2)
{
    zodis = "daugiau";
}
else 
{
    zodis = 'maziau';
}
console.log(zodis);         // daugiau

let skaicius = 0;
if (7 <= 5)
{
    skaicius = 7;
}
else
{
    skaicius = 5;
}
console.log(skaicius);      // 5

const word = 4 > 2? 'daugiau' : 'maziau';
console.log(word);          // daugiau

const number = 7 <= 5 ? 7 : 5;
console.log(number);        // 5

const years = 22;
const isAdult = years >= 18 ? "suauges" : 'nesuauges';
console.log(isAdult);       // suauges

const years1 = 2;
const isAdult1 = years1 >= 18 ? "suauges" : 'nesuauges';
console.log(isAdult1);      // nesuauges

const value = 7;
const type = typeof value === 'number' ? 'skaicius' : 'ne skaicius';
console.log(type);          // skaicius

const value1 = '7';
const type1 = typeof value1 === 'number' ? 'skaicius' : 'ne skaicius';
console.log(type1);          // ne skaicius

const value2 = NaN;
const type2 = typeof value2 === 'number' ? 'skaicius' : 'ne skaicius';
console.log(type2);          // skaicius

const value3 = true;
const type3 = typeof value3 === 'number' ? 'skaicius' : 'ne skaicius';
console.log(type3);          // ne skaicius

if (false)
{
    console.log('TAIP');
}
else
{
    console.log('NE');
}
//   NE

// visi skaičiai yra pozityvūs, išskyrus nulį ir NaN
if (55)
    {
        console.log('TAIP');
    }
    else
    {
        console.log('NE');
    }
//    TAIP

if (0)
    {
        console.log('TAIP');
    }
    else
    {
        console.log('NE');
    }
//     NE

// visi tekstai, išskyrus tuščią, yra pozityvūs
if ('pozityvas')
    {
        console.log('TAIP');
    }
    else
    {
        console.log('NE');
    }
//     TAIP

if ('')
    {
        console.log('TAIP');
    }
    else
    {
        console.log('NE');
    }
//     NE

// visi masyvai yra pozityvūs
if ([])
    {
        console.log('TAIP');
    }
    else
    {
        console.log('NE');
    }
//     TAIP

// visi objektai yra pozityvūs
if ({})
    {
        console.log('TAIP');
    }
    else
    {
        console.log('NE');
    }
//     TAIP

// undefined yra negatyvi reikšmė
if (undefined)
    {
        console.log('TAIP');
    }
    else
    {
        console.log('NE');
    }
//     NE

// null taip pat negatyvi reikšmė
if (null)
    {
        console.log('TAIP');
    }
    else
    {
        console.log('NE');
    }
//     NE

console.clear();

const a = 0 ? 1 : 2;
console.log(a);             // 2

const b = 1 ? 2 : 3;
console.log(a);             // 2

const c = 2 ? 3 ? 4 : 5 : 6;
console.log(c);             // 4

const d = 0 ? 1 : 2 ? 3 : 4;
console.log(d);             // 3

const e = 1 ? 2 ? 3 : 4 : 5 ? 6 :7;
console.log(e);             // 3

// unari (vienas) =
// binari (du) +, -, *, /
// ternary (trys) ? :
