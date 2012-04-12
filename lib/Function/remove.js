// Returns a function that takes an object, and deletes given
// object's property

'use strict';

var assertNotNull = require('../assert-not-null')
  , memoize = require('./memoize');

module.exports = memoize(function (name) {
	return function (obj) {
		delete obj[name];
	};
}, [function (name) {
	return assertNotNull(name) && String(name);
}]);
