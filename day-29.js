// How new works https://www.codewars.com/kata/how-new-works

const myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject.call(myObj);

// Replicate new http://www.codewars.com/kata/replicate-new
