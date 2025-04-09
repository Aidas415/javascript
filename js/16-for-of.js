const marks = [10, 2, 8, 4, 6];
let sum = 0;
 for (let i = 0; i < marks.length; i++)
    {
        const mark = marks[i];
        sum += mark;
    }
console.log(sum);



let sum1 = 0;
 for (const mark of marks)
    {
        sum1 += mark;
    }    
console.log(sum1);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
 for (const name of names)
    {
        nameSizes.push
        ({
            name: name,
            firstLetter: name[0],
            lastLetter: name.at(-1),
            size: name.length,
            reverse: name.split('').reverse().join(''),
        })
        nameSizes.push(name.length);
    }    
console.log(nameSizes);
