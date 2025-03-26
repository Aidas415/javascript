//Atvirksciai uzrasytas vardas "AIDAS"
const text = "AIDAS";
const FirstSymbol = text[0];
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);

console.log(text[4] + text[3] + text[2] 
    + text[1] + text[0]);


    console.log('-----NAMU DARBAI-----');

    console.log(' I. Kintamuju inicijavimas');

/*
1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis.
Po kiekvieno jų inicijavimo išvesti i console
*/
let sv = 86;
JonoSvoris1 = 'Pernai Jono svoris buvo ' + sv + ' kg.';
console.log(JonoSvoris1);
sv = 79;
JonoSvoris2 = 'Dabar Jonas sveria ' + sv + ' kg.'
console.log(JonoSvoris2);

let ug = 181;
JonoUgis1 = 'Tada Jono ugis buvo ' + ug + ' cm.'
console.log(JonoUgis1);
ug = 178;
JonoUgis2 = 'Siuo metu Jono ugis jau tik ' + ug + ' cm.';
console.log(JonoUgis2);

let am = 51;
amzius1 = 'Anuomet Jonas buvo ' + am + ' m. amziaus.'
console.log(amzius1);
am = 60;
amzius2 = 'Vasara Jonui sukaks jau ' + am + ' metu.'
console.log(amzius2);

console.log(`  (2)`);

/*
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis.
Po kiekvieno jų inicijavimo išvesti į console
*/
let vardas = '"Daiva"';
mokine1 = '11(a) klaseje yra dvi mokines vardu ' + vardas + '.';
console.log(mokine1);
vardas = '"Jolanta"';
mokine2 = 'O 11(b) klaseje yra dvi mokines vardu ' + vardas + '.';
console.log(mokine2);

let pavarde = 'Vaidaitė';
pavarde1 = 'Ji sakosi esanti ' + pavarde + '!?';
console.log(pavarde1);
pavarde = 'Staseviciute';
pavarde2 = 'Mamos mergautine pavarde buvo ' + '"' + pavarde + '".';
console.log(pavarde2);

let verte = 'geriausia';
verte1 = 'Musu klase buvo ' + verte + '.';
console.log(verte1);
verte = 'vidutinė';
verte2 = 'O draugo klase mokykloje buvo ' + verte + '.';
console.log(verte2);

console.log(`  (3)`);
/*
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis 
skaičių tipo reikšmėmis.
Po kiekvieno jų inicijavimo išvesti i console
*/
const laipsniai = [-10, 8, 30];
salta = 'Ziemos metu oro temperatura krinta iki ' + laipsniai[0]
+ 'C.'
console.log(salta)

vidutine = 'Vasara ir pavasari temperaturos vidurkis yra ' + laipsniai[1] 
+ 'C.';
console.log(vidutine);

karsta = 'Dabar ir Lietuvoje daznai sulaukiame ' + laipsniai[2] + 
' laipsniu karscio.'
console.log(karsta);

console.log('  (4)');
/*
4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis 
teksto tipo reikšmėmis. 
Po kiekvieno jų inicijavimo išvesti į console
*/
const uogos = ['braskes', 'avietes', 'vysnios', 'tresnes', 'silauoges'];
uogos1 = 'Iki pernai Tomo ukyje augo tik ' + uogos[2] + ' ir ' + uogos[3] 
+ ', bet nuo siu metu ten auginamos ir ' + uogos[0] + [', '] + uogos[1] 
+ ' bei ' + uogos[4] + '.';
console.log(uogos1);
const valiuta = ['pinigai', 'rubliai', 'litai', 'eurai','talonai'];
valiuta1 = 'Mano gyvenime Lietuvoje apyvartoje cirkuliavo ir ' + 
valiuta[1] + ', ir ' + valiuta[4] + ', ir ' + valiuta[2] + ', ir ' + 
valiuta[3] + '. Tai skirtingo laikotarpio Lietuvos ' + valiuta[0] + '.'  
console.log(valiuta1);

console.log(' II. Veiksmai su kintamaisiais');

console.log('  (1)');
/*
1. susumuoti visus skaičiaus tipo kintamuosius
*/
suma = sv + ug + am;
console.log(suma);

console.log('  (2)');
/*
2. Sujungti visus teksto tipo kintamuosius taip, 
jog tarp jų būtų sudarytas tarpas
*/
let vardas1 = 'Paulina';
let dydis = 'mazoji';
let titulas = 'karalaite';
vaikas = 'Musu ' + dydis + ' ' + vardas1 + ' buvo seimos ' + titulas + '.';
console.log(vaikas);

console.log('  (3)');
/*
3. Apskaičiuoti vertę iš sąrašų, kurių verčių tipas yra 
skaičiai pagal pateiktą logiką:
a) 1-2+3-4+5, 
b) rezultatą išvesti į console
*/
const zaislai1 = ['Balti', 8, 4, 3, 5, 2];
const zaislai2 = ['Raudoni', 3, 6, 2, 1, 5];
const zaislai3 = ['Mėlyni', 6, 2, 3, 5, 4];
let aritmetika1 = 0;
aritmetika1 += zaislai1[1];
aritmetika1 -= zaislai1[2];
aritmetika1 += zaislai1[3];
aritmetika1 -= zaislai1[4];
aritmetika1 += zaislai1[5];
console.log(aritmetika1);
let aritmetika2 = 0;
aritmetika2 += zaislai2[1];
aritmetika2 -= zaislai2[2];
aritmetika2 += zaislai2[3];
aritmetika2 -= zaislai2[4];
aritmetika2 += zaislai2[5];
console.log(aritmetika2);
let aritmetika3 = 0;
aritmetika3 += zaislai3[1];
aritmetika3 -= zaislai3[2];
aritmetika3 += zaislai3[3];
aritmetika3 -= zaislai3[4];
aritmetika3 += zaislai3[5];
console.log(aritmetika3)

console.log('  (4)');

/*
4. sujungti sąrašu vertes, kurių tipas yra tekstai
nuo sąrašo galo iki pradzios taip, jog tarp jų 
būtų kablelis ir tarpas
*/
const darzas = ['bulves', 'morkos', 'agurkai', 'ridikai', 'burokeliai']
let darzoves1 = darzas[4] + ', ';
darzoves1 += darzas[3] + ', ';
darzoves1 += darzas[2] + ', ';
darzoves1 += darzas[1] + ', ';
darzoves1 += darzas[0] + '.'
console.log(darzoves1);

let i = 4;
let darzoves = darzas[i] +', ';
i--;
darzoves += darzas[i] + ', ';
i--;
darzoves += darzas[i] + ', ';
i--;
darzoves += darzas[i] + ', ';
i--;
darzoves += darzas[i] + '.'
console.log(darzoves);

let j = 4;
let darzoves2 = darzas[j] +', ';
j -= 1;
darzoves2 += darzas[j] + ', ';
j -= 1;
darzoves2 += darzas[j] + ', ';
j -= 1;
darzoves2 += darzas[j] + ', ';
j -= 1;
darzoves2 += darzas[j] + '.'
console.log(darzoves2);

console.clear();

console.log(' III. Kintamuju palyginimas');
/*
Priklausomai nuo sąlygos sukurkite 2 skirtingų reiksmių
nurodyto tipo kintamuosius. Lygininat, jei rezulltatas
tenkina palyginimo sąlygą (nurodytą žemiau), tai į console
išvesti žodį "Pomidoras", o jei sąlyga nėra tenkinama,
išvesti sakinį "Bandykite kitą kartą".
*/
// 1. tarpusavyje palyginti skaičiaus tipo kintamuosius:
//  a) kuris didesnis
//  b) kuris mažesnis
//  c) ar jie lygūs
//  d) ar jie nelygūs
//  e) kuris didesnis arba lygus
//  f) kuris mažesnis arba lygus
const kint1 = 7;
const kint2 = 8;
if (kint1 > kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (kint1 < kint2) {
    console.log('Pomidoras');
}
if (kint1 == kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (kint1 != kint2) {
    console.log('Pomidoras');
}
if (kint1 >= kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (kint1 <= kint2) {
    console.log('Pomidoras');
} 

// 2. išvesti teksto tipo kintamųjų ilgius
const ilg1 = 'astronomija';
const ilg2 = 'kosmosas';
console.log(ilg1.length);
console.log(ilg2.length);

// 3.tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// a) kuris didesnis
if (ilg1.length > ilg2.length) {
    console.log('Zodis "astronomija" ilgesnis uz zodi "kosmosas"');
}

// b) kuris mažesnis
if (ilg1.length < ilg2.length) {
    console.log('Zodis "astronomija" trumpesnis uz zodi "kosmosas".');
} else {
    console.log('Zodis "kosmosas" trumpesnis uz zodi "astronomija".');
}

// c) ar jie lygūs
// d) ar jie nelygūs
if (ilg1.length == ilg2.length) {
    console.log('Zodziu "astronomija" ir "kosmosas" ilgiai yra lygus.');
} else {
    console.log('Zodziu "astronomija" ir "kosmosas" ilgiai yra nelygus.');
}

// e) kuris didesnis arba lygus
if (ilg1.length >= ilg2.length) {
    console.log('Zodis "astronomija" yra ilgesnis arba lygus uz zodi "kosmosas".');
}

// f) kuris mažesnis arba lygus 
if (ilg1.length <= ilg2.length) {
    console.log('Zodis "astronomija" yra trumpesnis arba lygus uz zodi "kosmosas".');
} else {
    console.log('Zodis "kosmosas" yra trumpesnis arba lygus uz zodi "astronomija".');
}

// 2. išvesti sąrašo tipo kintamųjų ilgius
const vnt = ['Mylia', 'Kilometras'];
console.log(vnt[0].length);
console.log(vnt[1].length);

// 3. tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

// a) kuris didesnis
if (vnt[0].length > vnt[1]) {
    console.log('Zodis "Mylia" ilgesnis uz zodi "Kilometras".')
} else {
    console.log('Zodis "Kilometras" yra ilgesnis uz zodi "Mylia".');
}

// b) kuris mažesnis
if (vnt[0].length < vnt[1].length) {
    console.log('Zodis "Mylia" yra trumpesnis uz zodi "Kilometras".');
}

// c) ar jie lygūs
if (vnt[0].length == vnt[1].length) {
    console.log('Zodziu "Mylia" ir "Kilometras" ilgiai yra lygus.');
} else {
    console.log('Zodziu "Mylia" ir "Kilometras" ilgiai nera lygus.');
}

// d) ar jie nelygūs
if (vnt[0].length != vnt[1].length) {
    console.log('Zodziu "Mylia" ir "Kilometras" ilgiai yra nelygus.');
}

// e) kuris didesnis arba lygus
if (vnt[0].length >= vnt[1].length) {
    console.log('Zodis "Mylia" yra ilgesnis arba lygus zodzio "Kilometras"" ilgiui.');
} else {
    console.log('Zodis "Kilometras" yra ilgesnis arba lygus zodzio "Mylia" ilgiui.');
}

// f) kuris mažesnis arba lygūs
if (vnt[0].length <= vnt[1].length) {
    console.log('Zodis "Mylia" yra trumpesnis arba lygus zodzio "Kilometras" ilgiui.');
}
console.log(' IV. Ciklo "for" panaudojimas')
/*
1.Suskaičiuoti ką gausime susumavus skaičius 
intervale parp (imtinai)
*/
// a. 0...0


// b. 0...4
// c. 0...100
// d. 574...815
// e. -50...50
// f. -70...30






/*
2.Panaudojant ciklą perrašyti tekstinio tipo kintamųjų
reikšmes iš kito galo:
pvz.: "abcdef" -> "fedcba"
*/



/*
3.Suskaičiuoti kiek nurodytame internavale yra skaičių,
kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
*/
// a. 0 - 11
// b. 8 - 31
// c. -18 - 18
// d. rezultatą pateikti tokiu formatu:
//   i.Skaičių intervale tarp 0 ir 11, besidalijančiųbe liekanos iš 3 yra  4 vienetai.
//  ii.Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai
// iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liakanos iš 7 yra 2 vienetai.



