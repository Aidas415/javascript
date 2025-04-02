//Atvirksciai uzrasytas vardas "AIDAS"
const text0 = "AIDAS";
const FirstSymbol = text0[0];
console.log(text0[0]);
console.log(text0[1]);
console.log(text0[2]);
console.log(text0[3]);
console.log(text0[4]);

console.log(text0[4] + text0[3] + text0[2] 
    + text0[1] + text0[0]);


console.log('-----NAMU DARBAI-----');

console.log('-------------');
console.log('       I. Kintamuju inicijavimas');
console.log('-------------');
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

console.log('------------');
console.log(' II. Veiksmai su kintamaisiais');
console.log('------------');
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
// kitas budas
sum1 = zaislai1[1] - zaislai1[2] + zaislai1[3] - zaislai1[4] + zaislai1[5];
console.log(sum1); 

let aritmetika2 = 0;
aritmetika2 += zaislai2[1];
aritmetika2 -= zaislai2[2];
aritmetika2 += zaislai2[3];
aritmetika2 -= zaislai2[4];
aritmetika2 += zaislai2[5];
console.log(aritmetika2);
// kitas budas
sum2 = zaislai2[1] - zaislai2[2] + zaislai2[3] - zaislai2[4] + zaislai2[5];
console.log(sum2);

let aritmetika3 = 0;
aritmetika3 += zaislai3[1];
aritmetika3 -= zaislai3[2];
aritmetika3 += zaislai3[3];
aritmetika3 -= zaislai3[4];
aritmetika3 += zaislai3[5];
console.log(aritmetika3)
// kitas budas
sum3 = zaislai3[1] - zaislai3[2] + zaislai3[3] - zaislai3[4] + zaislai3[5];
console.log(sum3);

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

console.log('--------------');
console.log('       III. Kintamuju palyginimas');
console.log('---------------');
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
//'a' priskirti kaip tenkinancia salyga,
//'b' priskirti kaip netenkinancia salygos,
a = 'Pomidoras';
b = 'Bandykite kita karta';
if (kint1 > kint2) {
    console.log('a)', a);
} else {
    console.log('a)', b);
}
if (kint1 < kint2) {
    console.log('b)', a);
}
if (kint1 == kint2) {
    console.log('c)', b);
} else {
    console.log('c)', b);
}
if (kint1 != kint2) {
    console.log('d)', a);
}
if (kint1 >= kint2) {
    console.log('e)', a);
} else {
    console.log('e)', b);
}
if (kint1 <= kint2) {
    console.log('f)', a);
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

console.log('----------------');
console.log('       IV. Ciklo "for" panaudojimas');
console.log('----------------');
/*
1.Suskaičiuoti ką gausime susumavus skaičius 
intervale tarp (imtinai)
*/
//
// a) (0....0),
let sum3a = 0;
for(let i = 0; i <= 0; i++) {
   sum3a += i;
}
console.log('1a) ' + sum3a);

// b. 0...4
let sum3b = 0;
for(let i = 0; i <= 4; i++) {
    sum3b += i;  
}
console.log('1b) ' + sum3b);

// c. 0...100
let sum3c = 0;
for(let i = 0; i <= 100; i++) {
    sum3c += i;
}
console.log('1c) ' + sum3c);

// d. 574...815
let sum3d = 0;
for(let i = 574; i <= 815; i++) {
    sum3d += i;
}
console.log('1d) ' + sum3d);

// e. -50...50
let sum3e = 0;
for(let i = -50; i <= 50; i++) {
    sum3e += i;
}
console.log('1e) ' + sum3e);

// f. -70...30
let sum3f = 0;
for(let i = -70; i <= 30; i++) {
    sum3f += i;
}
console.log('1f) ' + sum3f);

console.log('--------------');
/*
2.Panaudojant ciklą perrašyti tekstinio tipo kintamųjų
reikšmes iš kito galo:
pvz.: "abcdef" -> "fedcba"
*/
// iskaba = "abcdef"
function stringReverse(text)
{   
        let result = '';
    for (let i = text.length - 1; i >= 0; i--)
    {
        result += text[i];
    }
    return result;
}

console.log('"abcdef" = "' + stringReverse('abcdef') + '"');

console.log('------------')
/*
3.Suskaičiuoti kiek nurodytame internavale yra skaičių,
kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
*/
// a) 0 - 11
function intervalCount(start, end, divider)
{
    let count = 0;
    for (let i = start; i <= end; i++)
    {
        if (i % divider === 0) 
            count++;        
    }
    
    return `Skaiciu intervale tarp ${start} ir ${end} besidalijanciu be liekanos is "${divider}" yra ${count} vienetai.`
} 
console.log('a)   I. ', intervalCount(0, 11, 3));
console.log('a)  II.', intervalCount(0, 11, 5));
console.log('a) III.', intervalCount(0, 11, 7));

// b. 8 - 31
function intervalCount(start, end, divider)
{
    let count = 0;
    for (let i = start; i <= end; i++)
    {
        if (i % divider === 0)
            count++;
    }
    return `Skaiciu intervale tarp ${start} ir ${end} besidalijanciu be liekanos is "${divider}" yra ${count} vienetai.`
}
console.log('b)   I. ', intervalCount(8, 31, 3));
console.log('b)  II. ', intervalCount(8, 31, 5));
console.log('b) III. ', intervalCount(8, 31, 7));

// c. -18 - 18
function intervalCount(start, end, divider)
{
    let count = 0;
    for (let i = start; i <= end; i++)
    {
        if (i % divider === 0)
            count++;
    }
    return `Skaiciu intervale tarp ${start} ir ${end} besidalijanciu be liekanos is "${divider}" yra ${count} vienetai.`
}
console.log('c)   I. ', intervalCount(-18, 18, 3));
console.log('c)  II. ', intervalCount(-18, 18, 5));
console.log('c) III. ', intervalCount(-18, 18, 7));

// d. rezultatą pateikti tokiu formatu:
//   I.Skaičių intervale tarp 0 ir 11, besidalijančiųbe liekanos iš 3 yra  4 vienetai.
//  II.Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai
// III. Skaičių intervale tarp 0 ir 11, besidalijančių be liakanos iš 7 yra 2 vienetai.

console.log('-------------');
console.log('       V. Funkcijos');
console.log('-------------');
/*
1.Funkcija pavadinimu "tusciaFunkcija":
  a) nepriima jokių kintamųjų
  b) netlieka jokios vidinės logikos
  c) gražina Boolean tipo reikšmę "false"
  d) TESTAS:
    i. consoe.log(tuscuaFunkcija());
   ii. rezultatas: false
*/
const w1 = 6;
const q1 = 9;
const x1 = 2;

function tuscia (){
    return false
}

console.log(tuscia(w1, x1));
console.log(tuscia(x1, q1));
console.log(tuscia(x1, w1));

console.log('--------------');
/*
 2.Funkcija pavadinimu "Daugyba":
   a) priima du skaičiaus tipo kintamuosius 
   b) atskirame kintamajame įsimena sandaugos reikšmę
   c) gražina sandaugos rezultatą
   d) TESTAI:
        I. console.log(daugyba(skaicius1, skaicius2));
       II. console.log(daugyba(skaicius3, skaicius2)); 
      III. console.log(daugyba(skaicius1,skaicius3));  
       IV. rezultatas: teisingos reikšmės;   
*/
// a)
const skaicius1 = 8;  
const skaicius2 = 40;
const skaicius3 = 7;
function daugyba (kint1, kint2)
{
    let result = 0;
    result = kint1 * kint2;
    return result; 
}
console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));
/*
 3.Funkcija pavadinimu "skaitmenuKiekisSkaiciuje":
   a) priima vieną kintamąjį 
   b) jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą "Pateikta netinkamo tipo reikšmė."
   c) priešingu atveju funkcija tęsia darbą 
   d) į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį 
   f) TESTAI: 
        I. console.log(skaitmenuKiekisSkaiciuje(5)); 
            1. rezultatas: 1
       II. console.log(skaitmenuKiekisSkaiciuje(781)); 
            1. rezultatas: 3
      III. console.log(skaitmenuKiekisSkaiciuje(37060123456));  
            1. rezultatas: 11
       IV. console.log(skaitmenuKiekisSkaiciuje(true));  
            1. rezultatas:"Pateikta netinkamo tipo reikšmė."
        V. console.log(skaitmenuKiekisSkaiciuje(asd));
            1. rezultatas:"Pateikta netinkamo tipo reikšmė."
       VI. console.log(skaitmenuKiekisSkaiciuje(NaN));  
            1. rezultatas:"Pateikta netinkamo tipo reikšmė."
*/

console.log('--------------')

function skaitmenuKiekisSkaiciuje(n)
{
    if (typeof n !== 'number')
    {
        return `Pateikta netinkamo tipo reikšmė.`;
    }
    if (!isFinite(n))
    {
        return `pateikta netinkamo tipo reikšmė.`;
    }
    const numberAsString = '' + n; 
    let count = numberAsString.length;
    
    if  (n % 1 != 0) 
    {
        count--;
    }
    if (n < 0) {
        count--;
    }
    return count;
}   

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));







/*
  4.Funkcija pavadinimu "didziausiasSkaiciusSarase":  
    a) priima vieną kintamąjį
    b) jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą "Pateikta netinkamo tipo reikšmė."
    c) jei sąrašas yra tuščias, tai išveda pranešimą "Pateiktas sąrašas negali būti tuščias."
    d)priešingu atveju funkcija tęsia darbą
    e) pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
    f) gražina didžiausią surastą skaičių
    g) TESTAI:
        I. console.log(didziausiasSkaiciusSarase([1]));
            1. rezultatas: 1
       II. console.log(didziausiasSkaiciusSarase([1, 2, 3]));
            1. rezultatas: 3
      III. console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));  
            1. rezultatas: 78
       IV. console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66])); 
            1. rezultatas: 69
        V. console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
            1. rezultatas: -1
       VI. console.log(didziausiasSkaiciusSarase("pomidoras")); 
            1. rezultatas: "Patekta netinamo tipo reikšmė."
      VII. console.log(didziausiasSkaiciusSarase([]));  
            1. rezultatas: "Pateiktas sąrašas negali būti tuščias."
*/   

console.log('--------------')

function didziausiasSkaiciusSarase(row) 
{
//    if (typeof row !== Array)
//    {
//        return '"Pateikta netinkamo tipo reikšmė."';
//    }
    if (Array.isArray(row) == false)
    {
        return '"Pateikta netinkamo tipo reikšmė."';
    }
    if (row.length == 0)
    {
        return '"Pateiktas sąrašas negali būti tuščias."';
    }
    let biggest = -Infinity;
    for (i = 0; i < row.length; i++)
    {
        if (typeof row[i] !== 'number' || !isFinite(row[i]))
        {
            continue;
        }
        
        if (row[i] > biggest)
        {
            biggest = row[i];
        }        
    }
    return biggest;
}   

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18])); 
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(didziausiasSkaiciusSarase([]));



//if (typeof row[i] !== 'number' || !isFinite(row[i]))
//    {
//        continue;
//    }









