function Fixture() {}

Fixture.prototype.person = function(name) {
  this.name = name
}

Fixture.prototype.greet = function() {
  return 'Hello, ' + this.name + '!'
}

module.exports = Fixture
