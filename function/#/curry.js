'use strict';

var toUint   = require('../../number/to-uint')
  , callable = require('../../object/valid-callable')

  , slice = Array.prototype.slice, apply = Function.prototype.apply
  , curry;

curry = function self(fn, length, preArgs) {
	return function () {
		var args = preArgs ?
				preArgs.concat(slice.call(arguments, 0, length - preArgs.length)) :
				slice.call(arguments, 0, length);
		return (args.length === length) ? apply.call(fn, this, args) :
				self(fn, length, args);
	};
};

module.exports = function (/*length*/) {
	var length = arguments[0];
	return curry(callable(this),
		isNaN(length) ? toUint(this.length) : toUint(length));
};
