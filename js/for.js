/*
FOR (loop) - ciklas
*/

for (let i = 0; i < 5; i++) {
    console.log('a) number:', i);
}

console.log('---------');

console.log('number:', 0);
console.log('number:', 1);
console.log('number:', 2);
console.log('number:', 3);
console.log('number:', 4);

console.log('----------');

for (let i = 0; i <= 5; i++) {
    console.log('b) number:', i);
}

console.log('----------');

// 0, 1, 2, 3, 4, .....
// 0, 2, 4, 6, 8, ....

for (let i = 0; i < 11; i += 2) {
    console.log('Kas du:', i);
}

console.log('----------');

const marks= [10, 2, 8, 4, 6];

let sum = 0;

sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

console.log(sum);

let sum2 = 0;

for (let i = 0; i < 5; i++) {
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i];
}

console.log('----------');

for(let k = 0; k < 1; k += 0.1) {
    console.log(k);
}

console.log('----------');

for(let k = 0; k < 10; k += 1) {
    console.log(k / 10);
}

console.log('----------');

console.log(0.1 + 0.2);
console.log((10 + 20) / 100);
console.log((399 + 20) / 100);

console.log('----------');

console.log("Labas");
console.log('Labas');
console.log('Labas');
console.log('Labas');

console.log('----------');

for (let i = 0; i < 4; i++) {
    console.log('Labas');
}

console.log('----------');

const n = 6;
console.log(`${n} * 1 = ${n*1}`);
console.log(`${n} * 2 = ${n*2}`);
console.log(`${n} * 3 = ${n*3}`);
console.log(`${n} * 4 = ${n*4}`);
console.log(`${n} * 5 = ${n*5}`);
console.log(`${n} * 6 = ${n*6}`);
console.log(`${n} * 7 = ${n*7}`);
console.log(`${n} * 8 = ${n*8}`);
console.log(`${n} * 9 = ${n*9}`);
console.log(`${n} * 10 = ${n*10}`);

console.log('----------');

for (let i = 1; i <= 10; i++) {
    console.log(`${n} * i = ${n * i}`);
}

console.clear();

const marks1 = [10, 2, 8, 4, 6]
let sum1 = 0;

sum1 += 0;

sum1 += marks1[0];
sum1 += marks1[1];
sum1 += marks1[2];
sum1 += marks1[3];
sum1 += marks1[4];

console.log(sum1);

console.log('----------');

let sum3 = 0;
for (let i = 0; i < 5; i++) {
    console.log('index', i,'-->', marks1[i]);
}
console.log(sum);

console.log('----------');

// Studento vardas

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++){
    console.log(i, names[i]);
    const s = `Studento vardas yra ${names[i]}.`;
    console.log(s);
}

console.log('----------');

// Vardas "VARDAS" yra sudarytas is N raidziu.

for (let i = 0; i < names.length; i++){
    const name = names[i];
    const s = `Vardas "${name}" yra sudarytas is ${name.length} raidziu.`;
    console.log(s);
}

console.log('----------');
















