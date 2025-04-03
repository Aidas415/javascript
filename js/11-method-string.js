/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
//'asdf.

console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text = 'Pomidoras';
console.log(text[0]);
console.log(text[text.length -1]);

// at
console.log('\nat (nurodo teksto simbolio vietą)');

console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(20));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));
console.log('--', text.at(-20));

console.log('--------------');

// includes
console.log('\nincludes (pasako ar ieškomas simbolis tekste yra)');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('A'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('x'));

console.log('----');

console.log('Bepasikulversciaudamas'.includes('a'));
console.log('Bepasikulversciaudamas'.includes('aaa'));
console.log('Bepasikulversciaudamas'.includes('kul'));
console.log('Bepasikulversciaudamas'.includes('ciauda'));
console.log('Bepasikulversciaudamas'.includes('cauda'));
console.log('Bepasikulversciaudamas'.includes('Bepa'));

console.log('--------------');

// startsWith

console.log('\nstartsWith (Pasako ar tekstas prasideda tuo ar tais simbolias)');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Po'));
console.log('Pomidoras'.startsWith('PO'));
console.log('Pomidoras'.startsWith('Pomid'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));
console.log(' Pomidoras'.startsWith('Pom'));
console.log(' Pomidoras'.startsWith(' Pom'));

console.log('--------------');

// endsWith

console.log('\nendsWith (Pasako ar tekstas baigiasi tuo ar tais simboliais)');
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('Pom'));
console.log('pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('as'));
console.log('Pomidoras'.endsWith('ras'));
console.log('Pomidoras'.endsWith('oras'));
console.log('pomidoras'.endsWith('doras'));
console.log('Pomidoras'.endsWith('Pomidoras'));

console.log('--------------');

// indexOf

console.log('\nindexOf (ieškomo simbolio indeksas (-1 = nerasta))');
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('pomidoras'.indexOf('om'));
console.log('Pomidoras'.indexOf('p'));
console.log('Pomidoras'.indexOf('x'));
console.log('pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('mido'));
console.log('Pomidoras'.indexOf('o'));
console.log('pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('------');

console.log('Kulverstukas'.indexOf('u'));
console.log('Kulverstukas'.indexOf('u', 2));

console.log('------');

const k = 'kulverstukas';
console.log(k.indexOf('u'));
console.log(k.indexOf('u', 2));
console.log(k.indexOf('u', k.indexOf('u') + 1));


console.log('--------------');

// repeat

console.log('\nrepeat (simbolio ar jų kiekio pakartojimas)');
console.log('a');
const symbol = 'm';
const megaSymbol = symbol.repeat(5);
console.log(symbol);
console.log(megaSymbol);

const symbol1 = 'Labas';
const megaSymbol1 = symbol1.repeat(5);
console.log(symbol1);
console.log(megaSymbol1);

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

// replace

console.log('\nreplace (Pakeičia parinką raidę ar žodį į pateiktą.)');
console.log('vasara'. replace('a', '-'));
console.log('vasara'. replace('a', 'A'));
const summer = 'vasara'.replace('a', '-');
console.log(summer);
// chain (grandinė)
const summer1 = 'vasara'.replace('a', '-').replace('a', '-');
console.log(summer1);

const summer3 = 'vasara'.replace('a', '-').replace('a', '-').replace('a', '-');
console.log(summer3)

console.log('-----');

const cloud = 'debesėlis'.replace('u', '***');
console.log(cloud);
const cloud1 = 'debesėlis'.replace('ebe', '***');
console.log(cloud1);
const cloud2 = 'debesėlis'.replace('', ' - ');
console.log(cloud2);

console.log('-------------');

const template = 'VARDAS ejo i parduotuve pirkti DAIKTAS.';
const name = 'Jonas';
const item = 'pomidoras';
const shop = template.replace('VARDAS', name).replace('DAIKTAS', item);
console.log(shop);

// replaceAll

console.log('\nreplaceAll (Pakeičia visus simbolius, simboliu junginius.)')
console.log('vasara'.replaceAll('a', '-'));
console.log('vasara'.replaceAll());
console.log('vasara');
console.log('vasara');

console.log('-------------');

const template3 = 'VARDAS saunuolis, VARDAS grazuolis, VARDAS smalsuolis, VARDAS murzius.';
const multiName = template3.replaceAll('VARDAS', 'PETRAS');
console.log(multiName);

console.log('-------------');

console.log('ananasas'.replace('a', ''));
console.log('ananasas'.replaceAll('a', ''));
console.log('ananasas'.replaceAll('na', ''));

console.log('-------------');

// Labas rytas, Lietuva!
const hi = 'Labas rytas, Lietuva!';
const hiNormalSize = hi.replaceAll(' ', '').length;
console.log(hiNormalSize);

// toUpperCase

console.log('\ntoUpperCase (raides keičia į didžiasias raides)');

console.log('labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('5s2d5 cnj64; 5sdf'.toUpperCase());

// toLowerCase

console.log('\ntoLowerCase (keičia į mažasias raides)');
console.log('LABAS'.toLowerCase());
console.log('LaBAs'.toLowerCase());
console.log('KNBS 65DFS; 585F'.toLowerCase());

console.log('-------------');

//slice
console.log('\nslice ("atkerpa" teksto atkarpą)');
console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(0, 1));
console.log('pomidoras'.slice(0, 2));
console.log('pomidoras'.slice(0, 3));
console.log('pomidoras'.slice(1, 3));
console.log('pomidoras'.slice(0, -1));
console.log('pomidoras'.slice(0, -2));
console.log('pomidoras'.slice(2, -2));

console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(-6, -2));

console.log('-------------');

// trim

console.log('\ntrim (nuvalo tarpus prieš ir po teksto.)');

console.log(`"${'pomidoras'.trim()}"`);
console.log(`"${'     pomidoras'.trim()}"`);
console.log(`"${'pomidoras     '.trim()}"`);
console.log(`"${'     pomidoras      '.trim()}"`);
console.log(`"${'    labas     rytas   '.trim()}"`);
console.log(`"${'    labas     rytas   '.trimEnd()}"`);
console.log(`"${'    labas     rytas   '.trimStart()}"`);

console.log('-------------');

// split

console.log('\nsplit ("sukarpo" tekstą į sąrašo dalis.)');
const t1 = 'zodis';
const t1Parts = t1.split();
const t1Parts2 = t1.split('o');
const t1Parts3 = t1.split('d');

console.log(t1Parts);
console.log(t1Parts2);
console.log(t1Parts3);

const t2 = 'kultivatorius';
const t2Parts = t2.split('t');
console.log(t2Parts);

const t3 = 'labas rytas Lietuva';
const t3Parts = t3.split(' ');
console.log(t3Parts);

const t4 = 'povas';
const t4Parts = t4.split('');
console.log(t4Parts);

console.log('duona'.split('o'));
console.log('duona'.split('u'));
console.log('duona'.split('d'));
console.log('duona'.split('n'));
console.log('duona'.split('a'));

console.log('ana'.split('a'));
console.log('vasara'.split('a'));
console.log('245841'.split('4'));
console.log(''.split(''));

const t5 = 'Labas. Ka tu. Ka tu veiki.';
const sentenceCount = t5.split('.').length - 1;
console.log(sentenceCount);

console.log('pomidoras'.split('d'));
console.log('pomidoras'.split('dor'));
console.log('ananasas'.split('na'));

console.log('-------------');

// charCodeAt

console.log('\rcharCodeAt (pateikia simbolių skaitmeninį kodą.)');
console.log('a'.charCodeAt(0));
console.log("A".charCodeAt(0));
console.log('ą'.charCodeAt(0));
console.log("l".charCodeAt(0));
console.log('i'.charCodeAt(0));
console.log("L".charCodeAt(0));
console.log('Ž'.charCodeAt(0));
console.log("ė".charCodeAt(0));

const s1 = String.fromCharCode(65);
console.log(s1);
const s2 = String.fromCharCode(260);
console.log(s2);
const s3 = String.fromCharCode(2600);
console.log(s3);
const s4 = String.fromCharCode(26000);
console.log(s4);
const s5 = String.fromCharCode(9845);
console.log(s5);