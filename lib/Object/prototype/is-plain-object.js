// Whether object is plain object.
// Its protototype should be Object.prototype and it cannot be host object.

'use strict';

var getPrototypeOf = Object.getPrototypeOf
  , prototype      = Object.prototype
  , toString       = prototype.toString

  , id = {}.toString();

module.exports = function () {
	return (this && (typeof this === 'object') &&
		(getPrototypeOf(this) === prototype) && (toString.call(this) === id)) ||
		false;
};
