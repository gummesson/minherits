/* Modules */

var test     = require('tape');
var inherits = require('../');
var Fixture  = require('./fixture');

/* Tests */

// minherits(new, old)

test('minherits()', function(assert) {
  function Test() { Fixture.call(this); }
  inherits(Test, Fixture);
  var test = new Test();
  test.person('stranger');
  assert.ok(test instanceof Test, 'should be an instance of the new constructor');
  assert.ok(test instanceof Fixture, 'should be an instance of the old constructor');
  assert.equal(test.greet(), 'Hello, stranger!', 'should inherit the old constructor\'s methods');
  assert.end();
});
