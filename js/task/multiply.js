function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaicius.';
    }
    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaicius.';
    }
    if (isNaN(a)) {
        return 'Pirmas parametras turi buti normalus skaicius.';
    }
    if (isNaN(b)) {
        return 'Antras parametras turi buti normalus skaicius.';
    }
    if (a === Infinity || a === -Infinity) {
        return 'Pirmas parametras negali buti begalybes.';
    }
    if (b === Infinity || b === -Infinity) {
        return 'Antras parametras negali buti begalybes.';
    }
    return a * b;
}

console.log(multiply(2, 2));
console.log(multiply(7, 5));
console.log(multiply(7, -5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, 0));
console.log(multiply(-7, 0));
console.log(multiply(0, 5));
console.log(multiply(0, -5));

console.log(multiply(2, 'labas'));
console.log(multiply(-2, 'labas'));
console.log(multiply('labas', 3));
console.log(multiply('labas', -3));
console.log(multiply(2, true));
console.log(multiply(-2, true));
console.log(multiply(true, 3));
console.log(multiply(true, -3));
console.log(multiply(2, [5]));
console.log(multiply(-2, [5]));
console.log(multiply([5], 3));
console.log(multiply([5], -3));

console.log(multiply('labas', 'rytas'))

console.log(multiply(NaN, 5));
console.log(multiply(5, NaN));
console.log(multiply(NaN, NaN));

console.log(multiply(2, 3.5));
console.log(multiply(-2, 3.5));
console.log(multiply(2, -3.5));
console.log(multiply(-2, -3.5))

console.log(multiply(2, Infinity));
console.log(multiply(Infinity, 3));
console.log(multiply(Infinity, Infinity));

console.log(multiply(2, -Infinity));
console.log(multiply(-Infinity, 3));
console.log(multiply(-Infinity, -Infinity));













