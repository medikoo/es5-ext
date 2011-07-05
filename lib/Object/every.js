// Analogous to Array.prototype.every.
//
// Returns true if every key-descriptor pair in this object satisfies the provided
// testing function.

'use strict';

var f     = require('../Function/functionalize')
  , s     = require('../Function/s')
  , pluck = require('./pluck').bind;

module.exports = f(function (callback, scope) {
	return Object.getOwnPropertyNames(this)
		.every(s(callback, pluck(this)), scope);
});
