'use strict';

var assertCallable = require('../assert-callable');

module.exports = function (get, set) {
	if (set) {
		assertCallable(get);
		assertCallable(set);
		return { get: get, set: set };
	}
	return { value: get };
};
