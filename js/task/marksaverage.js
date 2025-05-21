function marksAverage(list){
  let sum = 0;
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    sum = sum + list[i];
    count = list.length
  }

  // patikriname ar gavome masyva
  // sumuojame visus skaicius ir ju kieki
  //let sum = 0;
  //let count = 0;
  // einame per visa masyva ir imame kiekviena skaiciu
  // jei sutinkame ne skaiciu, tai ji ignoruojame
  // jei sutinkame skaiciu, kuris nera nuo 1 iki 10 (imtinai), tai ignoruojame
  // jei sutinkame skaiciu, padidiname suma
  // Jei sutinkame skaiciu, padidiname kieki
    return sum/count;
}

console.log(marksAverage([]));
console.log(marksAverage([10]));
console.log(marksAverage([2]));
console.log(marksAverage([10, 2, 8, 4, 6]));
console.log(marksAverage([8, 4, 7]));
console.log(marksAverage([2, 'n']));
console.log(marksAverage(['n']));
console.log(marksAverage([8, 'n', 4, 7]));
console.log(marksAverage(['n', 0, 2, 8, 4, 6]));

console.log(marksAverage('Labas'));
console.log(marksAverage(true));

console.log('-------------')

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  let count = 0;
  let result = 0;
  for(i = 0; i < classPoints.length; i++) {
    sum = sum + classPoints[i];
    count = classPoints.length;
    result = sum / count;
  }
  if (yourPoints > result) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
console.log(betterThanAverage([50, 50, 50], 50), false);

