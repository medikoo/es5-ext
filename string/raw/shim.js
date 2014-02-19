'use strict';

var validValue = require('../../object/valid-value')

  , reduce = Array.prototype.reduce;

module.exports = function (callSite/*,  …substitutions*/) {
	var args, rawValue = Object(validValue(Object(validValue(callSite)).raw));
	if (!(rawValue.length >>> 0)) return '';
	args = arguments;
	return reduce.call(rawValue, function (a, b, i) {
		return a + String(args[i]) + b;
	});
};
