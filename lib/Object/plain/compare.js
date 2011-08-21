// Compares two objects by each property
// Returns array of properties which are present only in one object
// or for which object values differ.

'use strict';

var keys         = Object.keys
	, f            = require('../../Function/functionalize')
  , exclusion    = require('../../List/exclusion').call
  , intersection = require('../../List/intersection').call
  , forEach      = require('./for-each').call;

module.exports = f(function (target) {
	var k1 = keys(this), k2 = keys(target);
	return intersection(k1, k2).filter(function (key) {
		return this[key] !== target[key];
	}, this).concat(exclusion(k1, k2));
});
