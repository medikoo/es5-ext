// Applies the functions in argument-list order.
// sequence(f1, f2, f3…, fn)(args…) =def  fn(…(f3(f2(f1(args…)))))
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var apply      = Function.prototype.apply
  , isCallable = require('../../Object/is-callable')
  , toArray    = require('../../Object/prototype/to-array')

  , validate, callFn;

validate = function (fn) {
	if (!isCallable(fn)) {
		throw new TypeError(fn + " is not a function");
	}
};

callFn = function (result, fn) {
	return [apply.call(fn, this, result)];
};

module.exports = function () {
	var fns = [this].concat(toArray.call(arguments));
	fns.forEach(validate);
	return function () {
		return fns.reduce(callFn.bind(this), arguments)[0];
	};
};
