'use strict';

var push     = Array.prototype.push
  , slice    = Array.prototype.slice
  , apply    = Function.prototype.apply
  , callable = require('../../Object/valid-callable');

module.exports = function (n) {
	var fn = callable(this), args = [];
	n = isNaN(n) ? fn.length : Number(n);
	return function self() {
		push.apply(args, slice.call(arguments, 0, n - args.length));
		return (args.length === n) ? apply.call(fn, this, args) : self;
	};
};
