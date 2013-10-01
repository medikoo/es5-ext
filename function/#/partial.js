'use strict';

var callable = require('../../object/valid-callable')
  , aFrom    = require('../../array/from')

  , apply = Function.prototype.apply;

module.exports = function (/*…args*/) {
	var fn = callable(this)
	  , args = aFrom(arguments);

	return function () {
		return apply.call(fn, this, args.concat(aFrom(arguments)));
	};
};
