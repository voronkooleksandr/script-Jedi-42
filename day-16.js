// #25: methods of arrayObject---reverse() and sort() http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  return arr
    .slice()
    .sort(
      (a, b) =>
        arr.filter((itemA) => itemA === a).length -
          arr.filter((itemB) => itemB === b).length || b - a
    );
}

// #26: methods of arrayObject---map() http://www.codewars.com/kata/572fdeb4380bb703fc00002c

function isolateIt(arr) {
  return arr.slice().map((elementofArray) => {
    const len = elementofArray.length;
    elementofArray = elementofArray.split("");
    len % 2 === 0
      ? elementofArray.splice(len / 2, 0, "|")
      : elementofArray.splice(len / 2, 1, "|");
    return elementofArray.join("");
  });
}

// #27: methods of arrayObject---filter() http://www.codewars.com/kata/573023c81add650b84000429

// #28: methods of arrayObject---every() and some() http://www.codewars.com/kata/57308546bd9f0987c2000d07
