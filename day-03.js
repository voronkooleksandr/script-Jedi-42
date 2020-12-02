// Все таки prettier вчить красиво і чисто писати код. Це як вірш, який написати в один параграф, а має бути в колонку та з рифмою в кінці :)
// 1.1 https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

function trueOrFalse(val) {
  if (
    val === 0 ||
    val === null ||
    val === undefined ||
    val === NaN ||
    val === "" ||
    val === false ||
    val === -0
  ) {
    return "false";
  } else {
    return "true";
  }
}

// 1.2 через тернарний оператор

function trueOrFalse(val) {
  return val === 0 ||
    val === null ||
    val === undefined ||
    val === NaN ||
    val === "" ||
    val === false ||
    val === -0
    ? "false"
    : "true";
}

// 2. https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
