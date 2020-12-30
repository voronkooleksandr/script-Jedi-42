// Object Literal
// Basics http://tddbin.com/#?kata=es6/language/object-literal/basics

describe("The object literal allows for new shorthands", () => {
  const x = 1;
  const y = 2;
  describe("with variables", () => {
    it("the short version for `{x: x}` is {x}", () => {
      const short = { y };
      assert.deepEqual(short, { y: y });
    });
    it("works with multiple variables too", () => {
      const short = { x, y };
      assert.deepEqual(short, { x: x, y: y });
    });
  });
  describe("with methods", () => {
    const func = () => func;
    it("using the name only uses it as key", () => {
      const short = { func };
      assert.deepEqual(short, { func: func });
    });
    it("a different key must be given explicitly, just like before ES6", () => {
      const short = { otherKey: func };
      assert.deepEqual(short, { otherKey: func });
    });
    it("inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`", () => {
      const short = {
        inlineFunc() {
          return "I am inline";
        },
      };
      assert.deepEqual(short.inlineFunc(), "I am inline");
    });
  });
});

// Computed Properties http://tddbin.com/#?kata=es6/language/object-literal/computed-properties



// Getter http://tddbin.com/#?kata=es6/language/object-literal/getter

// Setter http://tddbin.com/#?kata=es6/language/object-literal/setter

// Class
// Creation http://tddbin.com/#?kata=es6/language/class/creation

// Accessors http://tddbin.com/#?kata=es6/language/class/accessors

// Static http://tddbin.com/#?kata=es6/language/class/static

// Extends http://tddbin.com/#?kata=es6/language/class/extends

// More Extends http://tddbin.com/#?kata=es6/language/class/more-extends

// Super in Method http://tddbin.com/#?kata=es6/language/class/super-in-method

// Super in Constructor http://tddbin.com/#?kata=es6/language/class/super-in-constructor
