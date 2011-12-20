// Return formatting string up to given pattern map

'use strict';

var call       = Function.prototype.call
  , replace    = String.prototype.replace
  , isCallable = require('../Object/is-callable');

module.exports = function (fmap) {
	return function (thisArg) {
		var t, fn;
		return replace.call(this, /%([a-zA-Z]+)|\\(.)/g,
			function (match, token, escape) {
				if (escape) {
					return escape;
				} else {
					t = token;
					while (t && !(fn = fmap[t])) {
						t = t.slice(0, -1);
					}
					return fn ? (isCallable(fn) ? call.call(fn, thisArg) : fn)
						+ token.slice(t.length) : match;
				}
			});
	};
};
