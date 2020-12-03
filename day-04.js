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
