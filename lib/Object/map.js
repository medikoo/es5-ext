'use strict';

var forEach = require('./for-each');

module.exports = function (obj, cb/*, thisArg*/) {
	var o = {}, thisArg = arguments[2];
	forEach(obj, function (value, key) {
		o[key] = cb.call(thisArg, value, key, obj);
	});
	return o;
};
