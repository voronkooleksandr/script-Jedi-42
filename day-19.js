// TDD Bin - Template Strings

// basics http://tddbin.com/#?kata=es6/language/template-strings/basics

describe("A template string, is wrapped in ` (backticks) instead of ' or \"", function () {
  describe("by default, behaves like a normal string", function () {
    it("just surrounded by backticks", function () {
      var str = `like a string`;
      assert.equal(str, "like a string");
    });
  });

  var x = 42;
  var y = 23;

  describe('can evaluate variables, which are wrapped in "${" and "}"', function () {
    it('e.g. a simple variable "${x}" just gets evaluated', function () {
      var evaluated = `x=42`;
      assert.equal(evaluated, "x=" + x);
    });
    it("multiple variables get evaluated too", function () {
      var evaluated = "42+23";
      assert.equal(evaluated, x + "+" + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function () {
    it('all inside "${...}" gets evaluated', function () {
      var evaluated = `${42 + 23}`;
      assert.equal(evaluated, x + y);
    });
    it('inside "${...}" can also be a function call', function () {
      function getEnv() {
        return "ECMAScript";
      }
      var evaluated = `${getEnv()}`;
      assert.equal(evaluated, "ECMAScript");
    });
  });
});

// multiline http://tddbin.com/#?kata=es6/language/template-strings/multiline

describe("Template string, can contain multiline content", function () {
  it("wrap it in backticks (`) and add a newline, to span across two lines", function () {
    var normalString = `line1\n\nline3`;
    assert.equal(normalString, "line1\n\nline3");
  });
  it("even over more than two lines", function () {
    var multiline = `\n \n \n`;
    assert.equal(multiline.split("\n").length, 4);
  });
  describe("and expressions inside work too", function () {
    var x = 42;
    it("like simple variables", function () {
      var multiline = `line 1\n
      ${x}`;
      assert.equal(multiline, "line 1\n\n      42");
    });
    it("also here spaces matter", function () {
      var multiline = `\n\n${x}`;
      assert.equal(multiline, "\n\n42");
    });
  });
});

// tagged template strings http://tddbin.com/#?kata=es6/language/template-strings/tagged


