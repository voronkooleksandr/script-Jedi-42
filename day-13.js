// basics http://tddbin.com/#?kata=es6/language/map/basics

describe("`Map` is a key/value map", function () {
  it("`Map` is a new global constructor function", function () {
    const typeOfMap = "function";
    assert.equal(typeOfMap, typeof Map);
  });
  it("provides `new Map().set()` to add key+value pair, `get()` to read it by key", function () {
    let map = new Map();
    map.set("key", "value");
    const value = map.get("key");
    assert.equal(value, "value");
  });
  it("`has()` tells if map has the given key", function () {
    let map = new Map();
    map.set("key", "value");
    const hasIt = map.has("key");
    assert.equal(hasIt, true);
  });
  it("a map is iterable", function () {
    let map = new Map();
    map.set("1", "one");
    map.set("2", "two");
    const mapAsArray = Array.from(map); // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
    assert.deepEqual(mapAsArray, [
      ["1", "one"],
      ["2", "two"],
    ]);
  });
  it("complex types can be keys", function () {
    const obj = { x: 1 };
    const otherObj = { x: 1 };
    let map = new Map();
    map.set(obj, "");
    map.set(otherObj, "");
    map.delete(otherObj);
    assert.equal(map.has(otherObj), false);
  });
});

// map.get() http://tddbin.com/#?kata=es6/language/map/get

describe("`Map.prototype.get` returns the element from the map for a key", function () {
  it("`get(key)` returns the value stored for this key", function () {
    let map = new Map();
    map.set("key", "value");
    const value = map.get("key");
    assert.equal(value, "value");
  });
  it("multiple calls still return the same value", function () {
    let map = new Map();
    map.set("value", "value");
    var value = map.get(map.get(map.get("value")));
    assert.equal(value, "value");
  });
  it("requires exactly the value as passed to `set()`", function () {
    let map = new Map();
    const obj = {};
    map.set(obj, "object is key");
    assert.equal(map.get(obj), "object is key");
  });
  it("leave out the key, and you get the value set for the key `undefined` (void 0)", function () {
    let map = new Map();
    map.set(void 0, "yo");
    const value = map.get(void 0);
    assert.equal(value, "yo");
  });
  it("returns undefined for an unknown key", function () {
    let map = new Map();
    map.set(1);
    const value = map.get();
    assert.equal(value, void 0);
  });
});

// map.set() http://tddbin.com/#?kata=es6/language/map/set

describe("`Map.prototype.set` adds a new element with key and value to a Map", function () {
  it("simplest use case is `set(key, value)` and `get(key)`", function () {
    let map = new Map();
    map.set("key", "value");
    assert.equal(map.get("key"), "value");
  });
  it("the key can be a complex type too", function () {
    const noop = function () {};
    let map = new Map();
    map.set(noop, "the real noop");
    assert.equal(map.get(noop), "the real noop");
  });
  it("calling `set()` again with the same key replaces the value", function () {
    let map = new Map();
    map.set("key", "value");
    map.set("key", "value1");
    assert.equal(map.get("key"), "value1");
  });
  it("`set()` returns the map object, it`s chainable", function () {
    let map = new Map();
    map.set(1, "one");
    map.set(2, "two");
    map.set(3, "three");
    assert.deepEqual([...map.keys()], [1, 2, 3]);
    assert.deepEqual([...map.values()], ["one", "two", "three"]);
  });
});

// initialize http://tddbin.com/#?kata=es6/language/map/initialize





