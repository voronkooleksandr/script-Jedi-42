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

// Class
// Creation http://tddbin.com/#?kata=es6/language/class/creation

// Accessors http://tddbin.com/#?kata=es6/language/class/accessors

// Static http://tddbin.com/#?kata=es6/language/class/static

// Extends http://tddbin.com/#?kata=es6/language/class/extends

// More Extends http://tddbin.com/#?kata=es6/language/class/more-extends

// Super in Method http://tddbin.com/#?kata=es6/language/class/super-in-method

// Super in Constructor http://tddbin.com/#?kata=es6/language/class/super-in-constructor
