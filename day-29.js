// How new works https://www.codewars.com/kata/how-new-works

const myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject.call(myObj);

// Replicate new http://www.codewars.com/kata/replicate-new

function nouveau(Constructor, ...arguments) {
  const objectNew = Object.create(Constructor.prototype);
  const result = Constructor.apply(objectNew, arguments);
  return result && (typeof result === "object" || typeof result === "function")
    ? result
    : objectNew;
}

