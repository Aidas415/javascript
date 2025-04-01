function biggestNumber(list)
{   
    if (!Array.isArray(list))
    {
        return 'Duomenys turi būti sąraše.';
    }
    if (list.length === 0)
    {
        return 'tuščiame sąraše didžiausio skaičiaus rasti neįmanoma.';
    }
    let biggest = -Infinity;
    for (let i = 0; i< list.length; i++)
    {
        if (typeof list[i] !== 'number' || !isFinite(list[i]))
        {
            continue;
        }
        if (list[i] > biggest)
        {
            biggest = list[i];
        }
    }
    return biggest;
}

console.log(biggestNumber(1125498624));
console.log(biggestNumber('Labas'));
console.log(biggestNumber(true));
console.log(biggestNumber([]));

console.log(biggestNumber([1]), '-->', 1);
console.log(biggestNumber([4]), '-->', 4);
console.log(biggestNumber([1,2]), '-->', 2);
console.log(biggestNumber([2, 1]), '-->', 2);
console.log(biggestNumber([1, 2, 3]), '-->', 3);
console.log(biggestNumber([3, 1, 2]), '-->', 3);
console.log(biggestNumber([2, 3, 1]), '-->', 2);
console.log(biggestNumber([2, 3, 3]), '-->', 2);
console.log(biggestNumber([3, 3, 3]), '-->', 3);
console.log(biggestNumber([-1, -2, -3]), '-->', -1);

console.log('---------------');

console.log(biggestNumber([1, 2, 'asd']), '-->', 2);
console.log(biggestNumber([2, 'asd', 1]), '-->', 2);
console.log(biggestNumber(['asd', 2, 3]), '-->', 3);

console.log('---------------')

console.log(biggestNumber([-1, -2, true]), '-->', -1);
console.log(biggestNumber([-2, true, -3]), '-->', -2);
console.log(biggestNumber([true, -3, -1]), '-->', -1);

console.log('---------------')

console.log(biggestNumber([-1, -2, false]), '-->', -1);
console.log(biggestNumber([-2, false, -3,]), '-->', -2);
console.log(biggestNumber([false, -2, -1]), '-->', -1);

console.log('---------------')

console.log(biggestNumber([-3, -1, -Infinity]), '-->', -1);
console.log(biggestNumber([-2, -Infinity, -3]), '-->', -2);
console.log(biggestNumber([-Infinity, -3, -1]), '-->', -1);

console.log('---------------')

console.log(biggestNumber([1, 2, Infinity]), '-->', Infinity, '?');
console.log(biggestNumber([2, Infinity, 3]), '-->', Infinity, '?');
console.log(biggestNumber([Infinity, 1, 3]), '-->', Infinity, '?');

console.log('---------------')

console.log(biggestNumber([3, 1, NaN]), '-->', 3);
console.log(biggestNumber([2, NaN, 1]), '-->', 2);
console.log(biggestNumber([NaN, 2, 3]), '-->', 3);


