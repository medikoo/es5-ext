'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , toArray        = require('../../Object/to-array');

module.exports = function () {
	var fn, args;
	assertCallable(fn = this);
	args = toArray(arguments);
	return function () {
		return apply.call(fn, this, args.concat(toArray(arguments)));
	};
};
