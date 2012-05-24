'use strict';

var forEach = require('./for-each');

module.exports = function (obj, cb, thisArg) {
	var o = {};
	forEach(obj, function (value, key) {
		o[key] = cb.call(this, value, key, obj);
	}, thisArg);
	return o;
};
