// 3 --> 3.00
// 3.99 --> 3.99 

function moneyFormat(money)
{
    return money.toFixed(2) + ' Eur';
}
console.log(moneyFormat(3));
console.log(moneyFormat(3.1));
console.log(moneyFormat(3.5));
console.log(moneyFormat(3.99));

// Be "toFixed"

function moneyFormat1(money)
{
    //Jeigu po kablelio yra 2 skaitmenys - nieko daryti nereikia
    const strMoney = '' + money;
    const doPosition = strMoney.indexOf('.');
     

    //Jeigu po kablelio yra 1 skaitmuo - pridedame 1 nulį
    if(doPosition === -1) 
        {
            return money + ' .00 Eur';
        }
        const afterDot = strMoney.slice(doPosition +1);
        if (afterDot.length === 1)
        {
            return money + ' 0';
        }



    ///jeigu po kablelio yra 0 skaitmenų, pridedame 2 nulius
    return money + ' Eur';
}
console.log(moneyFormat1(3));
console.log(moneyFormat1(3.1));
console.log(moneyFormat1(3.5));
console.log(moneyFormat1(3.99));












