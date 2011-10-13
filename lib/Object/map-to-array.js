// Analogous to Array.prototype.map
//
// Creates an array of results of calling
// a provided function on every key-value pair in this object.

'use strict';

var f       = require('../Function/functionalize')
  , forEach = require('./plain/for-each').call;

module.exports = f(function (callback, scope, compareFn, compareByKey) {
	var a = [];
	forEach(this, function (value, key) {
		a.push(callback.call(scope, value, key, this));
	}, this, compareFn, compareByKey);
	return a;
});
