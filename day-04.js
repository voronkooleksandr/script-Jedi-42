// 9. https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(Oleksandr, n) {
  let i = 0;
  let result = [Oleksandr];

  while (n > i) {
    if (i % 2 === 0) {
      result.unshift("*");
      i++;
    } else {
      result.push("*");
      i++;
    }
  }

  return result.join("");
}

// 10. https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  return [odd, even];
}
