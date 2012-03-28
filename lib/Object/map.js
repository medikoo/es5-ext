// Analogous to Array.prototype.map
//
// Creates a new object with properties which values are results of calling
// a provided function on every key-value pair in this object.

'use strict';

var forEach = require('./for-each');

module.exports = function (obj, cb, thisArg) {
	var o = {};
	forEach(obj, function (value, key) {
		o[key] = cb.call(this, value, key);
	}, thisArg);
	return o;
};
