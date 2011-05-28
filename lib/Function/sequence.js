// Same as compose, except applies the functions in argument-list order.
// sequence(f1, f2, f3…, fn)(args…) =def  fn(…(f3(f2(f1(args…)))))
//
// inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var bind    = require('./bind')
  , toArray = require('../List/toArray').call

  , f;

f = bind(function (result, method) {
	return [method.apply(this, result)];
});

module.exports = function () {
	var methods = toArray(arguments);
	return function () {
		return methods.reduce(f(this), arguments)[0];
	};
};
