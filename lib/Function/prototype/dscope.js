// Dynamic scope for given function
// Pollutes global scope for function call

'use strict';

var keys       = Object.keys
  , global     = require('../../global')
  , reserved   = require('../../reserved').all
  , isCallable = require('../../Object/is-callable')

  , set, unset;

set = function (scope, cache) {
	keys(scope).forEach(function (key) {
		if (global.hasOwnProperty(key)) {
			cache[key] = global[key];
		}
		global[key] = scope[key];
	});
};

unset = function (scope, cache) {
	keys(scope).forEach(function (key) {
		if (cache.hasOwnProperty(key)) {
			global[key] = cache[key];
		} else {
			delete global[key];
		}
	});
};

module.exports = function (scope) {
	var result, cache = {};
	if (!isCallable(this)) {
		throw new TypeError(this + " is not a function");
	}
	set(scope, cache); result = this(); unset(scope, cache);
	return result;
};
