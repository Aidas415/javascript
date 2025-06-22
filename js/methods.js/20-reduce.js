/*
reduce - supaprastinti, sumažinti veiksmų kiekį
*/

const marks =[10, 2, 8, 4, 6];
let sum = 0;
for (const n of marks)
{
    sum += n;
}
console.log(sum);           // 30

// tas pats išreikšta trumiau
// 10 + 2 + 8 + 4 + 6
const sum2 = marks.reduce((total, n) => total + n);
console.log(sum2)           // 30


// 10 - 2 - 8 - 4 - 6
const minus = marks.reduce((total, n) => total - n);
console.log(minus)          // -10


// galima nurodyti veiksmų atskaitos tašką  ..., 0);

// 0 + 10 + 2 + 8 + 4 + 6
const sum3 = marks.reduce((total, n) => total + n, 0);
console.log(sum3)           // 30


// 0 - 10 - 2 - 8 - 4 - 6
const minus1 = marks.reduce((total, n) => total - n, 0);
console.log(minus1)          // -30

// dagybos atveju nurodomas ..., 1);

// 1 * 10 * 2 * 8 * 4 * 6
const multi = marks.reduce((total, n) => total * n, 1);
console.log(multi)          // 3840


// su tekstais

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

let abbr = '';
for (const name of names){
    abbr += name[0] + '.'
}
console.log(abbr);          // J.M.P.O.

// su tekstais nenaudojant atskaitos taško
const abbr1 = names.reduce((total, name) => total + name[0] + '.');
console.log(abbr1);         // Jonas.M.P.O.

// su tekstais naudojant atskaitos tašką kaip tuščią tekstą ...,'');
const abbr2 = names.reduce((total, name) => total + name[0] + '.', '');
console.log(abbr2);         // J.M.P.O.
