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

describe("Object literal properties may be computed values", () => {
  it("a computed property `x` needs to be surrounded by `[]`", () => {
    const propertyName = "x";
    const obj = { [propertyName]: 1 };
    assert.equal(obj.x, 1);
  });
  it("can also get a function assigned", () => {
    const key = "func";
    const obj = {
      [key]() {
        return "seven";
      },
    };
    assert.equal(obj.func(), "seven");
  });
  it("the key may also be the result of a function call", () => {
    const getName = () => "propertyName";
    const obj = {
      ["propertyName"]() {
        return "seven";
      },
    };
    assert.equal(obj.propertyName(), "seven");
  });
  it("the key can also be constructed by an expression", () => {
    const what = "tyName";
    const obj = { ["proper" + what]: null };
    assert("propertyName" in obj);
  });
  it("accessor keys can be computed names too", () => {
    const obj = {
      get ["key"]() {
        return 1;
      },
    };
    assert.equal(obj.key, 1);
  });
});

// Getter http://tddbin.com/#?kata=es6/language/object-literal/getter

describe('An object literal can also contain getters', () => {
  it('just prefix the property with `get` (and make it a function)', function() {
    const obj = {
      get x() { return 'ax'; }
    };
    assert.equal(obj.x, 'ax');
  });
  it('must have NO parameters', function() {
    const obj = {
      get x() { return 'ax'; }
    };
    assert.equal(obj.x, 'ax');
  });
  it('can be a computed property (an expression enclosed in `[]`)', function() {
    const keyName = 'x';
    const obj = {
      get [keyName]() { return 'ax'; }
    };
    assert.equal(obj.x, 'ax');
  });
  it('can be removed using delete', function() {
    const obj = {
      get y() { return 'ax'; }
    };
    delete obj.y;
    assert.equal(obj.x, void 0);
  });

// Setter http://tddbin.com/#?kata=es6/language/object-literal/setter

describe("An object literal can also contain setters", () => {
  describe("defining: a setter", function () {
    it("by prefixing the property with `set` (and make it a function)", function () {
      let theX = null;
      const obj = {
        set x(newX) {
          theX = newX;
        },
      };
      obj.x = "the new X";
      assert.equal(theX, "the new X");
    });
    it("must have exactly one parameter", function () {
      let setterCalledWith = void 0;
      const obj = {
        set x(jedi42) {
          // <<<<=== it's not a setter yet!
          if (arguments.length === 1) {
            setterCalledWith = arguments[0];
          }
        },
      };
      assert.equal((obj.x = "new value"), setterCalledWith);
    });
    it("can be a computed property (an expression enclosed in `[]`)", function () {
      const publicPropertyName = "x";
      const privatePropertyName = "_" + publicPropertyName;
      const obj = {
        set [publicPropertyName](jedi42) {
          this[privatePropertyName] = jedi42;
        },
        // write the complete setter to make the assert below pass :)
      };
      obj.x = "axe";
      assert.equal(obj._x, "axe");
    });
  });
  describe("working with/on the setter", function () {
    it("you can use `delete` to remove the property (including it`s setter)", function () {
      let setterCalled = false;
      const obj = {
        set x(param) {
          setterCalled = true;
        },
      };
      delete obj.x;
      // delete the property x here, to make the test pass
      obj.x = true;
      assert.equal(setterCalled, false);
    });
  });
});


// Class
// Creation http://tddbin.com/#?kata=es6/language/class/creation

// Accessors http://tddbin.com/#?kata=es6/language/class/accessors

// Static http://tddbin.com/#?kata=es6/language/class/static

// Extends http://tddbin.com/#?kata=es6/language/class/extends

// More Extends http://tddbin.com/#?kata=es6/language/class/more-extends

// Super in Method http://tddbin.com/#?kata=es6/language/class/super-in-method

// Super in Constructor http://tddbin.com/#?kata=es6/language/class/super-in-constructor
