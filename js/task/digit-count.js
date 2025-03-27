function digitCount(n) {
    if (typeof n !== 'number') {
        return 'Reikalingas skaicius.';
    }
    
    //if (n === Infinity || -Infinity || isNaN(n)) {
    //    return 'Reikalingas normalus skaicius.';
    
    if (!isFinite(n)) {
        return 'Reikalingas normalus skaicius.';
        }
   
    const numberAsString = '' + n;
    let count = numberAsString.length;

if (n % 1 !== 0) {
    count--;
}
if (n < 0) {
    count--;
}

    return count;
} 

console.log(digitCount());
console.log(digitCount(undefined));
console.log(digitCount('kndsul'));
console.log(digitCount('724682727'));
console.log(digitCount(true));
console.log(digitCount([]));
console.log(digitCount({}));
console.log(digitCount(digitCount));
console.log(digitCount(null));

console.log(digitCount(Infinity));
console.log(digitCount(-Infinity));
console.log(digitCount(NaN));

console.log(digitCount(4), '--> 5');
console.log(digitCount(736), '--> 3');
console.log(digitCount(3450224), '--> 7');
console.log(digitCount(5.5), '--> 2');
console.log(digitCount(6272.89367), '--> 9');
console.log(digitCount(-4), '--> 5');
console.log(digitCount(-736), '--> 3');
console.log(digitCount(-3450224), '--> 7');
console.log(digitCount(-5.5), '--> 2');
console.log(digitCount(-6272.89367), '--> 9');










