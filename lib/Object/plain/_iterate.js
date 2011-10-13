// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

'use strict';

var getKeys = Object.keys
  , values  = require('./values').call;

module.exports = function (method) {
	return function (callback, scope, compareFn, compareByKey) {
		var keys = getKeys(this);
		if (compareFn) {
			if (compareByKey) {
				keys.sort(compareFn);
			} else {
				return values(this).sort(compareFn)[method](function (value) {
					var key;
					keys.some(function (k, index) {
						if (this[k] === value) {
							key = k;
							keys.splice(index, 1);
							return true;
						}
						return false;
					}, this);
					return callback.call(scope, value, key, this);
				}, this);
			}
		}
		return keys[method](function (key) {
			return callback.call(scope, this[key], key, this);
		}, this);
	};
};
