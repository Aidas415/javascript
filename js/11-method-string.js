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
console.log('\nat "nurodo teksto simbolio vietą"');

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
console.log('\nincludes "pasako ar ieškomas simbolis tekste yra"');
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

console.log('\nstartsWith "Pasako ar tekstas prasideda tuo ar tais simbolias"');
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

console.log('\nendsWith "Pasako ar tekstas baigiasi tuo ar tais simboliais"');
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

console.log('\nindexOf "ieškomo simbolio indeksas (-1 = nerasta)"');
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

console.log('\nrepeat "simbolio ar jų kiekio pakartojimas"');
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

console.log('\nreplace');

console.log('vasara'. replace('a', 'A'));

const summer = 'vasara'.replace('a', '-');
console.log(summer);

const summer1 = 'vasara'.replace('a', '-');
console.log(summer1);

const summer2 = 'vasara'.replace('a', '-');
console.log(summer2)


console.log('\ntoUpperCase (keičia į didžiasias raides');
console.log('\ntoLowerCase (keičia į mažasias raides)');
console.log('\nslice (gražina teksto atkarpą)');
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(3));
console.log('pomidoras'.slice(0, 5));
console.log('pomidoras'.slice(0, -2));
console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(-6, -2));

// trim

console.log('\ntrim (nuvalo tarpus prieš ir po teksto');

// split

console.log('\nsplit ()');
const t1 = 'zodis';
const t1Parts = t1.split();

console.log(t1Parts);



console.log('a'.charCodeAt(0));
console.log("A".charCodeAt(0));
console.log('ą'.charCodeAt(0));
console.log("l".charCodeAt(0));
console.log('i'.charCodeAt(0));
console.log("L".charCodeAt(0));
console.log('Ž'.charCodeAt(0));
console.log("ė".charCodeAt(0));





console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();












