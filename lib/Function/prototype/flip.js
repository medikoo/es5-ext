'use strict';

var apply    = Function.prototype.apply
  , callable = require('../../Object/valid-callable')
  , toArray  = require('../../Array/from');

module.exports = function () {
	var fn = callable(this);

	return function (a, b) {
		var args = toArray(arguments);
		args[0] = b;
		args[1] = a;
		return apply.call(fn, this, args);
	};
};
