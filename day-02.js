// Зробив 1 і 2 стрілочними функціями на github (без return, в 1 рядок та з присвоєнням const через Function Expression)

//https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript

var v1 = 50;
(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);
const equal1 = () => v1 + v1;
const equal2 = () => v6 - v3;
const equal3 = () => v1 * v5;
const equal4 = () => v4 / v5;
const equal5 = () => v6 % v3;

//https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
const Dad = () => d1 + a2 + d2;
const Bee = () => b1 + e2 + e2;
const banana = () => b2 + a2 + n2 + a2 + n2 + a2;
const answer1 = () => "no";
const answer2 = () => "no";
const answer3 = () => "yes";

//https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

function animal(obj) {
  let objHusky = {
    name: "dog",
    legs: 4,
    color: "white",
  };
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

//https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}
