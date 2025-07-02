// STRING
 
// Kabutės
 
const string1 = "stringas 'labas'";
const string5 = "stringas \"labas\"";
const string2 = 'stringas';
 
const string3 = `stringas ${new Date}`;
const string4 = 'stringas' + string1;
 
console.log(string3)
 
// Metodai
 
let string = 'Man labai patinka mokytis JavaScript';
// 1. .length - apskaičiuoja ilgį (su tarpais);
 
console.log(string.length);
 
// 2. String'o pakeitimo metodai
 
// a) .toUpperCase(); - pakeičia visas didžiosiomis
console.log(string.toUpperCase());
 
// b) .toLowerCase(); - pakeičia visas mažosiomis
console.log(string.toLowerCase());
 
// 3. String'o dalių paėmimas
// a) .slice(start, end) - grąžina string'o dalį nuo start iki end
console.log(string.slice(1)); // 'an labai patinka mokytis JavaScript'
console.log(string.slice(-1)); // 't'
 
console.log(string.slice(0, 3)); // [0, 3) - end parametras ne imtinai. 'Man'
console.log(string.slice(-3, 36)); // [0, 3) - 'ipt'
console.log(string.slice(-3, string.length)); // [0, 3) - 'ipt'
console.log(string.slice(-36, -33)); // [0, 3) - 'Man'
 
// b) .substring(start, end) - grąžina string'o dalį nuo start iki end
console.log(string.substring(1)); // 'an labai patinka mokytis JavaScript'
console.log(string.substring(0, 3)); // 'Man'
 
// 4. Paieška string'e
// a) .indexOf(x) - ieško ieškomo fragmento indekso
console.log(string.indexOf('Man')); // 0
console.log(string.indexOf('Java')); // 26, ieško pirmo sutikto!
 
// b) .lastIndexOf(x) - ieško nuo galo
const stringSuDviemJava = 'Man labai patinka mokytis JavaScript ir Java'
console.log(stringSuDviemJava.lastIndexOf('Man')); // 0
console.log(stringSuDviemJava.lastIndexOf('Java')); // 40, ieško paskutinio sutikto!
 
// c) .include(x) - ieško argumento reikšmės ir jei randa grąžina true
console.log(string.includes('labai')); //true
console.log(string.includes('labas')); //false
 
// d) .startsWith(x) - tikrina ar stringas prasideda argumento reikšme ir jei randa grąžina true
console.log(string.startsWith('Man')); //true
console.log(string.startsWith('labai')); //false
 
// e) .endsWith(x) - tikrina ar stringas pasibaigia argumento reikšme ir jei randa grąžina true
console.log(string.endsWith('JavaScript')); //true
console.log(string.endsWith('cript')); //true
console.log(string.endsWith('Man')); //false
 
// 5. String'o pakeitimas
 
// a) .replace(ieškoma reikšmė, kuo keičiam) - suranda PIRMĄ ieškomą reikšmę ir ją pakeičia
console.log(string.replace('Man', 'Jums')); // Jums labai patinka mokytis JavaScript
 
// jeigu norime, kad išliktų pakeistas
string = string.replace('Man', 'Jums'); // - perrašau stringą
const pakeistasStringas = ' ' + string.replace('Man', 'Jums');
console.log(string, pakeistasStringas);
 
// b) .replaceAll(ieškomos reikšmės, kuo keičiam) - suranda visas ieškomas reikšmes ir ją pakeičia
console.log(stringSuDviemJava.replaceAll('Java', 'Jums')); // Man labai patinka mokytis JumsScript ir Jums
 
console.clear();
 
// 6. String'o dalijimas ir sujungimas
// a) .split(perKaDalinam) - padaliją stringą per nurodytą reikšmę
console.log(string.split(' ')); // ['Man', 'labai', 'patinka', 'mokytis', 'JavaScript']
 
console.log(string.split('')); // (37) ['J', 'u', 'm', 's', ' ', 'l', 'a', 'b', 'a', 'i', ' ', 'p', 'a', 't', 'i', 'n', 'k', 'a', ' ', 'm', 'o', 'k', 'y', 't', 'i', 's', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
 
// b) stringas.concat('kitasStringas') - sujungia du string'us į vieną
console.log('Hello, '.concat(string)); // Hello, Man labai patinka mokytis JavaScript
 
console.log(string.concat(pakeistasStringas))// Man labai patinka mokytis JavaScript Jums labai patinka mokytis JavaScript
 
console.log(string.concat(' taip man ir reikia'))// Man labai patinka mokytis JavaScript taip man ir reikia
 
// 7. String'o tarpų pradžioje ir gale panaikinimas
// a) .trim()
 
console.log(' Labas     '.trim()); //'Labas'
 
// b) .trimStart()
console.log(' Labas     '.trimStart()); //'Labas     '
 
// c) .trimEnd()
console.log(' Labas     '.trimEnd()); //' Labas'
 
// 8. Kartojimas
// .repeat(3)
console.log('miau '.repeat(5)); // 'miau miau miau miau miau '
 
// 9. Simbolių pridėjimas pradžioje ir gale
 
// a) .padStart(kiekSimboliųReikia, kuoUžpildyti)
const pvz = '5';
console.log(pvz.padStart(3, '0')); // '005'
 
// b) .padEnd(kiekSimboliųReikia, kuoUžpildyti)
console.log(pvz.padEnd(3, '0')); // '500'
 
// ASCII ir UNICODE
// https://ascii.cl/
// https://symbl.cc/
 
// .charAt(index) - grąžina simbolį, esantį nurodytame indekse;
console.log(string.charAt(0));
 
 
// .charCodeAt(index) .codePointAt(index) - grąžina simbolio ASCII arba Unicode reikšmę, esančią nurodytame index'e
 
console.log(string.charCodeAt(1)); //117 <--pakankamas, kai naudojami paprasti simboliai
console.log(string.codePointAt(1)); //117 <-- reiktų naudoti, kai naudojami surogatiniai simboliai, pvz., emoji ir pan.
 
// Palyginimas
// Funkcija     | Grąžina               | Veikia su surogatais?          | Pavyzdys su 😊 (128522)
// charCodeAt   | 16 bitų reikšmę       | Grąžina tik dalinę reikšmę     | charCodeAt(0) -> 55357
// codePointAt  | Unicode kodų tašką    | Grąžina pilną Unicode reikšmę  | codePointAt(0) -> 128522
 
// .normalize() - yra naudojamas normalizuoti Unicode simbolius pagal nurodytą normalizacijos formą, tai padeda užtikrinti, kad skirtingai užrašyti simboliai, kurie vizualiai atrodo vienodai, būtų laikomi identiškais
 
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
 
console.log(`${name1}, ${name2}`); //"Amélie, Amélie"
console.log(name1 === name2); // false
console.log(name1.length === name2.length); // false
 
const normalizeName1 = name1.normalize();
const normalizeName2 = name2.normalize();
 
console.log(`${normalizeName1}, ${normalizeName2}`); //"Amélie, Amélie"
console.log(normalizeName1 === normalizeName2); // true
console.log(normalizeName1.length === normalizeName2.length); // true
 
console.clear();
 
// Normalizacijos formos
// normalize(forma) metodas leidžia pasirinkti vieną iš šių Unicode normalizacijos formų:
 
// Forma    Aprašymas
// NFC  | Normalizuotas sudėtinis formatas(Canonical Composition).Kombinuoja simbolius, kai įmanoma.
// NFD  | Normalizuotas išskaidytas formatas(Canonical Decomposition).Išskaido simbolius.
// NFKC | Sudėtinis formatas su suderinamumu(Compatibility Composition), bet pašalina stiliaus skirtumus.
// NFKD | Išskaidytas formatas su suderinamumu(Compatibility Decomposition), bet pašalina stiliaus skirtumus.
 
// 1. Normalizavimas su NFC ir NFD
let strN = "a\u0301"; // "a" su akcentu (U+0061 ir U+0301)
console.log(strN); // "á" (atrodo kaip "á")
 
// a) Naudojant NFC
let normalizedNFC = strN.normalize("NFC");
console.log(normalizedNFC); // "á" (vienas simbolis U+00E1)
 
// b) Naudojant NFD
let normalizedNFD = strN.normalize("NFD");
console.log(normalizedNFD); // "á" (du simboliai: U+0061 ir U+0301)
 
// 2. Normalizavimas su NFKC ir NFKD
let strApskritime = "①"; // Cirkuliarinis numeris "1" (U+2460)
let paprastasVienetas = '1';
 
console.log(strApskritime === paprastasVienetas); //false
 
// a) naudojant NFC
console.log(strApskritime.normalize("NFC")); // "①" (nekeičia)
console.log(strApskritime.normalize("NFC") === paprastasVienetas); //false
 
// b) naudojant NFKC (NFKD veikia atitinkamai)
console.log(strApskritime.normalize("NFKC")); // "1" (pakeičia į įprastą "1")
console.log(strApskritime.normalize("NFKC") === paprastasVienetas); //true

 