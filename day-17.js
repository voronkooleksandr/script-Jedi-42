// #29: methods of arrayObject---concat() and join() http://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr) {
  const result = [].concat(...arr);
  return (sortDescending = result.sort((a, b) => b - a).join(">"));
}

// #30: methods of arrayObject---reduce() and reduceRight() http://www.codewars.com/kata/573156709a231dcec9000ee8

