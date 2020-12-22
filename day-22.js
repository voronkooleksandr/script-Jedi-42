// Basics http://tddbin.com/#?kata=es6/language/arrow-functions/basics

describe("Arrow functions", function () {
  it("are shorter to write, instead of `function(){}` write `() => {}`", function () {
    let func = function () {};
    func = () => {};
    assert.equal("" + func, "() => {}");
  });
  it("instead `{}` use an expression, as return value", function () {
    const func = () => {
      return "I return too";
    };
    assert.equal(func(), "I return too");
  });
  it("one parameter can be written without parens", () => {
    const func = (param) => param - 1;
    assert.equal(func(25), 24);
  });
  it("many params require parens", () => {
    const func = (param2, param1) => param2 + param1;
    assert.equal(func(23, 42), 23 + 42);
  });
  it("the function body needs parens to return an object", () => {
    const func = () => {
      return { iAm: "an object" };
    };
    assert.deepEqual(func(), { iAm: "an object" });
  });
});

// Function binding http://tddbin.com/#?kata=es6/language/arrow-functions/binding
