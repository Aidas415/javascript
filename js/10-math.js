/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// abs (absioliutinė vertė)

console.log('\nabs (absoliutinė skaičiaus vertė (be "-"))');
console.log(Math.abs(5));                   // 5
console.log(Math.abs(-5));                  // 5

// cbrt (traukia kubinę šaknį)

console.log('\ncbrt (Traukia kubinę šaknį)')
console.log(Math.cbrt(27));                 // 3
console.log(Math.cbrt(-8));                 // -2
console.log(Math.cbrt(64));                 // 4
console.log(Math.cbrt(-125));               // -5

// ceil (lubos, apvalinimas į viršų)

console.log('\nceil (lubos, apvalinimas į viršų)');
console.log(Math.ceil(8));                  // 8
console.log(Math.ceil(8.9));                // 9
console.log(Math.ceil(-8.9));               // 8        
console.log(Math.ceil(8.2));                // 9
console.log(Math.ceil(8.0000001));          // 9

// floor (grindys, apvalinimas į apačią)

console.log('\nfloor (apvalinimas į apačią)');
console.log(Math.floor(8));                 // 8
console.log(Math.floor(8.9));               // 8
console.log(Math.floor(-8.5));              // -9
console.log(Math.floor(8.2));               // 8
console.log(Math.floor(-8.2))               // -9
console.log(Math.floor(8.9999999999999));   // 8

// round (apvalina)

console.log('\nround (apvalina)');
console.log(Math.round(8));                 // 8
console.log(Math.round(8.0000000001));      // 8
console.log(Math.round(8.2));               // 8
console.log(Math.round(8.4999999));         // 8
console.log(Math.round(8.5));               // 9
console.log(Math.round(8.9));               // 9
console.log(Math.round(8.9999999999));      // 9

// trunc (apvalina į nulį)

console.log('\ntrunc (apvalina link "0")');;
console.log(Math.trunc(8));                 // 8
console.log(Math.trunc(9));                 // -9
console.log(Math.trunc(4.5));               // 4
console.log(Math.trunc(4.000001));          // 4
console.log(Math.trunc(4.9999999999));      // 4
console.log(Math.trunc(-4.000001));         // -4
console.log(Math.trunc(-4.9999999999));     // -4

console.clear();

// hypot(įstrižainės(Pitagoras))

console.log('\nhypot (įstrižainės(pitagoras))');;
console.log(Math.hypot(3, 4));              // 5
console.log(Math.hypot(4, 5));              // 6.4031242374328485
console.log(Math.hypot(6, 8));              // 10
console.log(Math.hypot(3, 5, 6));           // 8.366600265340757
console.log(Math.hypot(2, 3, 5));           // 6.164414002968977

// max (didžiausias skaičius)

console.log('\nmax (didžiausias skaičius)');;
console.log(Math.max(10, 2, 8, 4, 6));              // 10
console.log(Math.max(4, -2, 7, -11));               // 7
console.log(Math.max(5, 0, 'asd', 5.001, 2));       // NaN
console.log(Math.max('asd', -0.0001, -0.1, -3.5));  // NaN

// min (mažiausias skaičius)

console.log('\nmin (mažiausias skaičius)');;
console.log(Math.min(10, 2, 8, 4, 6));              // 2
console.log(Math.min(4, -1, 5));                    // -1
console.log(Math.min('asd', 1.7 , 2.01, 0.0001));   // NaN
console.log(Math.min(-1, 5, 'asd',-1.0001));        // NaN

// pow (kėlimas laipsniu)

console.log('\npow (kėlimas laipsniu)');;
console.log(Math.pow(10, 2));               // 100
console.log(Math.pow(4, 3));                // 64
console.log(Math.pow(1, 4));                // 1
console.log(Math.pow(4, 1));                // 4
console.log(Math.pow(87, 0));               // 1
console.log('\n');
console.log(Math.pow(2, 0));                // 1
console.log(Math.pow(2, 1));                // 2
console.log(Math.pow(2, 2));                // 4
console.log(Math.pow(2, 3));                // 8
console.log(Math.pow(2, 4));                // 16
console.log(Math.pow(2, 5));                // 32
console.log(Math.pow(2, 6));                // 64
console.log(Math.pow(2, 7));                // 128
console.log(Math.pow(2, 8));                // 256
console.log(Math.pow(2, 9));                // 512
console.log(Math.pow(2, 10));               // 1024

// sign (nurodo ar skaičius neigiamas, ar teigiamas)

console.log('\nsign (nurodo ar skaičius neigiamas, ar teigiamas)');
console.log(Math.sign(10));                 // 1
console.log(Math.sign(-5));                 // -1
console.log(Math.sign(8));                  // 1
console.log(Math.sign(-8));                 // -1
console.log(Math.sign(0));                  // 0

// sqrt (kvadratinė šaknis)

console.log('\nsqrt (kvadratinė šaknis)');
console.log(Math.sqrt(9));                  // 3
console.log(Math.sqrt(144));                // 12
console.log(Math.sqrt(7));                  // 2.6457513110645907
console.log(Math.sqrt(50));                 // 7.0710678118654755

// random [0...1)

console.log('\nrandom');
console.log(Math.random());                 // vis kitas skaicius
console.log(Math.random());                 // vis kitas skaicius
console.log(Math.random());                 // vis kitas skaicius
console.log(Math.random());                 // vis kitas skaicius

console.log('------------');

// Random skaičius: nuo 0 iki 10  [0...9] [0...9)
for (let i = 0; i < 10; i++) 
{
    console.log(Math.random());
}

console.log('------------');

// Random skaičius: 3 arba 7
// [0...1) = [0...0.5) + [0.5...1)
let count3 = 0;
let count7 = 0;

for (let i = 0; i < 1000000; i++) 
    {
        if (Math.random() < 0.5)
        {
            count3++;
        }
        else
        {
            count7++;
        }
    }
    
console.log(count3, count7);    

console.log('-------------')

// [13...149]

function randomNumber(min,max) 
{
    return Math.floor(Math.random() * (max - min +1) +min);
}

console.log(randomNumber(1, 10));               // vis kitas skaicius          
console.log(randomNumber(1, 10));               // vis kitas skaicius   
console.log(randomNumber(1, 10));               // vis kitas skaicius
console.log(randomNumber(1, 10));               // vis kitas skaicius
console.log(randomNumber(1, 10));               // vis kitas skaicius
console.log(randomNumber(1, 10));               // vis kitas skaicius
console.log(randomNumber(1, 10));               // vis kitas skaicius   
console.log(randomNumber(1, 10));               // vis kitas skaicius
console.log(randomNumber(1, 10));               // vis kitas skaicius
console.log(randomNumber(1, 10));               // vis kitas skaicius


console.log('-------------')

function randomNumber(min,max) 
{
    return Math.floor(Math.random() * (max - min +1) +min);
}

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000000; i++) 
    {
        const index = randomNumber(0, 9);
        counts[index]++
    }
    
console.log(counts);

console.log('-------------')

const counts2 = [0, 0];

for (let i = 0; i < 1000000; i++) 
    {
        const index = randomNumber(0, 1);
        counts2[index]++
    }
    
console.log(counts2);





