function stringReverse(text)
{
    let result = '';

    for (let i = text.length -1; i >= 0; i--) 
    {
        result += text[i];
    }
    return result;
}



console.log(stringReverse('abc'));
console.log(stringReverse('sula'));
console.log(stringReverse('sedek'));
console.log(stringReverse('uzu'));
console.log(stringReverse('sachmatai'));
console.log(stringReverse('saskes'));
console.log(stringReverse('labas vakaras'));






