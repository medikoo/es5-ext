'use strict';

var setPrototypeOf = require('../../object/set-prototype-of')

  , getPrototypeOf = Object.getPrototypeOf;

module.exports = function (t, a) {
	var x = {};

	a(getPrototypeOf(t(x)), x, "Normal object");
	a(getPrototypeOf(t(null)),
		(setPrototypeOf && setPrototypeOf.nullPolyfill) || null, "Null");
};
