'use strict';

var getArgs = require('../../lib/Function/get-args');

module.exports = function (t, a) {
	var x = {}, args = getArgs(1, x, 'raz'), arr = [1, x, 'raz'], r;
	t = t.call;

	a.deep(r = t(args), arr, "Matches content");
	a.not(r, args, "Not same object");
	a.deep(r = t(arr), arr, "Array: Matches content");
	a.not(r, arr, "Array: Not same object");
};
