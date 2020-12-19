//#22: Unlock new skills--Arrow function,spread operator and deconstruction http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arrayNumbers, ...numericArrays) => {
  for (let [a, b] of numericArrays) {
    [arrayNumbers[a], arrayNumbers[b]] = [arrayNumbers[b], arrayNumbers[a]];
  }
  return arrayNumbers;
};

//#23: methods of arrayObject---push(), pop(), shift() and unshift() http://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr, d, n) {
  if (d === "left") {
    for (let i = 0; i < n; i++) {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
  } else {
    for (let i = 0; i < n; i++) {
      arr[2].unshift(arr[1].pop());
      arr[1].unshift(arr[0].pop());
      arr[0].unshift(arr[2].pop());
    }
  }
  return arr;
}

//#24: methods of arrayObject---splice() and slice() http://www.codewars.com/kata/572cb264362806af46000793

function threeInOne(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 3) {
    result.push(array[i] + array[i + 1] + array[i + 2]);
  }
  return result;
}
