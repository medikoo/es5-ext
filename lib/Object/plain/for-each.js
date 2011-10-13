// Analogous to Array.prototype.forEach
//
// Calls a function for each key-value pair found in object
// Additionally you can provide compareFn to iterate object in desired order

'use strict';

var getKeys = Object.keys
  , f       = require('../../Function/functionalize')
  , values  = require('./values').call

module.exports = f(function (callback, scope, compareFn, compareByKey) {
	var keys = getKeys(this);
	if (compareFn) {
		if (compareByKey) {
			keys.sort(compareFn);
		} else {
			values(this).sort(compareFn).forEach(function (value) {
				var key;
				keys.some(function (k, index) {
					if (this[k] === value) {
						key = k;
						keys.splice(index, 1);
						return true;
					}
					return false;
				}, this);
				callback.call(scope, value, key, this);
			}, this);
			return;
		}
	}
	keys.forEach(function (key) {
		callback.call(scope, this[key], key, this);
	}, this);
});
