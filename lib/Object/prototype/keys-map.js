// Create new object with same values, but remapped keys

'use strict';

var forEach = require('./for-each');

module.exports = function (callback, scope, compareFn, compareByKey) {
	var o = {};
	forEach.call(this, function (value, key) {
		o[callback.call(scope, key, value, this)] = value;
	}, this, compareFn, compareByKey);
	return o;
};
