// Whether object is plain object.
// Its protototype should be Object.prototype and it cannot be host object.

'use strict';

var toString = Object.prototype.toString
  , f        = require('../../Function/functionalize')

  , id       = {}.toString();

module.exports = f(function () {
	return (this &&
		(typeof this === "object") &&
		(Object.getPrototypeOf(this) === Object.prototype) &&
		(toString.call(this) === id)) || false;
});
