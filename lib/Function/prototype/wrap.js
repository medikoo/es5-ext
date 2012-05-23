'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , toArray        = require('../../Object/to-array');

module.exports = function (wrap) {
	var fn = this;
	assertCallable(fn);
	assertCallable(wrap);

	return function () {
		return wrap.apply(this, [function (args) {
			return apply.call(fn, this, args);
		}.bind(this, arguments)].concat(toArray(arguments)));
	};
};
