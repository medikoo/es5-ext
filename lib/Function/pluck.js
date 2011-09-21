// Returns a function that takes an object, and returns the value of its name
// property
// pluck(name)(obj) =def  obj[name]
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice = require('../List/slice/call')
  , memoize = require('./memoize');

module.exports = memoize(function (name) {
	return function (o) {
		return o[name];
	};
});
