// Replace all functions on object with f.bind(scope).
// This emulates Python's bound instance methods.
//
// inspired by:
// http://mochi.github.com/mochikit/doc/html/MochiKit/Base.html#fn-bindmethods

'use strict';

var isFunction = require('./isFunction');

module.exports = function (obj, scope) {
	scope = scope || obj;
	Object.keys(obj).forEach(function (key) {
		if (isFunction(obj[key])) {
			obj[key] = obj[key].bind(scope);
		}
	});
	return obj;
};
