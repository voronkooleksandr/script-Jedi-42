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



// #39: Regular Expression--""?"", ""*"", ""+"" and ""{}"" https://www.codewars.com/kata/573bca07dffc1aa693000139
