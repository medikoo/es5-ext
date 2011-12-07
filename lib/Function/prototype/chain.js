// Applies the functions in argument-list order.
// sequence(f1, f2, f3…, fn)(args…) =def  fn(…(f3(f2(f1(args…)))))
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , toArray        = require('../../Object/prototype/to-array')

  , callFn;

callFn = function (result, fn) {
	return [apply.call(fn, this, result)];
};

module.exports = function () {
	var fns = [this].concat(toArray.call(arguments));
	fns.forEach(assertCallable);
	return function () {
		return fns.reduce(callFn.bind(this), arguments)[0];
	};
};
