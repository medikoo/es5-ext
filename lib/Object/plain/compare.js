// Compares two objects by each property
// Returns array of properties which are present only in one object
// or for which object values differ.

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
