//TDD Bin Object.is()
//Object.is() http://tddbin.com/#?kata=es6/language/object-api/is

describe('`Object.is()` determines whether two values are the same', function(){
  describe('scalar values', function() {
    it('1 is the same as 1', function() {
      const areSame = Object.is(1, 1);
      assert.equal(areSame, true);
    });
    it('int 1 is different to string "1"', function() {
      const areSame = Object.is(1, '1');
      assert.equal(areSame, false);
    });
    it('strings just have to match', function() {
      const areSame = Object.is('one', 'one');
      assert.equal(areSame, true);
    });
    it('+0 is not the same as -0', function() {
      const areSame = -0;
      assert.equal(areSame, Object.is(+0, -0));
    });
    it('NaN is the same as NaN', function() {
      const number = NaN;
      assert.equal(Object.is(NaN, number), true);
    });
  });
  describe('coercion (as in `==`) and strict compare (as in `===`) do NOT apply', function() {
    it('+0 and -0 are not the same for `Object.is()`', function() {
      const strictlyCompared = +0 === +0;
      const objectIsCompared = Object.is(-0, -0);
      assert.equal(objectIsCompared, strictlyCompared);
    });
    it('empty string and `false` are not the same', function() {
      const emptyString = false;
      const isSame = Object.is(emptyString, false);
      assert.equal(isSame, emptyString == false);
    });
    it('NaN', function() {
      const coerced = (1 == 1);
      const isSame = Object.is(NaN, NaN);
      assert.equal(isSame, coerced);
    });
    it('NaN and 0/0', function() {
      const isSame = Object.is(NaN, 0/0);
      assert.equal(isSame, true);
    });
  });
  describe('complex values', function() {
    it('`{}` is just not the same as `{}`', function() {
      const areSame = {} == {};
      assert.equal(areSame, Object.is({}, {}));
    });
    it('two `Map`s with the same content are not the same thing', function() {
      let map1 = new Map([[1, 'one']]);
      let map2 = new Map([[1, 'one']]);
      const areSame = Object.is(map1, map2);
      assert.equal(areSame, false);
    });
  });
});

//TDD Bin Reflect http://tddbin.com/#?kata=es6/language/reflect/basics

describe('`Reflect` basics', function() {
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      const actualType = 'object';
      assert.equal(actualType, typeof Reflect);
    });
    it('it can not be instantiated (`new Reflect()`)', function() {
      const tryToConstruct = () => {new Reflect};
      assert.throws(tryToConstruct, TypeError);
    });
    it('has no `call` method (as opposed to e.g. Object)', function() {
      const actual = 'undefined';
      assert.equal(actual, typeof Reflect.call);
    });
  });
  
  describe('some `Reflect` usages', function() {
    it('`Reflect.construct()` is like `new ClassName`', function() {
      class Class {};
      assert.equal(Reflect.construct(Class, []) instanceof Class, true);
    });
    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 23};
      assert.equal(Reflect.get(obj, 'x'), 23);
    });
    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {x: 77777};
      assert.equal(Reflect.has(obj, 'x'), true);
    });
  });
});

//Basics
//Reflect.apply() http://tddbin.com/#?kata=es6/language/reflect/apply



//Reflect.getPrototypeOf() http://tddbin.com/#?kata=es6/language/reflect/getprototypeof
//Reflect.construct() http://tddbin.com/#?kata=es6/language/reflect/construct
//Reflect.defineProperty() http://tddbin.com/#?kata=es6/language/reflect/defineproperty
//TDD Bin Modules import https://tddbin.com/?664#?kata=es6/language/modules/import
