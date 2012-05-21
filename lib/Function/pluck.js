// Returns a function that takes an object, and returns the value of its name
// property
// pluck(name)(obj) =def  obj[name]
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var valid   = require('../valid-value')
  , memoize = require('./memoize');

module.exports = memoize(function (name) {
	return function (o) {
		return o[name];
	};
}, 1, [function (name) {
	return valid(name) && String(name);
}]);
