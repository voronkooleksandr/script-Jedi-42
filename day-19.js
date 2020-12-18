// TDD Bin - Template Strings

// basics http://tddbin.com/#?kata=es6/language/template-strings/basics

describe("A template string, is wrapped in ` (backticks) instead of ' or \"", function () {
  describe("by default, behaves like a normal string", function () {
    it("just surrounded by backticks", function () {
      const str = `like a string`;
      assert.equal(str, "like a string");
    });
  });

  const x = 42;
  const y = 23;

  describe('can evaluate variables, which are wrapped in "${" and "}"', function () {
    it('e.g. a simple variable "${x}" just gets evaluated', function () {
      const evaluated = `x=42`;
      assert.equal(evaluated, "x=" + x);
    });
    it("multiple variables get evaluated too", function () {
      const evaluated = "42+23";
      assert.equal(evaluated, x + "+" + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function () {
    it('all inside "${...}" gets evaluated', function () {
      const evaluated = `${42 + 23}`;
      assert.equal(evaluated, x + y);
    });
    it('inside "${...}" can also be a function call', function () {
      function getEnv() {
        return "ECMAScript";
      }
      const evaluated = `${getEnv()}`;
      assert.equal(evaluated, "ECMAScript");
    });
  });
});

// multiline http://tddbin.com/#?kata=es6/language/template-strings/multiline

describe("Template string, can contain multiline content", function () {
  it("wrap it in backticks (`) and add a newline, to span across two lines", function () {
    const normalString = `line1\n\nline3`;
    assert.equal(normalString, "line1\n\nline3");
  });
  it("even over more than two lines", function () {
    const multiline = `\n \n \n`;
    assert.equal(multiline.split("\n").length, 4);
  });
  describe("and expressions inside work too", function () {
    const x = 42;
    it("like simple variables", function () {
      const multiline = `line 1\n
      ${x}`;
      assert.equal(multiline, "line 1\n\n      42");
    });
    it("also here spaces matter", function () {
      const multiline = `\n\n${x}`;
      assert.equal(multiline, "\n\n42");
    });
  });
});

// tagged template strings http://tddbin.com/#?kata=es6/language/template-strings/tagged

describe("Tagged template strings, are an advanced form of template strings", function () {
  it('syntax: prefix a template string with a function to call (without "()" around it)', function () {
    function tagFunction(s) {
      return s.toString();
    }
    const evaluated = tagFunction`template string`;
    assert.equal(evaluated, "template string");
  });
  describe("the tag function can access each part of the template", function () {
    describe("the 1st parameter receives only the pure strings of the template string", function () {
      function tagFunction(strings) {
        return strings;
      }
      it("the strings are an array", function () {
        const result = ["template string"];
        assert.deepEqual(result, tagFunction`template string`);
      });
      it("expressions are NOT passed to it", function () {
        const tagged = tagFunction`one${23}two`;
        assert.deepEqual(tagged, ["one", "two"]);
      });
    });
    describe("the 2nd and following parameters contain the values of the processed substitution", function () {
      const one = 1;
      const two = 2;
      const three = 3;
      it("the 2nd parameter contains the first expression`s value", function () {
        function firstValueOnly(strings, firstValue) {
          return firstValue;
        }
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 1);
      });
      it("the 3rd parameter contains the second expression`s value", function () {
        function secondValueOnly(strings, firstValue, secondValue) {
          return secondValue;
        }
        assert.equal(secondValueOnly`uno ${one}, dos ${two}`, 2);
      });
      it("using ES6 rest syntax, all values can be accessed via one variable", function () {
        function allValues(stringsArray, ...allTheValues) {
          // using the new ES6 rest syntax
          return allTheValues;
        }
        assert.deepEqual(allValues`uno=${one}, dos=${two}, tres=${three}`, [
          1,
          2,
          3,
        ]);
      });
    });
  });
});

// raw property http://tddbin.com/#?kata=es6/language/template-strings/raw




