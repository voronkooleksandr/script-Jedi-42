// Duplicate arguments http://www.codewars.com/kata/duplicate-arguments

function solution(...arg) {
  const arrayOfObject = [...arg].length;
  const setOfObject = [...new Set(arg)].length;
  return setOfObject != arrayOfObject;
}

// Last Argument http://www.codewars.com/kata/last

function last(list) {
  const lastElement = arguments[arguments.length - 1];
  return lastElement[lastElement.length - 1] || arguments[arguments.length - 1];
}
