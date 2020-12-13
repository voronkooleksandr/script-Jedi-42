// basics http://tddbin.com/#?kata=es6/language/symbol/basics

describe("Symbol", function () {
  it("`Symbol` lives in the global scope", function () {
    const actual = Symbol;
    assert.equal(actual, Symbol);
  });
  it("every `Symbol()` is unique", function () {
    const sym1 = Symbol();
    const sym2 = Symbol();
    assert.notEqual(sym1, sym2);
  });
  it("every `Symbol()` is unique, also with the same parameter", function () {
    var sym1 = Symbol("foo");
    var sym2 = Symbol("foo");
    assert.notEqual(sym1, sym2);
  });
  it('`typeof Symbol()` returns "symbol"', function () {
    const theType = typeof Symbol();
    assert.equal(theType, "symbol");
  });
  it("`new Symbol()` throws an exception, to prevent creation of Symbol wrapper objects", function () {
    function fn() {
      new Symbol();
    }
    assert.throws(fn);
  });
});

// Symbol.for() http://tddbin.com/#?kata=es6/language/symbol/for

