'use strict';

var assertCallable = require('../assert-callable');

module.exports = function (get, set) {
	if (set) {
		assertCallable(get);
		assertCallable(set);
		return { get: get, set: set, configurable: true, enumerable: true };
	}
	return { value: get, configurable: true, enumerable: true };
};
