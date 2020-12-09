// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

const firstToLast = (str, c) =>
  str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
