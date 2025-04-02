/*
Funkcija 
*/

function validName(name)
{
    const firstLetter = name[0].toUpperCase();
    const restLetter = name.slice(1).toLowerCase();
    return firstLetter + restLetter;
}

console.log(validName('jonas'));


















