'use strict';

var toArray = require('../../lib/List/to-array').call;

var f = function () {
	return toArray(arguments);
};

module.exports = function (t, a) {
	t = t.call;
	a.deep(t(f, 0, 1, 2)(), [], "0 arguments");
	a.deep(t(f, 5, 1, 2)(3, 4)(5, 6), [1, 2, 3, 4, 5], "Many arguments");
};
