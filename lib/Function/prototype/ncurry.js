// Same as curry, except only applies the function when all n arguments are
// saturated.
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice = Array.prototype.slice
  , curry = require('./curry')

  , hold = function hold (fn, n, args) {
		args = args.concat(slice.call(arguments, 3)).slice(0, n);
		return args.length === n ? fn.apply(this, args) : hold.curry(fn, n, args);
	};

hold.curry = curry;

module.exports = function (n) {
	return hold.curry(this, n, slice.call(arguments, 1));
};
