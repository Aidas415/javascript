const abc = 3 + 5 * 2 - 6;
console.log(abc); 

console.log('-----HOMEWORK----');

/* 1. Skaičių spausdinimas nuo 1 iki 10 */
console.log("   1. Skaičių spausdinimas nuo 1 iki 10");

for (let i = 0; i < 10; i++) {
    console.log(`${i+1}`);
};
console.log('---------');

/* 2. Suskaičiuokite skaičių sumą nuo 1 iki 100 */
console.log("   2. Skaičių suma nuo 1 iki 100");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

function intervalSum(start, end) 
{
    let sum1 = 0;
    for (let i = start; i <= end; i++) 
    {
        sum1 += i;
    } 
    console.log(sum1)
};
// console.log(intervalSum(1,100));
console.log('---------');

/* 3. Savaitės dienų sąrašas */
console.log("   3. Savaitės dienų sąrašas");
const dienos = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];

for (let i = 0; i < dienos.length; i++) {
    console.log(`${i+1}. ${dienos[i]}`);
};
console.log('---------');

/* 4. Recepto ingredientų sąrašas */
console.log("   4. Recepto ingredientų sąrašas");
const ingredientai = ["cukrus", "miltai", "kiaušiniai", "pienas", "sviestas"];
for (let i = 0; i < ingredientai.length; i++) {
    console.log(`${i+1}. ${ingredientai[i].at(0).toUpperCase()+ingredientai[i].slice(1)}`);
};

console.log('---------');

/* 5. Valandų skaičiavimas */
console.log("   5. Valandų skaičiavimas, atspausdinti: 'Valanda: 1' ");
for (let i = 0; i < 24; i++) {
    console.log(`'Valanda: ${i}'`);
};

console.log('---------');

/* 6. Temperatūros patikra */
console.log("   6. Temperatūros patikra ar viršija 25 laipsnius");
const temperaturos = [22, 25, 28, 31, 21, 27, 19];
const savaitesDienos = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis']
for (let i = 0; i < savaitesDienos.length; i++) {
    console.log(`${i+1}.${savaitesDienos[i].replace('is', 'i')} - ${temperaturos[i]}°C`)
    if (temperaturos[i] > 25) {
        console.log(`${savaitesDienos[i].replace('is', 'i')} viršija 25°C karštį.`);
    } else {
        console.log(`Diena nėra labai karšta.`);
    }
};

console.log('---------');

/* 7. Studentų pažymių vidurkis */
console.log("   7. Studentų pažymių vidurkis");
let markSum0 = 0;
let markSum1 = 0;
let markSum2 = 0;
let markSum3 = 0;
let markCount0 = 0;
let markCount1 = 0;
let markCount2 = 0;
let markCount3 = 0;
const pazymiai0 = [8, 9, 7, 10, 6];
const pazymiai1 = [7, 5, 9, 6, 10];
const pazymiai2 = [9, 5, 10, 4, 10];
const pazymiai3 = [10, 9, 8, 9, 7];
for (let i = 0; i < pazymiai0.length; i++) {
    markSum0 = markSum0 + pazymiai0[i];
    markCount0 = pazymiai0.length;
    average0 = markSum0 / markCount0;
    
    markSum1 = markSum1 + pazymiai1[i];
    markCount1 = pazymiai1.length;
    average1 = markSum1 / markCount1;
    
    markSum2 = markSum2 + pazymiai2[i];
    markCount2 = pazymiai2.length;
    average2 = markSum2 / markCount2;
    
    markSum3 = markSum3 + pazymiai3[i];
    markCount3 = pazymiai3.length;
    average3 = markSum3 / markCount3;
}
console.log(`Studentų pažymių vidurkiai: ${average0}; ${average1}; ${average2} ir ${average3}.`);

console.log('---------');

/* 8. Prekių krepšelio suma */
console.log("   8. Prekių krepšelio suma");
const kainos = [5.99, 12.49, 3.50, 8.99];
let kainosSum = 0;
for (let i = 0; i < kainos.length; i++) {
    kainosSum = kainosSum + kainos[i];
}
console.log(`Prekių krepšelio suma - ${kainosSum}€`)

console.log('---------');

/* 9. Žingsnių skaičius per savaitę */
console.log("   9. Žingsnių skaičius per savaitę");
const dienosPavadinimai = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];
const zingsniai = [5000, 7000, 6500, 8000, 7200, 9000, 4000];
let zingsniaiSum = 0;
for (let i = 0; i < dienosPavadinimai.length; i++) {
    zingsniaiSum = zingsniaiSum + zingsniai[i];
    zingsniuVidurkis = zingsniaiSum / zingsniai.length;
    console.log(`${dienosPavadinimai[i].replace('is', 'į')} nueita ${zingsniai[i]} žingsnių,`);
};
console.log(`Daugiausiai nueita per dieną ${zingsniai.sort((a, b) => b - a)[0]} žingsnių. O vidutiniškai per dieną nueita ${Math.round(zingsniuVidurkis)} žingsnių`);

console.log('---------');

/* 10. Žvaigždutės piramidė */
console.log("   10. Žvaigždutės piramidė, kiekvienoje paskesnėje eilutėje viena žvaigždute daugiau");
let piramid = '';
const zvaigzdutes = ['*', '*', '*', '*', '*', '*', '*'];
for (let i = 0; i < 7; i++) {
    piramid =  piramid + ' ' +
     zvaigzdutes[i];
    console.log( `${piramid}`);
}








