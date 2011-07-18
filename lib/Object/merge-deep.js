// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.
//
// Properties are taken from whole prototype chain
// (up to prototype which both objects share)

'use strict';

var f     = require('../Function/functionalize')
  , merge = require('./merge').bind;

module.exports = f(function (b) {
	var objs = [b], p = b;
	while(!((p = Object.getPrototypeOf(p)).isPrototypeOf(this))) {
		objs.unshift(p);
	}
	objs.forEach(merge(this));
	return this;
});
