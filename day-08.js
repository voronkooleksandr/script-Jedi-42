// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr, n) {
  const array = [];
  for (i = 0; i < arr.length; i++)
    if (arr[i].toFixed(2) < n) {
      array.push(arr[i]);
    }
  return array.length;
}

// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  {
    if (n > Number.MAX_VALUE) return "Input number is Number.POSITIVE_INFINITY";
    if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
    if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
    if (n < -Number.MAX_VALUE)
      return "Input number is Number.NEGATIVE_INFINITY";
    if (isNaN(n)) return "Input number is Number.NaN";
  }
  if (n === Number(n)) {
    return "Input number is " + n;
  }
  return "Input number is Number(n)";
}
