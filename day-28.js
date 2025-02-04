// Function within a function http://www.codewars.com/kata/a-function-within-a-function

function always(n) {
  return function () {
    return n;
  };
}

// Singleton pattern https://www.codewars.com/kata/singleton-pattern/train/javascript

const Singleton = (function () {
  let instance;
  function Singleton() {
    if (!instance) instance = this;
    return instance;
  }
  return Singleton;
})();
