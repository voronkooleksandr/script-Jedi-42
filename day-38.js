//array http://tddbin.com/#?kata=es6/language/iterator/array

describe("The native array is a built-in iterable object", function () {
  const arr = ["a", "B", "see"];
  describe("the iterator", function () {
    it("an array has an iterator, which is a function", function () {
      const iterator = arr[Symbol.iterator];
      const theType = typeof iterator;
      const expected = "function";
      assert.equal(theType, expected);
    });
    it("can be looped with `for-of`, which expects an iterable", function () {
      let count = 0;
      for (let value of arr) {
        count++;
      }
      assert.equal(count, arr.length);
    });
  });
  describe("the iterator protocol", function () {
    it("calling `next()` on an iterator returns an object according to the iterator protocol", function () {
      const iterator = arr[Symbol.iterator]();
      const firstItem = iterator.next();
      assert.deepEqual(firstItem, { done: false, value: "a" });
    });
    it("the after-last element has done=true", function () {
      const arr = [];
      const iterator = arr[Symbol.iterator]();
      const afterLast = iterator.next();
      assert.deepEqual(afterLast, { done: true, value: void 0 });
    });
  });
});

//string http://tddbin.com/#?kata=es6/language/iterator/string


//protocol http://tddbin.com/#?kata=es6/language/iterator/protocol
//usage http://tddbin.com/#?kata=es6/language/iterator/usages
