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
