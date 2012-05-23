'use strict';

var apply    = Function.prototype.apply
  , callable = require('../../Object/valid-callable')
  , toArray  = require('../../Object/to-array');

module.exports = function () {
	var fn = callable(this)
	  , args = toArray(arguments);

	return function () {
		return apply.call(fn, this, args.concat(toArray(arguments)));
	};
};
