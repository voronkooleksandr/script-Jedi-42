// https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript

function sortIt(arr) {
  return arr
    .slice()
    .sort(
      (a, b) =>
        arr.filter((itemA) => itemA === a).length -
          arr.filter((itemB) => itemB === b).length || b - a
    );
}

// https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript

