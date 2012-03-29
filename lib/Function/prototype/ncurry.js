// Same as curry, except only applies the function when all n arguments are
// saturated.
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice          = Array.prototype.slice
  , apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , partial          = require('./partial')

  , hold = function hold(fn, n, args) {
	args = args.concat(slice.call(arguments, 3)).slice(0, n);
	return args.length === n ? apply.call(fn, this, args) :
			hold.partial(fn, n, args);
};

hold.partial = partial;

module.exports = function (n) {
	assertCallable(this);
	return hold.partial(this, n, slice.call(arguments, 1));
};
