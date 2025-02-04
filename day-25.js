// Call function using apply http://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function (arg1, ...arg2) {
  return this.apply(arg1, arg2);
};

// Anonymous returns http://www.codewars.com/kata/anonymous-returns

name = "The Window";

const alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    return function () {
      return this.name;
    }.bind(this);
  },
};
