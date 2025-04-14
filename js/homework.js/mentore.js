// neigaimą skaičių paversti teigiamu ir atvirkščiai:

function opposite(number) 
{
    let result = 0;
    result = number * (-1);
    return result;
}  
console.log(opposite(35));

// greitesnis būdas:

function opposite(number) 
{
    return (-number);
}  
console.log(opposite(-20));

// tikimybių ištraukti mėlyną teorija:

function tikiMelyna(inMelyn, inRaud, outMelyn, outRaud)
{
    let result = 0;
    let tikimybe = 0;
    result = inMelyn - outMelyn + inRaud - outRaud;
    tikimybe = (inMelyn - outMelyn) / result;
    return tikimybe;
}
console.log(tikiMelyna(10, 10, 3, 7));

// greitesnis būdas:

function tikiMelyna(inMelyn, inRaud, outMelyn, outRaud)
{
    return (inMelyn - outMelyn) / (inMelyn - outMelyn + inRaud - outRaud);
}
console.log(tikiMelyna(15, 10, 18, 12));

// 

function getDrinkByProfession(param)
{
  if (param.toLowerCase() === "Jabroni".toLowerCase())
  {
    return '"Patron tequila"';
  }
  if (param.toLowerCase() === "School Counselor".toLowerCase())
  {
    return '"Anything with Alcohol"';
  }
  if (param.toLowerCase() === "Programmer".toLowerCase())
  {
    return '"Hipster Craft Beer"';
  }
  if (param.toLowerCase() === "Bike Gang Member".toLowerCase())
  {
    return '"Moonshine"';
  }
  if (param.toLowerCase() === "Politician".toLowerCase())
  {
    return '"Your tax dollars"';
  }
  if (param.toLowerCase() === "Rapper".toLowerCase())
  {
    return '"Cristal"';
  }
  else
  {
    return '"Beer"';
  }
}
console.log(getDrinkByProfession("programmer"));
console.log(getDrinkByProfession("poLItiCian"));

// Šeimos narių amžiaus: (jauniausias, vyriausias, skirtumas tarp jų). 

function visuAmzius(am)
{
    let vyr = 0;
    let jaun = Infinity;
    for (let i = 0; i < am.length; i++)
        {
            if (am[i] > vyr)
                {
                    vyr = am[i];
                }
            if (am[i] < jaun)
                {
                    jaun = am[i];
                }
        }
    return [jaun, vyr, vyr - jaun];
}
console.log(visuAmzius([13, 15, 6, 39, 51]));

// Greitesnis būdas

function differenceInAges (ages) 
{
    let max = Math.max(...ages),
    min = Math.min(...ages)
    diff = max - min
        
    return [min, max, diff]
}
console.log(differenceInAges([62, 25, 30, 64, 29]));

console.log('----------');

// Avių sąrašas ?????????????????????

function countSheeps(sheep) 
{
  let result = 0;
  for(let i = 0; i < sheep.length; i++)
  {
    if (sheep[i] === false) 
      {
        result = result + 0;
      }
    if (sheep[i] === null) 
      {
        result = result + 0;
      }
    if (sheep[i] === undefined) 
      {
        result = result + 0;
      }
    if (sheep[i] === true) 
      {
        result = result + 1;
      }
  }
  return result;
}
console.log(countSheeps([false, null, true,  undefined]));

console.log('----------');

// Autobuso keleiviai

function enough(cap, on, wait) 
{
  if (cap - on - wait >=0)
  { 
    return 0;
  }
  else (cap - on - wait < 0)
  {
    let result = 0;
    result = (cap - on - wait) * (-1);
    return result;
  }
}
console.log(enough(45, 28, 21));
console.log(enough(45, 26, 16));

// Tekstas iš kito galo

function reverseWords(str)
{ 



  return str; // reverse those words
}

console.log('------')

// Teksto žodžiai nuo galo

function isGalo(SAK) 
{
  let N = '';
  SAK = SAK.replaceAll('"', '');
  let KITSAK = SAK.split(' ');
  for (let i = KITSAK.length - 1; i >= 0; i--)
    {
      N += KITSAK[i] + ' ';
    }
  N = '"' + N.trimEnd() + '"';  
  return N
}
let SAK = '"Hello Wordl!"'
console.log(isGalo(SAK));

//let SAK = 'niekaip nerandu klaidu'
//console.log(SAK.split(' '));
//console.log(SAK.split(' ').length)
//console.log(isGalo(niekaip nerandu klaidu));

// Blokų tūriai
/*
function turiuSkirtumas(a, b)
{
  let T1 = [A1, A2, A3]; 
  let T2 = [B1, B2, B3];
  result = a - b;
  if (result < 0)
    {
      result = -1 * result;
    }
  return result;
}
  */
const A1 = 2;
const A2 = 4;
const A3 = 3.5;
const B1 = 3;
const B2 = 4;
const B3 = 4.5;
//console.log(turiuSkirtumas(2*4*3.5, 3*4*4.5));

a = A1 * A2 * A3;
b = B1 * B2 * B3;

function findDifference(a, b) 
{
  result = Math.abs (a - b);
  return result;
}
console.log(findDifference(a, b));


Math.round(...A1.toExponential.apply.apply.apply.apply.apply.apply.apply.applyz)



