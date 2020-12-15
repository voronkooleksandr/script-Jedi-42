// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

function threeInOne(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 3) {
    result.push(array[i] + array[i + 1] + array[i + 2]);
  }
  return result;
}

//
