/* 
Funkcija gauna sakini, kuris atrodo taip:
"Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA."
funkcijos darbas yra grazinti teisingai perrasyta sakini.
T.y. reikia istaisyti vardu rasyma.
pvz.: "Siuo metu klaseje yra: Jonas, Maryte, Petras, Ona."
*/

/*
- is teksto atsiskiriame vardus
- konvertuojame teksta i mazasias raides
- issiskaidyti individualius vardus i masyva
- ciklas eina per individualius vardus ir:
    -pasiima pirma vardo raide
    -ja padidina
    -apjungia i galutini normalu varda
-pagaminame galutini reikiama sakini
*/

console.log('************')

function correctSentence(text)
{
    const parts = text.split(': ');
    console.log(parts);
    const names = parts[1]
    .slice(0, -1)
    .toLowerCase()
    .split(', ');
    for (let i = 0; i < names.length; i++)
    {
        const name = names[i];
        const firstLetter = name[0].toUpperCase();
        const restName = name.slice(1);
        const newName = firstLetter + restName
        console.log(name,'--', firstLetter + restName);
        names[i] = newName;
    }
    console.log(names)
    return parts[0]+ ': ' + names.join(', ') + '.';
}

console.log(correctSentence('Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA.'))

console.log('************')





















