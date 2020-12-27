// Power of bind http://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    return func.apply(this === global ? ctx : this);
  };
};

// Sort with Arrow Functions https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = function (people) {
  return people.sort((person1, person2) => person1.age - person2.age);
};
