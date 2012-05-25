'use strict';

var call       = Function.prototype.call
  , replace    = String.prototype.replace
  , valid      = require('../../valid-value')
  , isCallable = require('../../Object/is-callable');

module.exports = function (fmap, thisArg) {
	var t, fn;
	valid(this);
	fmap = valid(fmap) && Object(fmap);
	return replace.call(this, /%([a-zA-Z]+)|\\([\u0000-\uffff])/g,
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
