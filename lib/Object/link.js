// Returns a function that for given key assings chosen object property value to
// same property of other object
// link(a, b)(k) =def a[k]=b[k]

'use strict';

module.exports = function (a, b) {
	return function (key) {
		return a[key] = b[key];
	};
};
