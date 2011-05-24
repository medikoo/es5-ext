// Whether object is plain object.
// Its protototype is Object.prototype and it is not host object

'use strict';

var call = require('../Function/call');

var id = {}.toString();
var toString = call(Object.prototype.toString);

module.exports = function (obj) {
	return !!(obj &&
		(typeof obj === "object") &&
		(Object.getPrototypeOf(obj) === Object.prototype) &&
		(toString(obj) === id));
};
