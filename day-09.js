// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

const firstToLast = (str, c) =>
  str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);

// http://www.codewars.com/kata/57274562c8dcebe77e001012
// 3 годині читав про reduce метод, який би мав замінити цикл за допомогою колбек ф-ції але --  по відео копі-пастив але розумію всі рядки

function cutIt(arr) {
  let minLen = arr[0].length;
  for (i = 1; i < arr.length; i++) {
    if (arr[i].length < minLen) {
      minLen = arr[i].length;
    }
  }
  const cutArray = [];
  for (i = 0; i < arr.length; i++) {
    cutArray.push(arr[i].slice(0, minLen));
  }
  return cutArray;
}
