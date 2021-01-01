// #37: Unlock new weapon---RegExp Object http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const result = [];
  for (let i = 0; i < count.length; i++) {
    result.push((animals.match(new RegExp(count[i], "g")) || []).length);
    console.log(result);
  }
  return result;
}

// #38: Regular Expression--""^"",""$"", ""."" and test() http://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(string, word) {
  const changeOfString =
    word[0] + word.slice(1, -1).replace(/.+/g, ".+") + word.slice(-1);
  const regularOfString = new RegExp("^" + changeOfString + "$");
  console.log(regularOfString);
  console.log(changeOfString);
  return string
    .split(" ")
    .filter((item) => item.length === word.length && regularOfString.test(item))
    .join(" ");
}

// #39: Regular Expression--""?"", ""*"", ""+"" and ""{}"" https://www.codewars.com/kata/573bca07dffc1aa693000139
