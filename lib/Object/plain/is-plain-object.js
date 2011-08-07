// Whether object is plain object.
// Its protototype should be Object.prototype and it cannot be host object.

'use strict';

var f        = require('../../Function/functionalize')
  , toString = require('../to-string').call

  , id       = {}.toString();

module.exports = f(function () {
	return !!(this &&
		(typeof this === "object") &&
		(Object.getPrototypeOf(this) === Object.prototype) &&
		(toString(this) === id));
});
