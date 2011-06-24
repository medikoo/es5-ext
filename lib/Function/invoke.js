// Returns a function that takes an object as an argument, and applies object's
// name method to arguments.
// invoke(name, args…)(object, args2…) =def  object[name](args… args2…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice = require('../List/slice').call;

module.exports = function (name) {
	var args = slice(arguments, 1);
	return function (obj) {
		return obj[name].apply(obj, args.concat(slice(arguments, 1)));
	};
};
