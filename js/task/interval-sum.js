function intervalSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += 1;
    }
    return sum;
}

console.log('1)', intervalSum(0, 0));
console.log('2)', intervalSum(0, 4));
console.log('3)', intervalSum(0, 100));
console.log('4)', intervalSum(-50, 50));
console.log('5)', intervalSum(-70, 30));
console.log('6)', intervalSum(574, 815));
console.log('7)', intervalSum(0, 1));
console.log('8)', intervalSum(0, 2));
console.log('9)', intervalSum(0, 4));
console.log('10)', intervalSum(0, 5));
console.log('11)', intervalSum(0, 6));
console.log('12)', intervalSum(0, 10));
console.log('13)', intervalSum(0, 1000));
console.log('14)', intervalSum(0, 10_000));
console.log('15)', intervalSum(0, 100_000));
console.log('16)', intervalSum(0, 1_000_000));
console.log('14)', intervalSum(0, 10_000_000));
console.log('15)', intervalSum(0, 100_000_000));
//console.log('16)', intervalSum(0, 1_000_000_000));
//console.log('17)', intervalSum(0, 10_000_000_000));
//console.log('18)', intervalSum(0, 100_000_000_000));

console.log('----------------');

const a = 1.45e-5;
console.log(a);

console.log(1000000000000000000000);


console.log('1)', intervalSum1(0, 0));
console.log('2)', intervalSum1(0, 4));
console.log('3)', intervalSum1(0, 100));
console.log('4)', intervalSum1(-50, 50));
console.log('5)', intervalSum1(-70, 30));
console.log('6)', intervalSum1(574, 815));
console.log('7)', intervalSum1(0, 1));
console.log('8)', intervalSum1(0, 2));
console.log('9)', intervalSum1(0, 4));
console.log('10)', intervalSum1(0, 5));
console.log('11)', intervalSum1(0, 6));
console.log('12)', intervalSum1(0, 10));
console.log('13)', intervalSum1(0, 1000));
console.log('14)', intervalSum1(0, 10_000));
console.log('15)', intervalSum1(0, 100_000));
console.log('16)', intervalSum1(0, 1_000_000));
console.log('14)', intervalSum1(0, 10_000_000));
console.log('15)', intervalSum1(0, 100_000_000));

function intervalSum1(start, end) {
    let sum = 0;
    if (start === 0) {
        sum = (end * (end + 1)) / 2;
    } else {
        for (let i = start; i <= end; i++) {
            sum += 1;
        }
    }
    return sum;
}
    
console.log('----------------');

console.log('1)', intervalSum(2, 4));
console.log('2)', intervalSum(0, 4));
console.log('3)', intervalSum(-2, 4));
console.log('4)', intervalSum(-4, 4));
console.log('5)', intervalSum(-4, 2)); 
console.log('6)', intervalSum(-4, 0));
console.log('7)', intervalSum(-4, 2)); 

console.log('----------------');
        
console.log('1)', intervalSum1(2, 4));
console.log('2)', intervalSum1(0, 4));
console.log('3)', intervalSum1(-2, 4));
console.log('4)', intervalSum1(-4, 4));
console.log('5)', intervalSum1(-4, 2)); 
console.log('6)', intervalSum1(-4, 0));
console.log('7)', intervalSum1(-4, 2));         

  
    
    






