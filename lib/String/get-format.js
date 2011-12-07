// Return formatting string up to given pattern map

'use strict';

var call       = Function.prototype.call
  , isCallable = require('../Object/is-callable');

module.exports = function (fmap) {
	return function (scope) {
		var t, fn;
		return String(this).replace(/%([a-zA-Z]+)|\\(.)/g,
			function (match, token, escape) {
				if (escape) {
					return escape;
				} else {
					t = token;
					while (t && !(fn = fmap[t])) {
						t = t.slice(0, -1);
					}
					return fn ? (isCallable(fn) ? call.call(fn, scope) : fn)
						+ token.slice(t.length) : match;
				}
			});
	};
};
