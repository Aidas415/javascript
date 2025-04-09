/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
//'asdf.

console.log('Labas');       // Labas
console.log('Labas'[0]);    // L
console.log('Labas'[1]);    // a
console.log('Labas'[2]);    // b
console.log('Labas'[3]);    // a
console.log('Labas'[4]);    // s

console.clear();

const text = 'Pomidoras';
console.log(text[0]);               // P
console.log(text[text.length -1]);  // s

// at
console.log('\nat (nurodo teksto simbolį indekso vietoje)');

console.log('--', text.at(0));      // P
console.log('--', text.at(1));      // o
console.log('--', text.at(2));      // m
console.log('--', text.at(20));     // undefined
console.log('--', text.at(-1));     // s ("-" reiškia nuo galo)
console.log('--', text.at(-2));     // a ("-" reiškia nuo galo)
console.log('--', text.at(-3));     // r ("-" reiškia nuo galo)
console.log('--', text.at(-20));    // undefined

console.clear();

console.log('------');

// includes
console.log('\nincludes (pasako ar ieškomas simbolis tekste yra)');
console.log('Vasara'.includes('V'));    // true
console.log('Vasara'.includes('v'));    // false
console.log('Vasara'.includes('A'));    // false
console.log('Vasara'.includes('a'));    // true
console.log('Vasara'.includes('x'));    // false

console.log('------');

console.log('Bepasikulversciaudamas'.includes('a'));        // true    
console.log('Bepasikulversciaudamas'.includes('aaa'));      // false
console.log('Bepasikulversciaudamas'.includes('kul'));      // true
console.log('Bepasikulversciaudamas'.includes('ciauda'));   // true
console.log('Bepasikulversciaudamas'.includes('cauda'));    // false
console.log('Bepasikulversciaudamas'.includes('Bepa'));     // true

console.clear();

console.log('------');

// startsWith

console.log('\nstartsWith (Pasako ar tekstas prasideda tuo ar tais simbolias)');
console.log('Pomidoras'.startsWith('a'));           // false
console.log('Pomidoras'.startsWith('p'));           // false
console.log('Pomidoras'.startsWith('P'));           // true
console.log('Pomidoras'.startsWith('Po'));          // true
console.log('Pomidoras'.startsWith('PO'));          // false
console.log('Pomidoras'.startsWith('Pomid'));       // true
console.log('Pomidoras'.startsWith('Pomidoras'));   // true
console.log('Pomidoras'.startsWith('doras'));       // false
console.log(' Pomidoras'.startsWith('Pom'));        // false
console.log(' Pomidoras'.startsWith(' Pom'));       // true

console.clear();

console.log('------');

// endsWith

console.log('\nendsWith (Pasako ar tekstas baigiasi tuo ar tais simboliais)');
console.log('Pomidoras'.endsWith('a'));         // false
console.log('Pomidoras'.endsWith('Pom'));       // false
console.log('pomidoras'.endsWith('s'));         // true
console.log('Pomidoras'.endsWith('as'));        // true
console.log('Pomidoras'.endsWith('ras'));       // true
console.log('Pomidoras'.endsWith('oras'));      // true
console.log('pomidoras'.endsWith('doras'));     // true
console.log('Pomidoras'.endsWith('Pomidoras')); // true

console.clear();

console.log('------');

// indexOf

console.log('\nindexOf (Ieškomo simbolio vieta (indeksas), (-1) = nerasta)');
console.log('Pomidoras'.indexOf('a'));      // 7
console.log('Pomidoras'.indexOf('o'));      // 1
console.log('pomidoras'.indexOf('om'));     // 1
console.log('Pomidoras'.indexOf('p'));      // -1
console.log('Pomidoras'.indexOf('x'));      // -1
console.log('Pomidoras'.indexOf('P'));      // 0

console.clear();

console.log('------');

console.log('Pomidoras'.indexOf('a'));          // 7
console.log('Pomidoras'.indexOf('mido'));       // 2
console.log('Pomidoras'.indexOf('o'));          // 1
console.log('pomidoras'.indexOf('o', 0));       // 1
console.log('Pomidoras'.indexOf('o', 1));       // 1
console.log('Pomidoras'.indexOf('o', 2));       // 5
console.log('Kulverstukas'.indexOf('u'));       // 1
console.log('Kulverstukas'.indexOf('u', 2));    // 8

console.log('------');

const k = 'kulverstukas';
console.log(k.indexOf('u'));                        // 1
console.log(k.indexOf('u', 2));                     // 8
console.log(k.indexOf('u', k.indexOf('u') + 1));    // 8  

console.clear();

console.log('------');

// repeat

console.log('\nrepeat (simbolio ar jų kiekio pakartojimas)');
console.log('a');                       // a
const symbol = 'm';                     
const megaSymbol = symbol.repeat(5);    
console.log(symbol);                    // m
console.log(megaSymbol);                // mmmmm

const symbol1 = 'Labas';
const megaSymbol1 = symbol1.repeat(5);
console.log(symbol1);                   //Labas
console.log(megaSymbol1);               //LabasLabasLabasLabasLabas

console.log('------');

// for būdas

function stringRepeat(text, count)
{
    let result = '';
    for (let i = 0; i < Math.floor(count); i++)
        {
            result += text;
        }
    return result;
}
console.log(stringRepeat('riki-', 3));

console.clear();

// replace

console.log('\nreplace (Pakeičia parinką raidę/junginį/žodį į pateiktą.)');
console.log('vasara'. replace('a', '-'));   // v-sara
console.log('vasara'. replace('a', 'A'));   // vAsara
const summer = 'vasara'.replace('s', 'k');  // vakara
console.log(summer);
// chain (grandinė)
const summer1 = 'vasara'.replace('a', '-').replace('a', '-');
console.log(summer1);                       // v-s-ra

const summer3 = 'vasara'.replace('a', '-').replace('a', '-').replace('a', '-');
console.log(summer3)                        // v-s-r-

console.clear();

console.log('------');

const cloud = 'debesėlis'.replace('u', '***');
console.log(cloud);                         // debesėlis
const cloud1 = 'debesėlis'.replace('ebe', '***');  
console.log(cloud1);                        // d***sėlis
const cloud2 = 'debesėlis'.replace('', ' - ');
console.log(cloud2);                        // -debesėlis

console.clear();

console.log('------');

const template = 'VARDAS ėjo į parduotuvę pirkti DAIKTAS.';
const name = 'Jonas';
const item = 'pomidoras';
const shop = template.replace('VARDAS', name).replace('DAIKTAS', item);
console.log(shop);  // Jonas ėjo į parduotuvę pirkti pomidoras.

// replaceAll

console.log('\nreplaceAll (Pakeičia visus simbolius, simboliu junginius.)')
console.log('vasara'.replaceAll('a', '-'));     // a-s-r-
console.log('vasara'.replaceAll());             // vasara
console.log('kokosas'.replaceAll('s', 'r'));    // kokorar
console.log('kokosas'.replaceAll('o', 'u'));    // kukusas

console.log('------');

const template3 = 'VARDAS saunuolis, VARDAS grazuolis, VARDAS smalsuolis, VARDAS murzius.';
const multiName = template3.replaceAll('VARDAS', 'PETRAS');
console.log(multiName);     //PETRAS saunuolis, PETRAS grazuolis, PETRAS smalsuolis, PETRAS murzius

console.clear();

console.log('------');

console.log('ananasas'.replace('a', ''));       //nanasas
console.log('ananasas'.replaceAll('a', ''));    // nnss
console.log('ananasas'.replaceAll('na', ''));   // asas

console.log('------');

// Labas rytas, Lietuva!
const hi = 'Labas rytas, Lietuva!';
const hiNormalSize = hi.replaceAll(' ', '').length;
console.log(hiNormalSize);                      // 19

console.clear();

// toUpperCase

console.log('\ntoUpperCase (Visas raides keičia į didžiasias raides)');

console.log('labas'.toUpperCase());             // LABAS
console.log('Labas'.toUpperCase());             // LABAS
console.log('5s2d5 cnj64; 5sdf'.toUpperCase()); // 5S2D5 CNJ64 5SDF

// toLowerCase

console.log('\ntoLowerCase (Visas raides keičia į mažasias raides)');
console.log('LABAS'.toLowerCase());             // labas
console.log('LaBAs'.toLowerCase());             // labas
console.log('KNBS 65DFS; 585F'.toLowerCase());  // knbs 65dfs 585f

//console.clear();

console.log('------');

//slice
console.log('\nslice ("Atkerpa" teksto atkarpą)');
console.log('pomidoras'.slice());           // pomidoras
console.log('pomidoras'.slice(0));          // pomidoras
console.log('pomidoras'.slice(1));          // omidoras
console.log('pomidoras'.slice(2));          // midoras
console.log('pomidoras'.slice(0, 1));       // p
console.log('pomidoras'.slice(0, 2));       // po
console.log('pomidoras'.slice(0, 3));       // pom
console.log('pomidoras'.slice(1, 3));       // om
console.log('pomidoras'.slice(0, -1));      // pomidora
console.log('pomidoras'.slice(0, -2));      // pomidor
console.log('pomidoras'.slice(2, -2));      // midor
console.log('pomidoras'.slice(-4));         // oras
console.log('pomidoras'.slice(-6, -2));     // idor

console.clear();

console.log('------');

// trim

console.log('\ntrim (nuvalo tarpus prieš ir po teksto.)');

console.log(`"${'pomidoras'.trim()}"`);                // "pomidoras"
console.log(`"${'   pomidoras'.trim()}"`);             // "pomidoras"
console.log(`"${'pomidoras   '.trim()}"`);             // "pomidoras"
console.log(`"${'   pomidoras   '.trim()}"`);          // "pomidoras"
console.log(`"${'   labas   rytas   '.trim()}"`);      // "labas   rytas"
console.log(`"${'   labas   rytas   '.trimEnd()}"`);   // "   labas   rytas"   
console.log(`"${'   labas   rytas   '.trimStart()}"`); // "labas   rytas   "

console.clear();

console.log('------');

// split

console.log('\nsplit ("Sukarpo" tekstą į sąrašo dalis.)');
const t1 = 'zodis';
const t1Parts = t1.split();
const t1Parts2 = t1.split('o');
const t1Parts3 = t1.split('d');
console.log(t1Parts);                   // ['zodis']
console.log(t1Parts2);                  // ['z', 'dis']
console.log(t1Parts3);                  // ['zo', 'is']

const t2 = 'kultivatorius';
const t2Parts = t2.split('t');
console.log(t2Parts);                   // ['kul', 'iva', 'orius']
const t3 = 'labas rytas Lietuva';
const t3Parts = t3.split(' ');          
console.log(t3Parts);                   // ['labas', 'rytas', 'Lietuva']
const t4 = 'povas';
const t4Parts = t4.split('');
console.log(t4Parts);                   // ['p', 'o', 'v', 'a', 's']

console.log('duona'.split('o'));        // ['du', 'na']
console.log('duona'.split('u'));        // ['d', 'ona']
console.log('duona'.split('d'));        // ['', 'uona']
console.log('duona'.split('n'));        // ['duo', 'a']
console.log('duona'.split('a'));        // ['duon', '']

console.log('ana'.split('a'));          // ['', 'n', '']
console.log('vasara'.split('a'));       // ['v', 's', 'r']
console.log('245841'.split('4'));       // ['2', '58', '1']
console.log(''.split(''));              // []

const t5 = 'Labas. Ka tu. Ka tu veiki.';
const sentenceCount = t5.split('.').length - 1;
console.log(sentenceCount);             // 3

console.log('pomidoras'.split('d'));    // ['pomi', 'oras']
console.log('pomidoras'.split('dor'));  // ['pomi', 'as']
console.log('ananasas'.split('na'));    // ['a', '', 'sas']

console.clear();

console.log('------');

// charCodeAt

console.log('\rcharCodeAt (Pateikia simbolių skaitmeninį kodą.)');
console.log('a'.charCodeAt(0));     // 97
console.log("A".charCodeAt(0));     // 65   
console.log('ą'.charCodeAt(0));     // 261
console.log("l".charCodeAt(0));     // 108
console.log('i'.charCodeAt(0));     // 105
console.log("L".charCodeAt(0));     // 76
console.log('Ž'.charCodeAt(0));     // 381
console.log("ė".charCodeAt(0));     // 279

const s1 = String.fromCharCode(65);
console.log(s1);                    // A
const s2 = String.fromCharCode(260);
console.log(s2);                    // Ą
const s3 = String.fromCharCode(2600);
console.log(s3);                    //
const s4 = String.fromCharCode(26000);
console.log(s4);                    //
const s5 = String.fromCharCode(9845);
console.log(s5);     

console.clear();

//const word = 'tostas'
//toUpperCase()
/*
function capitalizeWord(word) {
    const word = 'tostas'
    word[0].toUpperCase();
    return word;
  }
console.log(capitalizeWord(word));
*/

//console.log('labas'.toUpperCase())



function capitalizeWord(word) 
{
    let ward = ''
    'word'.trim();
    'word[0]'.toUpperCase();
    return word;
}

console.log(capitalizeWord('labas'));

const diktant = 'sjSjjAndxa'.replace('s', 'o').replace('S', 'O')



console.log(diktant)




console.log('\nreplace (Pakeičia parinką raidę/junginį/žodį į pateiktą.)');
console.log('vasara'. replace('a', '-'));   // v-sara
console.log('vasara'. replace('a', 'A'));   // vAsara
const summer4 = 'vasara'.replace('s', 'k');  
console.log(summer4);
// chain (grandinė)
const summer5 = 'vasara'.replace('a', '-').replace('a', '-');
console.log(summer5);                       // v-s-ra

const summer6 = 'vasara'.replace('a', '-').replace('a', '-').replace('a', '-');
console.log(summer6)                        // v-s-r-

//console.clear();





