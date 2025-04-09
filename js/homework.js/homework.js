const mokinys1 = ['Petras', 4, 7, 2, 5, 6];
const mokinys2 = ['Nautika', 7, 4, 8, 5, 6];
const mokinys3 = ['Dirkas', 2, 4, 2, 3, 5];
const mokinys4 = ['Elijus', 5, 3, 7, 5, 3];
const mokinys5 = ['Aliona', 5, 2, 3, 1, 6];
const mokinys6 = ['Ona', 7, 5, 9, 6, 8];

function mokinioVidurkis (mokinys)
{
    
    return'Mokinys vardu "VARDAS" ';
}

// Noriu išsirinkti filmą, kurio įvertinimas būtų ne mažiau 8 balai, bet nenoriu fantastinių filmo.

const filmas1 = ['Kalėjimo bėgliai', 'trileris', 9];
const filmas2 = ['9 jardai', 'komedija', 7]
const filmas3 = ['9-asis rajonas', 'fantastika', 8]
function atranka (Filmas)
    {
        if (Filmas[1] === 'fantastika')
        {
            return 'netinkamas';
        }
        else if (Filmas[2] >= 8)
        {
            return 'patiktu';
        }
        else 
        {
            return 'netinkamas'
        }
        
    }
console.log(atranka(filmas3));

console.log('------------------');

function check(a, x1) 
{
  for (i = 0; i < a.length; i++)
  {
    if (a[i] == x1) 
    {
      return true;
    } 
  }
  return false;
}
let a = [12, 45, 23, 8];
x1 = 45;
console.log(check(a, x1));


function check1(a, x) 
{
  for (i = 0; i < a.length; i++)
  {
    if (a[i] === x) 
    {
      return true;
    } 
  }
  return false;
}
let a2 = [12, 45, 23, 8];
x1 = 45;
console.log(check1(a2, x1));

function positiveSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++)
      if (arr[i] > 0)
      {
        sum = sum + arr[i];
      }
    return sum;
  }
console.log(positiveSum([1, -4, 7, 12]));

console.log('--------------------');

function arrayMadness(a,b)
{   
    let sum1 = 0;
    for (i = 0; i < b.length; i++) 
    {
        sum1 = sum1 + a[i]**2;
    }
    let sum2 = 0;
    for (i = 0; i < b.length; i++) 
    {
        sum2 = sum2 + b[i]**3;
    }
    if (sum1 > sum2)
        {
            return true;
        }
       
    return false;
}
console.log(arrayMadness([4, 5, 6],[1, 2, 3]));

console.log('--------------------')


// ???????
function past(h, m, s)
{
    for (i = 0; i <= h.length; i++)
        {
            for (i = 0; i <= m.length; i++)
                {
                    for (i = 0; i <= s.length; i++)
                        console.log((h * 3600 + m * 60 + s) * 1000);                        
                }
        } 
}

console.log(past(0, 51, 23))

// paprasciau

function past1(h, m, s)
{
    result = ((h * 3600 + m * 60) + s) * 1000;
    return result
}
console.log(past1(2, 47, 23))

console.log('-----------');

function hero(bullets, dragons)
{
    if(bullets >= dragons * 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(hero(5, 2));
    
console.log('-------------');

function strCount(str, letter)
{     
  let result = 0;
  for ( let i = 0; i < str.length; i++)
  {
    if (str[i] == letter)
    {
      result = result + 1;
    }
  }
  return result;
} 
console.log(strCount('Hello', 'l'));

console.log('------------');

var summation = function (num) 
{
  let result = 0;
  for ( let i = 1; i <= num; i++)
  {
    result = result + i;
  }
  return result;
}
console.log(summation(8));
console.log(summation(5));
console.log(summation(11));

console.log('-------------');

function century(year) 
{
    let result = 0;
  for (let i = 0; i <= year; i += 100)
    {
        result = result + 1;
    }
  return result;
}console.log(century(2099));

console.log('---------------');

// Šalia teksto žodžių prideda jo raidžių kiekį ir visą tekstą grąžina kaip masyvą. 

/*
function zodziuIlgis(eilute)
{
  let naujaEilute = eilute.split(' ');
  for (let i = 0; i < naujaEilute.length; i++)
    {
      naujaEilute[i] = naujaEilute[i] + ' ' + naujaEilute[i].length;
    }
  return naujaEilute;
}
let eilute = 'turetu buti gerai'
console.log(zodziuIlgis(eilute));
*/
/* Nesigauna
function magNumber(info)
{
  const PT92 = 17;
  const M4A1 = 30;
  const M16A2 = 30;
  const PSG1 = 5;
  //let result = 0;
  if (PT92,info)
    {
      //result = (info * 3) / 17;
      console.log (Math.ceil(info * 3 / 17));
    }
  if (M4A1, info)
    {
      //result = info * 3 / 30;
      console.log(Math.ceil(info * 3 / 30));
    }
  if (M16A2, info)
    {
      //result = info * 3 / 30;
      console.log(Math.ceil(info * 3 / 30));
    }  
  if (PSG1, info)
    {
      //result = info * 3 / 5;
      result >= Math.ceil(info * 3 / 5);
    }
} 
console.log(magNumber(28))

//console.log(Math.ceil(28.9))
*/
// raidės vieta abėcėlėje

/*
function pozicija(raide)
{
  const alph = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
  let result = 0;
  result = alph.indexOf(raide) + 1;
  return result;
}

console.log(pozicija(z));
*/


function litres(time)
{
  return (Math.floor(time * 0.5));
}
console.log(litres(11.8))

// kitas

function problem(x)
{
  let result = 0;
  result = (50 * x + 6);
  if (result % 1 === 0)
  {
    return result;
  }
  if (result % 1 !== 0)
  {
    return "Error";
  }
}
console.log(problem(0))

// kitas

function checkAlive (health)
{
  if(health > 0 && health <= 10)
    {
      return true
    }
  else(health <= 0 && health >= -10)
    {
      return false
    }
  
}
console.log(checkAlive(0));

// kitas
/*
function capitalizeWord(word) {
  'word'.trim();
  'word[0]'.toUpperCase();
  return word;
}
*/

let current = '';
function updateLight(current) {

  if (current  === 'green')
    {
      return 'yellow';
    }
   
  if (current === 'yellow')
    {
      return "red";
    }

  if (current === 'red')
    {
      return 'green';
    }
}


console.log(updateLight('red'));




//let x = 0;
//let y = 0;
function quadrant(x, y) 
{
  if (x > 0 && y > 0)
  {
    return `${x}`, `${y}`, 1;
  }
  if (x < 0 && y > 0)
  {
    return `${x}`, `${y}`, 2;
  }
  if (x < 0 && y < 0)
  {
    return `${x}`, `${y}`, 3;
  }
  if (x > 0 && y < 0)
  {
    return `${x}`, `${y}`, 4;
  }
}

console.log(quadrant(-2, 6));










