// Unpacking arguments http://www.codewars.com/kata/unpacking-arguments

const spread = (lambda, args) => lambda(...args);

// For the sake of argument http://www.codewars.com/kata/for-the-sake-of-argument

function numbers(...param) {
  const paramArray = Array.from(param);
  const result = paramArray.every((i) => {
    if (Number(i) === i || isNaN(i)) {
      return true;
    }
  });
  return result;
}
