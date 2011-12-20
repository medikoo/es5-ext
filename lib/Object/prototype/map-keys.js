// Create new object with same values, but remapped keys

'use strict';

var forEach = require('./for-each');

module.exports = function (cb, thisArg, compareFn, byKeys) {
	var o = {};
	forEach.call(this, function (value, key) {
		o[cb.call(thisArg, key, value, this)] = value;
	}, this, compareFn, byKeys);
	return o;
};
