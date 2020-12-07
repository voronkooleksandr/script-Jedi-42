// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr, n) {
  const array = [];
  for (i = 0; i < arr.length; i++)
    if (arr[i].toFixed(2) < n) {
      array.push(arr[i]);
    }
  return array.length;
}

//
