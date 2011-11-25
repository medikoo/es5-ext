'use strict';

var toArray = require('../../lib/Array/to-array');

var f = function () {
	return toArray(arguments);
};

module.exports = function (t, a) {
	t = t.call;
	a.deep(t(f, 0, 1, 2)(), [], "0 arguments");
	a.deep(t(f, 5, 1, 2)(3, 4)(5, 6), [5, 3, 4, 1, 2], "Many arguments");
};
