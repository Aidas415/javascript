// while 

// Įprastas ciklo būdas
const marks = [10, 2, 8, 4, 6];

let sum = 0;
for (let i = 0; i < marks.length; i++)
{
    sum += marks[i];
}
console.log(sum);               // 30

// "While" būdas, galima nurodyti iki kurio rezultato ciklas turėrtų "suktis"
let sum2 = 0;
let i2 = 0;
while(i2 < marks.length)
{
    sum2 += marks[i2];
    i2++;
}
console.log(sum2);              // 30

let count = 0;
let sum3 =0;
while (sum3 < 1000000)
{
    sum3 += count++;
}
console.log(sum3);              // 1000405





