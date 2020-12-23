// #29: methods of arrayObject---concat() and join() http://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++)
    result = result.concat(arr[i]).sort((a, b) => b - a);
  return result.join(">");
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

// #31: methods of arrayObject---isArray() indexOf() and toString() http://www.codewars.com/kata/5732b0351eb838d03300101d

function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array";
  if (arr.includes(5) && arr.includes(13)) return "It's a black array";
  if (!arr.includes(5) || !arr.includes(13)) return "It's a white array";
}

// Implement own reduce https://www.codewars.com/kata/array-number-reduce/train/javascript

//I understand the task +- 80% metod of reduce() from the video but don"t be coppy/past. :). Wait this task in the next weeks!
