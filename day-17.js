// #29: methods of arrayObject---concat() and join() http://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr) {
  const result = [].concat(...arr);
  return (sortDescending = result.sort((a, b) => b - a).join(">"));
}

// #30: methods of arrayObject---reduce() and reduceRight() http://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr) {
  let head = [];
  for (i = 0; i < arr.length - 1; i++) {
    head.push(Number(String(arr[i]).slice(-1)));
  }
  let tail = [];
  for (i = 1; i < arr.length; i++) {
    tail.push(Number(String(arr[i]).slice(0, 1)));
  }
  const sumHeadandTail = [];
  for (i = 0; i < head.length; i++) {
    sumHeadandTail.push(head[i] + tail[i]);
  }
  return sumHeadandTail.reduce((a, b) => a * b);
}

//
