/*
const day = 1;
let dayName = '';

if (day === 1){
    dayName = 'pirmadienis';
}else if (day === 2){
    dayName = 'antradienis';
}else if (day === 3){
    dayName = 'treciadienis';
}else if (day === 4){
    dayName = 'ketvirtadienis';
}else if (day === 5){
    dayName = 'penktadienis';
}else if (day === 6){
    dayName = 'sestadienis';
}else if (day === 7){
    dayName = 'sekmadienis';
}else if (day > 7){
    dayName = 'tokios savaites dienos nera';
}
consol.consol(dayName)                                                                   
*/

// If galima rašyti su "switch"

const d = 3;
let weekdayName = '***';

switch (d) 
{
    case 1:
        weekdayName = 'pirmadienis';
        break;
    case 2:
        weekdayName = 'antradienis';
        break;
    case 3:
        weekdayName = 'treciadienis';
        break; 
    case 4:
        weekdayName = 'ketvirtaadienis';
        break; 
    case 5:
        weekdayName = 'penktadienis';
        break; 
    case 6:
        weekdayName = 'sestadienis';
        break; 
    case 7:
        weekdayName = 'sekmadienis';
        break; 
    default: // 'default' yra savotiskas 'else'
        weekdayName = 'tokios savaites dienos nera'
        break; 
}
console.log(weekdayName);


const day2 = 1;
let day2Name = '';

if (day2 === 1 || day2 === 2 || day2 === 3 || day2 === 4 || day2 === 5){
    day2name = 'darbo diena';
} else if (day2 === 6 || day2 === 7){
    day2name = 'savaitgalis';
}else {
    day2Name = 'tokios dienos savaiteje nera'
}























