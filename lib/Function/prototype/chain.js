'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , toArray        = require('../../Object/to-array')

  , callFn;

callFn = function (result, fn) {
	return [apply.call(fn, this, result)];
};

module.exports = function () {
	var fns = [this].concat(toArray(arguments));
	fns.forEach(assertCallable);
	return function () {
		return fns.reduce(callFn.bind(this), arguments)[0];
	};
};
