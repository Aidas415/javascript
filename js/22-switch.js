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

const d = 8;
let weekdayName = '***';

switch (d) {
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

console.log('-------------');

const day2 = 2;
let day2Name = '';

if (day2 === 1 || day2 === 2 || day2 === 3 || day2 === 4 || day2 === 5){
    day2Name = 'darbo diena';
} else if (day2 === 6 || day2 === 7){
    day2Name = 'savaitgalis';
}else {
    day2Name = 'tokios dienos savaiteje nera'
}
console.log(day2Name);

console.log('-------------');

const day3 = 6;
let day3Name = '';

switch (day3) {
    case 1:
        day3Name = 'darbo diena';
        break;
    case 2:
        day3Name = 'darbo diena';
        break  
    case 3:
        day3Name = 'darbo diena';
        break
    case 4:
        day3Name = 'darbo diena';
        break
    case 5:
        day3Name = 'darbo diena';
        break
    case 6:
        day3Name = 'savaitgalis';
        break
    case 7:
        day3Name = 'savaitgalis';
        break
    default:
        day3Name = 'tokios dienos savaiteje nera';
        break
}
console.log(day3Name);

console.log('-/-/-/-/-/-');


const day4 = 1;
let day4Name = '6';

switch (day4) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day4Name = 'darbo diena';
        break;
    case 6:
    case 7:
        day4Name = 'savaitgalis';
        break;
    default:
        day4Name = 'tokios dienos savaiteje nera';
}
console.log(day4Name)


console.log('-/-/-/-/-/-');

// arbatos gaminimas:

// 1) uzvirinti vandeni
// 2) i puodeli ideti arbatos
// 3) isideti cukraus/saldikliu
// 4) uzpilame vandeniu
// 5) ismaisyti
// 6) gerti

const teaStep = 1;

switch (teaStep) {
    case 1:
        console.log('uzvirinti vandeni');
        break;
    case 2:
        console.log('i puodeli ideti arbatos');
        break;
    case 3:
        console.log('isideti cukraus/saldikliu');
        break;
    case 4:
        console.log('uzpilame vandeniu');
        break;
    case 5:
        console.log('ismaisyti');
        break;
    case 6:
        console.log('gerti')
    }

console.log('-------------');

const stop = 'Parko';
switch (stop) {
    case 'Parko': console.log('Parko');
    case 'Geniu': console.log('Geniu');
    case 'Tremtiniu': console.log('Tremtiniu');
    case 'Rudens': console.log('Rudens');
    case 'Mindaugo tiltas': console.log('Mindaugo tiltas');
    case 'Zaliasis tiltas': console.log('Zaliasis tiltas');
        break;
    case 'Lvovo': console.log('Lvovo');        
    case 'Vasaros': console.log('Vasaros');
    case 'Rudens 2': console.log('Rudens 2');
    case 'Tremtiniu 2': console.log('Tremtiniu 2');
    case 'Geniu 2': console.log('Geniu 2');
    case 'Parko 2': console.log('Parko 2');
        break;
}
console.log('   ---')

const stop2 = 'Vasaros';
switch (stop) {
    case 'Parko': console.log('Parko');
    case 'Geniu': console.log('Geniu');
    case 'Tremtiniu': console.log('Tremtiniu');
    case 'Rudens': console.log('Rudens');
    case 'Mindaugo tiltas': console.log('Mindaugo tiltas');
    case 'Zaliasis tiltas': console.log('Zaliasis tiltas');
        break;
    case 'Lvovo': console.log('Lvovo');        
    case 'Vasaros': console.log('Vasaros');
    case 'Rudens 2': console.log('Rudens 2');
    case 'Tremtiniu 2': console.log('Tremtiniu 2');
    case 'Geniu 2': console.log('Geniu 2');
    case 'Parko 2': console.log('Parko 2');
        break;
}














