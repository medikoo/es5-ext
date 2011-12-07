// Applies the function on n-th call
//
// hold(f, 3, args0…)(args1…)(args2…)(args3…) =def f(args0…, args1…, args2…, args3…)


'use strict';

var slice          = Array.prototype.slice
  , apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , curry          = require('./curry')

  , hold = function hold (fn, n, args) {
		args = args.concat(slice.call(arguments, 3));
		return n <= 0 ? apply.call(fn, this, args) : hold.curry(fn, --n, args);
	};

hold.curry = curry;

module.exports = function (n) {
	assertCallable(this);
	if (isNaN(n = Number(n))) {
		n = 2;
	}
	var args = slice.call(arguments, 1);
	return n <= 0 ? apply.call(this, null, args) : hold.curry(this, --n, args);
};
