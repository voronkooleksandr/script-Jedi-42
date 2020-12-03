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
// треба було звичайним циклом for! У мене for..of вийшло якось зрозуміліше для мене

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

// 11. https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
// в рядок 42 prettier чомусь фігурну дужку дає але я б її лишив в кінці 41 рядка..йому видніше думаю)

function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] != "Hello Kitty" && dolls[i] != "Barbie doll") continue;
    {
      while (bag.length !== 3) {
        bag.push(dolls[i]);
        break;
      }
    }
  }
  return bag;
}

// 12. https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  var five = [];
  for (key in obj) {
    if (key.length === 5) {
      five.push(key);
    }
    if (obj[key].length === 5) {
      five.push(obj[key]);
    }
  }
  return five;
}
