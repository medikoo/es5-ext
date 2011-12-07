// Returns a function that takes an object as an argument, and applies object's
// name method to arguments.
// invoke(name, args…)(object, args2…) =def  object[name](args… args2…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice      = Array.prototype.slice
  , apply      = Function.prototype.apply
  , isCallable = require('../Object/is-callable')
  , memoize    = require('./memoize');

module.exports = memoize(function (name) {
	var args = slice.call(arguments, 1)
		, isFn = isCallable(name);

	return function (obj) {
		return apply.call(isFn ? name : obj[name], obj,
			args.concat(slice.call(arguments, 1)));
	};
}, false);
