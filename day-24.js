// Duplicate arguments http://www.codewars.com/kata/duplicate-arguments

function solution(...arg) {
  const arrayOfObject = [...arg].length;
  const setOfObject = [...new Set(arg)].length;
  return setOfObject != arrayOfObject;
}

// Last Argument http://www.codewars.com/kata/last
