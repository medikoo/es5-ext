// Sort by comparing given property

'use strict';

module.exports = function (name) {
	return function (a, b) {
		return ((a = a[name]) > (b = b[name])) ? 1 : ((a < b) ? -1 : 0);
	};
};
