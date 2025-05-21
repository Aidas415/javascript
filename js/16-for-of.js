const marks = [10, 2, 8, 4, 6];
let sum = 0;
 for (let i = 0; i < marks.length; i++)
    {
        const mark = marks[i];
        sum += mark;
    }
console.log(sum);                                       // 30



let sum1 = 0;
 for (const mark of marks)
    {
        sum1 += mark;
    }    
console.log(sum1);                                      // 30

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
 for (const name of names)
    {
        nameSizes.push
        ({
            name: name,                                 // 'Jonas' // 'Maryte'  // 'Petras'  // 'Ona'
            firstLetter: name[0],                       // 'J '    // 'M'       // 'P'       // 'O'
            lastLetter: name.at(-1),                    // 's'     // 'e'       // 's'       // 'a'
            size: name.length,                          //  5      // 6         // 6         // 3
            reverse: name.split('').reverse().join(''), // 'sanoJ' // 'etyraM'  // 'sarteP'  // 'anO'
        })
        nameSizes.push(name.length);
    }    
console.log(nameSizes);                                 // 3



