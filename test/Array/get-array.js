'use strict';

var getArgs = require('../../lib/Function/get-args');

module.exports = function (t, a) {
	var args = getArgs(1, 2), arr = [1,2,3];
	a.deep(t(1), [1], "Primitive");
	a.deep(t('str'), ['str'], "String");
	a.deep(t(args), [args], "Arguments");
	a(t(arr), arr, "Array");
	a.deep(t(undefined), [], "Undefined");
};
