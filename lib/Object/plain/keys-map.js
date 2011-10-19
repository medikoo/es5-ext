// Create new object with same values, but remapped keys

'use strict';

var f       = require('../../Function/functionalize')
  , forEach = require('./for-each').call;

module.exports = f(function (callback, scope, compareFn, compareByKey) {
	var o = {};
	forEach(this, function (value, key) {
		o[callback.call(scope, key, value, this)] = value;
	}, this, compareFn, compareByKey);
	return o;
});
