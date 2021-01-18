// https://www.codewars.com/collections/interview-questions-8

// 1. https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

function reverseNumber(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

