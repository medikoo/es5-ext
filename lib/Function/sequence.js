// Same as compose, except applies the functions in argument-list order.
// sequence(f1, f2, f3…, fn)(args…) =def  fn(…(f3(f2(f1(args…)))))
//
// inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var toArray = require('../Array/toArray');

var f = function (result, method) {
	return [method.apply(this, result)];
};

module.exports = function () {
	var methods = toArray(arguments);
	return function () {
		return methods.reduce(f.bind(this), arguments)[0];
	};
};
