// Duplicate arguments http://www.codewars.com/kata/duplicate-arguments

function solution(...argument) {
  const arrayOfObject = [...argument].length;
  const setOfObject = [...new Set(argument)].length;
  return setOfObject != arrayOfObject;
}

// Last Argument http://www.codewars.com/kata/last
