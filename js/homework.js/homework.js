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

function check(a, x) 
{
  for (i = 0; i < a.length; i++)
  {
    if (a[i] == x) 
    {
      return true;
    } 
  }
  return false;
}
let a = [12, 45, 23, 8];
x = 45;
console.log(check(a, x));


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
x = 45;
console.log(check1(a2, x));

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


