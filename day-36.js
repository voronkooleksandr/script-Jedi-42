//TDD Bin - Promises
//basics http://tddbin.com/#?kata=es6/language/promise/basics

describe("a Promise represents an operation that hasn`t completed yet, but is expected in the future", function () {
  it("`Promise` is a global function", function () {
    const expectedType = "function";
    assert.equal(typeof Promise, expectedType);
  });
  describe("the constructor", function () {
    it("instantiating it without params throws", function () {
      const fn = () => {
        new Promise();
      };
      assert.throws(fn);
    });
    it("expects a function as parameter", function () {
      const param = () => {};
      assert.doesNotThrow(() => {
        new Promise(param);
      });
    });
  });
  describe("simplest promises", function () {
    it("resolve a promise by calling the `resolve` function given as first parameter", function (done) {
      let promise = new Promise((resolve) => {
        resolve();
      });
      promise
        .then(() => done())
        .catch(() => done(new Error("The promise is expected to resolve.")));
    });
    it("the `resolve` function can return a value, that is consumed by the `promise.then()` callback", function (done) {
      let promise = new Promise((resolve) => {
        resolve(42);
      });
      promise
        .then((value) => {
          assert.equal(value, 42);
          done();
        })
        .catch(() =>
          done(new Error("The promise is expected to resolve with 42!"))
        );
    });
    it("rejecting a promise is done by calling the callback given as 2nd parameter", function (done) {
      let promise = new Promise((resolve, reject) => {
        reject();
      });
      promise
        .then(() => done(new Error("The promise is expected to be rejected.")))
        .catch(() => done());
    });
  });
  describe("an asynchronous promise", function () {
    it("can resolve later, also by calling the first callback", function (done) {
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve(), 100);
      });
      promise
        .then(() => done())
        .catch(() => done(new Error("The promise is expected to resolve.")));
    });
    it("reject it at some later point in time, calling the 2nd callback", function (done) {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(), 100);
      });
      promise
        .then(() => done(new Error("The promise is expected to be rejected.")))
        .catch(() => done());
    });
  });
  describe("test library (mocha here) support for promises", function () {
    it("just returning the promise makes the test library check that the promise resolves", function () {
      let promise = new Promise((reject, resolve) => {
        resolve();
      });
      // return the promise to mocha, it has the checking for promise resolving built in, when it receives a promise
      return promise.resolve;
    });
  });
});

//creation http://tddbin.com/#?kata=es6/language/promise/creation

describe("A promise can be created in multiple ways", function () {
  describe("creating a promise fails when", function () {
    it("using `Promise` as a function", function () {
      function callPromiseAsFunction() {
        new Promise();
      }
      assert.throws(callPromiseAsFunction);
    });
    it("no parameter is passed", function () {
      function promiseWithoutParams() {
        new Promise({});
      }
      assert.throws(promiseWithoutParams);
    });
    it("passing a non-callable throws too", function () {
      const notAFunction = {};
      assert.throws(() => {
        new Promise(notAFunction);
      });
    });
  });
  describe("most commonly Promises get created using the constructor", function () {
    it("by passing a resolve function to it", function () {
      const promise = new Promise(() => resolve());
      return promise.resolve;
    });
    it("by passing a resolve and a reject function to it", function (done) {
      const promise = new Promise((resolve, reject) => reject());
      promise
        .then(() => done(new Error("Expected promise to be rejected.")))
        .catch(done);
    });
  });
  describe("extending a `Promise`", function () {
    it("using `class X extends Promise{}` is possible", function (done) {
      class MyPromise extends Promise {}
      const promise = new MyPromise((resolve) => resolve());
      promise
        .then(() => done())
        .catch((e) =>
          done(new Error("Expected to resolve, but failed with: " + e))
        );
    });
    it("must call `super()` in the constructor if it wants to inherit/specialize the behavior", function () {
      class ResolvingPromise extends Promise {}
      return new ResolvingPromise((resolve) => resolve());
    });
  });
  describe("`Promise.all()` returns a promise that resolves when all given promises resolve", function () {
    it("returns all results", function (done) {
      const promise = Promise.all([
        new Promise((resolve) => resolve(1)),
        new Promise((resolve) => resolve(2)),
      ]);
      promise
        .then((value) => {
          assert.deepEqual(value, [1, 2]);
          done();
        })
        .catch((e) => done(new Error(e)));
    });
    it("is rejected if one rejects", function (done) {
      const promise = Promise.all([new Promise((resolve) => reject(1))]);
      promise.then(() => done(new NotRejectedError())).catch(() => done());
    });
  });

  describe("`Promise.race()` returns the first settled promise", function () {
    it("if it resolves first, the promises resolves", function (done) {
      const lateRejectedPromise = new Promise((resolve, reject) =>
        setTimeout(resolve, 100)
      );
      const earlyResolvingPromise = new Promise((resolve) => resolve("1st :)"));
      const promise = Promise.race([
        earlyResolvingPromise,
        lateRejectedPromise,
      ]);
      promise
        .then((value) => {
          assert.deepEqual(value, "1st :)");
          done();
        })
        .catch((e) =>
          done(new Error("Expected to resolve, but failed with: " + e))
        );
    });
    it("if one of the given promises rejects first, the returned promise is rejected", function (done) {
      const earlyRejectedPromise = new Promise((resolve, reject) =>
        reject("I am a rejector")
      );
      const lateResolvingPromise = new Promise((resolve) =>
        setTimeout(resolve, 10)
      );
      const promise = Promise.race([
        earlyRejectedPromise,
        lateResolvingPromise,
      ]);
      promise
        .then(() => done(new NotRejectedError()))
        .catch((value) => {
          assert.equal(value, "I am a rejector");
          done();
        })
        .catch(done);
    });
  });
  describe("`Promise.resolve()` returns a resolving promise", function () {
    it("if no value given, it resolves with `undefined`", function (done) {
      const promise = Promise.resolve(undefined);
      promise
        .then((value) => {
          assert.deepEqual(value, void 0);
          done();
        })
        .catch((e) =>
          done(new Error("Expected to resolve, but failed with: " + e))
        );
    });
    it("resolves with the given value", function (done) {
      const promise = Promise.resolve("quick resolve");
      promise
        .then((value) => {
          assert.equal(value, "quick resolve");
          done();
        })
        .catch((e) => done(e));
    });
  });
  describe("`Promise.reject()` returns a rejecting promise", function () {
    it("if no value given, it rejects with `undefined`", function (done) {
      const promise = Promise.reject(undefined);
      promise
        .then(() => done(new NotRejectedError()))
        .catch((value) => {
          assert.deepEqual(value, void 0);
          done();
        })
        .catch(done);
    });
    it("the parameter passed to `reject()` can be used in the `.catch()`", function (done) {
      const promise = Promise.reject("quick reject");
      promise
        .then(() => done(new NotRejectedError()))
        .catch((value) => {
          assert.deepEqual(value, "quick reject");
          done();
        })
        .catch(done);
    });
  });
});

class NotRejectedError extends Error {
  constructor() {
    super();
    this.message = "Expected promise to be rejected.";
  }
}

//chaining `then()` http://tddbin.com/#?kata=es6/language/promise/chaining-then

describe("chaining multiple promises can enhance readability", () => {
  describe("prerequisites for understanding", function () {
    it("reminder: the test passes when a fulfilled promise is returned", function () {
      return Promise.resolve("I should fulfill.");
    });
    it("a function given to `then()` fulfills (if it doesnt throw)", function () {
      const beNice = () => {
        return "I am nice";
      };
      return Promise.resolve()
        .then(beNice)
        .then((niceMessage) => assert.equal(niceMessage, "I am nice"));
    });
  });
  describe("chain promises", function () {
    const removeMultipleSpaces = (s) => s.replace(/\s+/g, " ");
    it("`then()` receives the result of the promise it was called on", function () {
      const wordsPromise = Promise.resolve(
        "one   space     between each     word"
      );
      return wordsPromise
        .then((s) => s.replace(/\s+/g, " "))
        .then((actual) => {
          assert.equal(actual, "one space between each word");
        });
    });
    const appendPeriod = (s) => `${s}.`;
    it("multiple `then()`s can be chained", function () {
      const wordsPromise = Promise.resolve("Sentence without       an end");
      return wordsPromise
        .then((s) => s.replace(/\s+/g, " "))
        .then(appendPeriod)
        .then((actual) => {
          assert.equal(actual, "Sentence without an end.");
        });
    });
    const trim = (s) => s.replace(/^\s+/, "").replace(/\s+$/, "");
    it("order of the `then()`s matters", function () {
      const wordsPromise = Promise.resolve("Sentence without       an end ");
      return wordsPromise
        .then(removeMultipleSpaces)
        .then(trim)
        .then(appendPeriod)
        .then((actual) => {
          assert.equal(actual, "Sentence without an end.");
        });
    });
    const asyncUpperCaseStart = (s, onDone) => {
      const format = () => onDone(s[0].toUpperCase() + s.substr(1));
      setTimeout(format, 100);
    };
    it("any of the things given to `then()` can resolve asynchronously (the real power of Promises)", function () {
      const wordsPromise = Promise.resolve("sentence without an end");
      return wordsPromise
        .then((s) => new Promise((resolve) => asyncUpperCaseStart(s, resolve)))
        .then(
          (s) =>
            new Promise((resolve) =>
              setTimeout(() => resolve(appendPeriod(s)), 100)
            )
        )
        .then((actual) => {
          assert.equal(actual, "Sentence without an end.");
        });
    });
    it("also asynchronously, the order still matters, promises wait, but don`t block", function () {
      const wordsPromise = Promise.resolve("trailing space   ");
      return wordsPromise
        .then((s) => new Promise((resolve) => asyncUpperCaseStart(s, resolve)))
        .then(
          (s) =>
            new Promise((resolve) => setTimeout(() => resolve(trim(s)), 100))
        )
        .then(
          (s) =>
            new Promise((resolve) =>
              setTimeout(() => resolve(appendPeriod(s)), 100)
            )
        )
        .then((actual) => {
          assert.equal(actual, "Trailing space.");
        });
    });
  });
});

the API http://tddbin.com/#?kata=es6/language/promise/api


promise.catch() http://tddbin.com/#?kata=es6/language/promise/catch
