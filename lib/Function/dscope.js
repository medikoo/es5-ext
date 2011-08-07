// Dynamic scope for given function
// Pollutes global scope for time of function call

'use strict';

var f        = require('./functionalize')
  , global   = require('../global')
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

module.exports = f(function (scope) {
	var result, cache = {};
	set(scope, cache); result = this(); unset(scope, cache);
	return result;
});
