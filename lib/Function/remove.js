// Returns a function that takes an object, and deletes given
// object's property

'use strict';

var assertNotNull = require('../assert-not-null')
  , memoize = require('./memoize');

module.exports = memoize(function (name) {
	assertNotNull(name);
	name = String(name);

	return function (obj) {
		delete obj[name];
	};
});
