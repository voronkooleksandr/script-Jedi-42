//creation http://tddbin.com/#?kata=es6/language/generator/creation

describe('Generators can be created in multiple ways', function() {
  it('the most common way is by adding `*` after `function`', function() {
    function* g() {}
    assertIsGenerator(g());
  });
  it('as a function expression, by adding a `*` after `function`', function() {
    let g = function*() {};
    assertIsGenerator(g());
  });
  it('inside an object by prefixing the function name with `*`', function() {
    let obj = {
      *g() {}
    };
    assertIsGenerator(obj.g());
  });
  it('computed generator names, are just prefixed with a `*`', function() {
    const generatorName = 'g';
    let obj = {
      *[generatorName]() {}
    };
    assertIsGenerator(obj.g());
  });
  it('inside a class the same way', function() {
    const generatorName = 'g';
    class Klazz {
      *[generatorName]() {}
    }
    assertIsGenerator(new Klazz().g());
  });

  function assertIsGenerator(gen) {
    const toStringed = '' + gen;
    assert.equal(toStringed, '[object Generator]');
  }
});

//iterator http://tddbin.com/#?kata=es6/language/generator/iterator


//yield expressions http://tddbin.com/#?kata=es6/language/generator/yield
//send value to a generator http://tddbin.com/#?kata=es6/language/generator/send-value
//send function to a generator http://tddbin.com/#?kata=es6/language/generator/send-function
//`return` inside a generator function http://tddbin.com/#?kata=es6/language/generator/return
