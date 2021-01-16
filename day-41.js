// Generators #1 https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator() {
  const end = Infinity;
  let item;
  for (let i = 1; i < end; i++) {
    if (item) {
      i = item;
    }
    item = yield i;
  }
}

// Generators #2 https://www.codewars.com/kata/5637ead70013386e30000027/

function* generator(a) {
  let result;
  let i = 1;
  while (true) {
    result = yield `${a} x ${i} = ${a * i}`;
    i++;
  }
}

