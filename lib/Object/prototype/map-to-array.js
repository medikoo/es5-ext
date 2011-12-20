// Analogous to Array.prototype.map
//
// Creates an array of results of calling
// a provided function on every key-value pair in this object.

'use strict';

var forEach = require('./for-each');

module.exports = function (cb, thisArg, compareFn, byKeys) {
	var a = [];
	forEach.call(this, function (value, key) {
		a.push(cb.call(thisArg, value, key, this));
	}, this, compareFn, byKeys);
	return a;
};
