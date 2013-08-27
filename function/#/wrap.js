'use strict';

var callable = require('../../object/valid-callable')
  , toArray  = require('../../array/from')

  , apply = Function.prototype.apply;

module.exports = function (wrap) {
	var fn = callable(this);
	callable(wrap);

	return function () {
		return wrap.apply(this, [function (args) {
			return apply.call(fn, this, args);
		}.bind(this, arguments)].concat(toArray(arguments)));
	};
};
