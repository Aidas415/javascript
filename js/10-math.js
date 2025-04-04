/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// abs (absioliutinė vertė)

console.log('\nabs (absoliutinė skaičiaus vertė (be "-"))');
console.log(Math.abs(5));
console.log(Math.abs(-5));

// cbrt (traukia kubinę šaknį)

console.log('\ncbrt (Traukia kubinę šaknį)')
console.log(Math.cbrt(27));
console.log(Math.cbrt(-8));
console.log(Math.cbrt(64));
console.log(Math.cbrt(-125));

// ceil (lubos, apvalinimas į viršų)

console.log('\nceil (lubos, apvalinimas į viršų)');
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(-8.9));
console.log(Math.ceil(8.2));
console.log(Math.ceil(8.0000001));

// floor (grindys, apvalinimas į apačią)

console.log('\nfloor (apvalinimas į apačią)');
console.log(Math.floor(8));
console.log(Math.floor(8.9));
console.log(Math.floor(-8.5));
console.log(Math.floor(8.2));
console.log(Math.floor(-8.2))
console.log(Math.floor(8.9999999999999));

// round (apvalina)

console.log('\nround (apvalina)');
console.log(Math.round(8));
console.log(Math.round(8.0000000001));
console.log(Math.round(8.2));
console.log(Math.round(8.4999999));
console.log(Math.round(8.5));
console.log(Math.round(8.9));
console.log(Math.round(8.9999999999));

// trunc (apvalina į nulį)

console.log('\ntrunc (apvalina link "0")');;
console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.000001));
console.log(Math.trunc(4.9999999999));
console.log(Math.trunc(-4.000001));
console.log(Math.trunc(-4.9999999999));



// hypot(įstrižainės(Pitagoras))

console.log('\nhypot (įstrižainės(pitagoras))');;
console.log(Math.hypot(3, 4));
console.log(Math.hypot(4, 5));
console.log(Math.hypot(6, 8));
console.log(Math.hypot(3, 5, 6));
console.log(Math.hypot(2, 3, 5));

// max (didžiausias skaičius)

console.log('\nmax (didžiausias skaičius)');;
console.log(Math.max(10, 2, 8, 4, 6));
console.log(Math.max(4, -2, 7, -11));
console.log(Math.max(5, 0, 'asd', 5.001, 2));
console.log(Math.max('asd', -0.0001, -0.1, -3.5));

// min (mažiausias skaičius)

console.log('\nmin (mažiausias skaičius)');;
console.log(Math.min(10, 2, 8, 4, 6));
console.log(Math.min(4, -1, 5));
console.log(Math.min('asd', 1.7 , 2.01, 0.0001));
console.log(Math.min(-1, 5, 'asd',-1.0001));

// pow (kėlimas laipsniu)

console.log('\npow (kėlimas laipsniu)');;
console.log(Math.pow(10, 2));
console.log(Math.pow(4, 3));
console.log(Math.pow(1, 4));
console.log(Math.pow(4, 1));
console.log(Math.pow(87, 0));
console.log('\n');
console.log(Math.pow(2, 0));
console.log(Math.pow(2, 1));
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 4));
console.log(Math.pow(2, 5));
console.log(Math.pow(2, 6));
console.log(Math.pow(2, 7));
console.log(Math.pow(2, 8));
console.log(Math.pow(2, 9));
console.log(Math.pow(2, 10));

// sign (nurodo ar skaičius neigiamas, ar teigiamas)

console.log('\nsign (nurodo ar skaičius neigiamas, ar teigiamas)');
console.log(Math.sign(10));
console.log(Math.sign(-5));
console.log(Math.sign(8));
console.log(Math.sign(-8));
console.log(Math.sign(0));

// sqrt (kvadratinė šaknis)

console.log('\nsqrt (kvadratinė šaknis)');
console.log(Math.sqrt(9));
console.log(Math.sqrt(144));
console.log(Math.sqrt(7));
console.log(Math.sqrt(50));

// random [0...1)

console.log('\nrandom');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

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

console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));


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





