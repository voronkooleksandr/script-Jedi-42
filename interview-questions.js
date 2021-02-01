// https://www.codewars.com/collections/interview-questions-8

// 1. https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript
// Reverse a Number

function reverseNumber(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

// 2. https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// Two Sum

function twoSum(numbers, target) {
  for (let i = 0; i <= numbers.length; i++) {
    for (let k = 1; k <= numbers.length; k++) {
      if ((target - numbers[k]) === numbers[i]) {
        return [k,i]
      }
    }
  }
}

// 3. https://www.codewars.com/kata/52756e5ad454534f220001ef/train/javascript
// Longest Common Subsequence

function LCS(x, y) {
  let string = "";
  let n = 0;
  for (let i = 0; i < y.length; i++) {
    for (let k = n; k < x.length; k++)
      if (y[i] === x[k]) {
        string += y[i];
        n = ++k;
        break;
      }
  }
  return string;
}
