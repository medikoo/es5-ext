// Applies the functions in argument-list order.
// sequence(f1, f2, f3…, fn)(args…) =def  fn(…(f3(f2(f1(args…)))))
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var f = require('./functionalize')
  , toArray = require('../List/to-array').call

  , fn;

fn = function (result, method) {
	return [method.apply(this, result)];
};

module.exports = f(function () {
	var methods = [this].concat(toArray(arguments));
	return function () {
		return methods.reduce(fn.bind(this), arguments)[0];
	};
});
