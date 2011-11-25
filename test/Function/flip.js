'use strict';

var toArray = require('../../lib/Array/to-array')

  , f;

f = function (a, b) {
	return toArray(arguments);
};

module.exports = function (t, a) {
	t = t.call;
	a.deep(t(f)(1, 2, 3), [2, 1, 3]);
};
