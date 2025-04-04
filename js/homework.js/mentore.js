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

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}
console.log(differenceInAges([62, 25, 30, 64, 29]));





