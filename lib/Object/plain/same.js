// Compares two objects.
// Objects are considered same when all their property names and values match.

'use strict';

var f      = require('../../Function/functionalize')
  , oEvery = require('./every').call;

module.exports = f(function (target) {
	if (Object.keys(this).length === Object.keys(target).length) {
		return oEvery(this, function (value, name) {
			return target.propertyIsEnumerable(name) && (target[name] === value);
		});
	}
	return false;
});
