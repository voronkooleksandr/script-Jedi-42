// Understanding closures - the  basics https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) res.push(() => i);
  return res;
}

// Shifty closures https://www.codewars.com/kata/shifty-closures/train/javascript

const greet_abe = greet("Abe");
const greet_ben = greet("Ben");

function greet(name) {
  return function () {
    return "Hello, " + name + "!";
  };
}
