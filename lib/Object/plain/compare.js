// Compares two objects by each property
// Returns array of property keys which were not found in either object
// or for which values are different between two objects.

'use strict';

var f       = require('../../Function/functionalize')
  , forEach = require('./for-each').call;

module.exports = f(function (target) {
	var keys = [];
	forEach(this, function (value, name) {
		if (target[name] !== value) {
			keys.push(name);
		}
	});
	Object.keys(target).forEach(function (key) {
		if (!this.propertyIsEnumerable(key)) {
			keys.push(key);
		}
	}, this);
	return keys;
});
