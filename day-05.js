// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  let money = 0;
  if (bonus === true) {
    money = salary * 10;
  } else {
    money = salary;
  }
  return "£" + money.toString();
}

// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n) {
  const len = n.toString().length;
  const power = Math.pow(n, 2).toString().slice(-len);
  return n == power ? "Automorphic" : "Not!!";
}

// https://www.codewars.com/kata/is-this-my-tail/train/javascript
// якщо без стрілочної функції, то також має зарахуватися..не дублюю, хоча ES6 не проти зробити все в 1 рядок :)

function correctTail(body, tail) {
  return body.slice(-1) === tail[0] ? true : false;
}
