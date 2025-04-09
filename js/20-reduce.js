/*
reduce
*/

const marks =[10, 2, 8, 4, 6];

let sum = 0;
for (const n of marks)
{
    sum += n;
}
console.log(sum);

const sum2 = marks.reduce((total, n) => total + n);
console.log(sum2)
