// Convert dash separated string to camelCase
// e.g. one-two-three -> oneTwoThree

'use strict';

var replace = function (m, a) { return a.toUpperCase(); };
module.exports = function (str) {
	return str.replace(/-([a-z0-9])/g, replace);
};
