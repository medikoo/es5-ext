// Analogous to Array.prototype.every.
//
// Returns true if every descriptor-key pair in this object satisfies
// the provided testing function.

'use strict';

var f     = require('../Function/functionalize')
  , s     = require('../Function/prototype/s')
  , pluck = require('./pluck').bind;

module.exports = f(function (callback, scope) {
	return Object.getOwnPropertyNames(this)
		.every(s.call(callback, pluck(this)), scope);
});
