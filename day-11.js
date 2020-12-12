// 1. Set Basics
// https://tddbin.com/#?

describe("`Set` lets you store unique values of any type", function () {
  it("`Set` is a new global constructor function", function () {
    const typeOfSet = "function";
    assert.equal(typeOfSet, typeof Set);
  });
  it("every value in a set is unique", function () {
    let set = new Set();
    set.add(1);
    set.add(2);
    const actualSize = 2;
    assert.equal(actualSize, set.size);
  });
  it('the string "1" is different to the number 1', function () {
    let set = new Set();
    set.add(1);
    set.add("1");
    assert.equal(set.size, 2);
  });
  it("even NaN is equal to NaN", function () {
    let set = new Set();
    set.add(NaN);
    set.add(NaN);
    assert.equal(set.size, 1);
  });
  it("+0 and -0 are seen as equal", function () {
    let set = new Set();
    set.add(+0);
    set.add(0);
    set.add(-0);
    assert.deepEqual([...set.values()], [+0]);
  });
});

// 2. set.add()
// https://tddbin.com/#?

describe("`add()` appends a new element to the end of a Set object.", function () {
  let set;
  beforeEach(() => (set = new Set()));
  it("adds every value, of any type, only once", function () {
    const fn = () => {};
    set.add(1);
    set.add(1);
    set.add(fn);
    set.add(fn);
    assert.equal(set.size, 2);
  });
  it("is chainable", function () {
    set.add(1);
    set.add(2);
    assert.equal(set.has(2), true);
  });
  it("call without params adds undefined", function () {
    set.add();
    assert.equal(set.has(void 0), true);
  });
  it("0, -0 and +0 are equal", function () {
    set.add(0);
    set.add(-0);
    set.add(+0);
    assert.equal(set.has(+0), true);
  });
});

// 3. set.delete()
// https://tddbin.com/#?
