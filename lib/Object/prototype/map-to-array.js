// Analogous to Array.prototype.map
//
// Creates an array of results of calling
// a provided function on every key-value pair in this object.

'use strict';

var forEach = require('./for-each');

module.exports = function (callback, scope, compareFn, compareByKey) {
	var a = [];
	forEach.call(this, function (value, key) {
		a.push(callback.call(scope, value, key, this));
	}, this, compareFn, compareByKey);
	return a;
};
