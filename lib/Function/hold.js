// Applies the function on n-th call
// 
// hold(f, 3, args0…)(args1…)(args2…)(args3…) =def f(args0…, args1…, args2…, args3…)


'use strict';

var f     = require('./functionalize')
  , curry = require('./curry')
  , slice = require('../List/slice').call

  , hold = function hold (fn, n, args) {
		args = args.concat(slice(arguments, 3));
		return n <= 0 ? fn.apply(this, args) : hold.curry(fn, --n, args);
	};

hold.curry = curry;

module.exports = f(function (n) {
	if (isNaN(n = Number(n))) {
		n = 2;
	}
	var args = slice(arguments, 1);
	return n <= 0 ? this.apply(null, args) : hold.curry(this, --n, args);
});
