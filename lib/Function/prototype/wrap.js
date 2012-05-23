'use strict';

var apply    = Function.prototype.apply
  , callable = require('../../Object/valid-callable')
  , toArray  = require('../../Object/to-array');

module.exports = function (wrap) {
	var fn = callable(this);
	callable(wrap);

	return function () {
		return wrap.apply(this, [function (args) {
			return apply.call(fn, this, args);
		}.bind(this, arguments)].concat(toArray(arguments)));
	};
};
