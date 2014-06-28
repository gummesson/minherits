/* Fixture */

function Fixture() {}

Fixture.prototype.person = function(name) {
  this.name = name;
};

Fixture.prototype.greet = function() {
  return 'Hello, ' + this.name + '!';
};

/* Exports */

module.exports = Fixture;
