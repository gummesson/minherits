/* minherits */

function minherits(a, b) {
  a.prototype = Object.create(b.prototype);
  a.prototype.constructor = a;
  return a;
}

/* Exports */

module.exports = minherits;
