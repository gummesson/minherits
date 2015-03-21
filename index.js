/**
 * Make `a` inherit methods from `b`.
 *
 * @param  {function} a
 * @param  {function} b
 * @return {function}
 *
 * @api public
 */

function minherits(a, b) {
  a.prototype = Object.create(b.prototype)
  a.prototype.constructor = a
  return a
}

/**
 * Exports
 */

module.exports = minherits
