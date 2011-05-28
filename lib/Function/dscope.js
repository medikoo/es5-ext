// Dynamic scope for given function

'use strict';

var global   = require('../global')
  , reserved = require('../reserved').all

  , set, unset;

set = function (scope, cache) {
	Object.keys(scope).forEach(function (key) {
		if (global.hasOwnProperty(key)) {
			cache[key] = global[key];
		}
		global[key] = scope[key];
	});
};

unset = function (scope, cache) {
	Object.keys(scope).forEach(function (key) {
		if (cache.hasOwnProperty(key)) {
			global[key] = cache[key];
		} else {
			delete global[key];
		}
	});
};

module.exports = function (f, scope) {
	var result, cache = {};
	set(scope, cache); result = f(); unset(scope, cache);
	return result;
};
