/**
 * Dependencies
 */

var test     = require('tape')
var inherits = require('../')
var Fixture  = require('./fixture')

/**
 * Tests
 */

test('minherits(a, b)', function(assert) {
  function Test() { Fixture.call(this) }
  inherits(Test, Fixture)
  var test = new Test()
  test.person('stranger')
  assert.ok(test instanceof Test, 'should be an instance')
  assert.ok(test instanceof Fixture, 'should be an instance')
  assert.equal(test.greet(), 'Hello, stranger!')
  assert.end()
})
