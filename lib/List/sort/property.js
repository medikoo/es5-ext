// Sort by comparing given property

'use strict';

var cache = {};

module.exports = function (name) {
	return cache[name] || (cache[name] = function (a, b) {
		return ((a = a[name]) > (b = b[name])) ? 1 : ((a < b) ? -1 : 0);
	});
};
