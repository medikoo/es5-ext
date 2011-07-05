// Analogous to Array.prototype.map
//
// Creates a new object with properties which values are results of calling
// a provided function on every key-value pair in this object.

'use strict';

var f       = require('../../Function/functionalize')
  , forEach = require('./for-each').call;

module.exports = f(function (callback, scope) {
	var o = {};
	forEach(this, function (value, key) {
		o[key] = callback.call(this, value, key);
	}, scope);
	return o;
});
