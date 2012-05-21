// Returns a function that takes an object, and deletes given
// object's property

'use strict';

var valid   = require('../valid-value')
  , memoize = require('./memoize');

module.exports = memoize(function (name) {
	return function (obj) {
		delete obj[name];
	};
}, [function (name) {
	return valid(name) && String(name);
}]);
