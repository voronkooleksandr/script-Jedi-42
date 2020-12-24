// Duplicate arguments http://www.codewars.com/kata/duplicate-arguments

function solution(...arguments) {
  const arrayOfObject = [...arguments].length;
  const setOfObject = [...new Set(arguments)].length;
  return setOfObject != arrayOfObject;
}

// Last Argument http://www.codewars.com/kata/last
