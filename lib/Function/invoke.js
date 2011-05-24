// Returns a function that takes an object as an argument, and applies object's
// methodName method to arguments.
// invoke(name)(object, args…) =def  object[name](args…)
//
// inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice = require('../Array/slice');

module.exports = function (methodName) {
	var args = slice(arguments, 1);
	return function (obj) {
		return obj[methodName].apply(obj, args.concat(slice(arguments, 1)));
	};
};
