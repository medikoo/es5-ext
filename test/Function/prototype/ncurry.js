'use strict';

var toArray = require('../../../lib/Array/to-array');

var f = function () {
	return toArray(arguments);
};

module.exports = function (t, a) {
	a.deep(t.call(f, 0, 1, 2)(), [], "0 arguments");
	a.deep(t.call(f, 5, 1, 2)(3, 4)(5, 6), [1, 2, 3, 4, 5], "Many arguments");
};
