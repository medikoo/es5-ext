// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

'use strict';

var call       = Function.prototype.call
  , keys       = Object.keys
  , valid      = require('../valid-value')
  , callable   = require('./valid-callable')
  , isCallable = require('./is-callable');

module.exports = function (method) {
	return function (obj, cb, thisArg, compareFn) {
		var list;
		valid(obj);
		callable(cb);

		list = keys(obj);
		if (compareFn) {
			list.sort(isCallable(compareFn) ? compareFn : undefined);
		}
		return list[method](function (key, index) {
			return call.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};
