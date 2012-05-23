'use strict';

var slice      = Array.prototype.slice
  , apply      = Function.prototype.apply
  , valid      = require('../valid-value')
  , isCallable = require('../Object/is-callable')
  , memoize    = require('./prototype/memoize');

module.exports = memoize.call(function (name) {
	var args, isFn;

	valid(name);
	args = slice.call(arguments, 1)
	if (!(isFn = isCallable(name))) {
		name = String(name);
	}

	return function (obj) {
		return apply.call(isFn ? name : obj[name], obj,
			args.concat(slice.call(arguments, 1)));
	};
}, false);
