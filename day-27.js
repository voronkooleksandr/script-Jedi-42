// Understanding closures - the  basics https://www.codewars.com/kata/56b71b1dbd06e6d88100092a



// Shifty closures https://www.codewars.com/kata/shifty-closures/train/javascript

var name = "Abe";
const greet_abe = function () {
  const name = "Abe";
  return "Hello, " + name + "!";
};
var name = "Ben";
const greet_ben = function () {
  const name = "Ben";
  return "Hello, " + name + "!";
};
