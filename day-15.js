//#22: Unlock new skills--Arrow function,spread operator and deconstruction http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arrayNumbers, ...numericArrays) => {
  for (let [a, b] of numericArrays) {
    [arrayNumbers[a], arrayNumbers[b]] = [arrayNumbers[b], arrayNumbers[a]];
  }
  return arrayNumbers;
};

//#23: methods of arrayObject---push(), pop(), shift() and unshift() http://www.codewars.com/kata/572af273a3af3836660014a1



//#24: methods of arrayObject---splice() and slice() http://www.codewars.com/kata/572cb264362806af46000793

function threeInOne(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 3) {
    result.push(array[i] + array[i + 1] + array[i + 2]);
  }
  return result;
}
