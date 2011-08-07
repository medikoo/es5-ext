// Same as curry, except only applies the function when all n arguments are
// saturated.
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var f     = require('./functionalize')
  , curry = require('./curry')
  , slice = require('../List/slice').call

  , hold = function hold (fn, n, args) {
		args = args.concat(slice(arguments, 3)).slice(0, n);
		return args.length === n ? fn.apply(this, args) : hold.curry(fn, n, args);
	};

hold.curry = curry;

module.exports = f(function (n) {
	return hold.curry(this, n, slice(arguments, 1));
});
