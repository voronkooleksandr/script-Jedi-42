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
