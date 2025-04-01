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























//function manoFilmas ()
/*
let atvirukoTekstas = 'labai geras daiktas yra televizorius aš su juo galiu matyti jus';
let atvirukoraide = 'a';
let atvirukoSuma = 0;
for (let i = 0; i < atvirukoTekstas.length; i++) 
{
    if (atvirukoTekstas[i] === atvirukoraide) 
    {
        atvirukoSuma += 1;
    }
}


function AtvirukoLipdukai(Raide)
{
    for (let i = 0; i < atvirukoTekstas.length; i++)
    {
        if (atvirukoTekstas[i] === Raide)
        {
            atvirukoSuma += 1;
        }
    }
    return atvirukoSuma;
}

console.log(AtvirukoLipdukai('a'));
console.log(AtvirukoLipdukai('b'));



const AtvirukoBalses = ['a', 'e', 'o', 'u', 'i'];

for (let i = 0; i < AtvirukoBalses.length; i++)
{
    console.log("raidė " + AtvirukoBalses.length + "pasikartoja " + AtvirukoLipdukai(AtvirukoBalses[i]));
}


console.log(atvirukoSuma);
*/




















