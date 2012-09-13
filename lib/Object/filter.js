'use strict';

var forEach = require('./for-each');

module.exports = function (obj, cb/*, thisArg*/) {
	var o = {}, thisArg = arguments[2];
	forEach(obj, function (value, key) {
		if (cb.call(thisArg, value, key)) {
			o[key] = obj[key];
		}
	});
	return o;
};
