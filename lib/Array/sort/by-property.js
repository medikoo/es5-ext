// Sort by comparing given property

'use strict';

var compare = require('../../Object/compare').call;

var cache = {};

module.exports = function (name) {
	return cache[name] || (cache[name] = function (a, b) {
		return compare(a[name], b[name]);
	});
};
