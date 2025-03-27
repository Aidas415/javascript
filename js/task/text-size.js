/*
Reikalinga funkcija, kuri gauna teksta ir grazina rezultata priklausomai 
nuo teksto ilgio.
- jei tuscias: "tuscias tekstas."
- jei maziau 10 simboliu: "Trumpas tekstas is N simboliu."
- Jei maziau 20 simboliu: "tekstas is N simboliu."
- Jei ilgasnis: "Ilgas tekstas is N simboliu."
*/

function textSize(text) 
{
   if (text.length === 0) {
    return 'Tuscias tekstas.';
   }
   if (text.length < 10) {
    return `Trumas tekstas is ${text.length} simboliu.`;
   }
   if (text.length < 20) {
    return `Tekstas is ${text.length} simboliu.`;
   }
   if (text.length >= 20) {
    return `Ilgas tekstas is ${text.length} simboliu.`;
   }
}

console.log(textSize(''));;
console.log(textSize('Labas'));
console.log(textSize('Labanakt!'));
console.log(textSize('Virs desimt'));
console.log(textSize('Labas rytas, Lietuva! Ka Tu?'));

function textSize2(text) 
{
   if (text.length === 0) {
    return 'Tuscias tekstas.';
   } else if(text.length < 10) {
    return `Trumas tekstas is ${text.length} simboliu.`;
   } else if (text.length < 20) {
    return `Tekstas is ${text.length} simboliu.`;
   } else if (text.length >= 20) {
    return `Ilgas tekstas is ${text.length} simboliu.`;
   }
}
console.log(textSize2(''));;
console.log(textSize2('Labas'));
console.log(textSize2('Labanakt!'));
console.log(textSize2('Virs desimt'));
console.log(textSize2('Labas rytas, Lietuva! Ka Tu?'));



function textSize3(text) 
{
   if (text.length === 0) {
    return 'Tuscias tekstas.';
   } else if(text.length < 10) {
    return `Trumas tekstas is ${text.length} simboliu.`;
   } else if (text.length < 20) {
    return `Tekstas is ${text.length} simboliu.`;
   } 
    return `Ilgas tekstas is ${text.length} simboliu.`;
}

console.log(textSize3(''));;
console.log(textSize3('Labas'));
console.log(textSize3('Labanakt!'));
console.log(textSize3('Virs desimt'));
console.log(textSize3('Labas rytas, Lietuva! Ka Tu?'));

function textSize4(text) 
























