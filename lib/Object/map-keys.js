// Create new object with same values, but remapped keys

'use strict';

var forEach = require('./for-each');

module.exports = function (obj, cb, thisArg) {
	var o = {};
	forEach(obj, function (value, key) {
		o[cb.call(thisArg, key, value, this)] = value;
	}, obj);
	return o;
};
