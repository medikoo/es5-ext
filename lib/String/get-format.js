// Return formatting string up to given pattern map

'use strict';

var isFunction = require('../Function/is-function');

module.exports = function (fmap) {
	return function (scope) {
		var t, fn;
		return String(this).replace(/%([a-zA-Z]+)|\\(.)/g, function (match, token, escape) {
			if (escape) {
				return escape;
			} else {
				t = token;
				while (t && !(fn = fmap[t])) {
					t = t.slice(0, -1);
				}
				return fn ? (isFunction(fn) ? fn.call(scope) : fn)
					+ token.slice(t.length) : match;
			}
		});
	};
};
