// Applies the functions in argument-list order.
// sequence(f1, f2, f3…, fn)(args…) =def  fn(…(f3(f2(f1(args…)))))
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var bindBind    = require('./bind-bind')
  , toArray = require('../List/to-array').call

  , f;

f = bindBind(function (result, method) {
	return [method.apply(this, result)];
});

module.exports = function () {
	var methods = toArray(arguments);
	return function () {
		return methods.reduce(f(this), arguments)[0];
	};
};
