// Dynamic scope for given function
// Pollutes global scope for function call

'use strict';

var keys     = Object.keys
  , global   = require('../../global')
  , reserved = require('../../reserved').all

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
	set(scope, cache); result = this(); unset(scope, cache);
	return result;
};
