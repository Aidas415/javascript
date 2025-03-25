function multiplay(a, b) {

    if (typeof a !== 'number') {
        return 'pirmas parametras tuributi skaicius';
    }
    return a* b;
}


console.log(multiplay(2, 2));
console.log(multiplay(7, 5));
console.log(multiplay(7, -5));
console.log(multiplay(-7, 5));
console.log(multiplay(-7, -5));
console.log(multiplay(7, 0));
console.log(multiplay(-7, 0));
console.log(multiplay(0, 5));
console.log(multiplay(0, -5));

console.log(multiplay(0, 5));
console.log(multiplay(0, -5));



console.log(multiplay(2, 'labas'));








