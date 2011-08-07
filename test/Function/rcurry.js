'use strict';

var toArray = require('../../lib/List/to-array').call

  , f;

f = function (a, b, c) {
	return toArray(arguments);
};

module.exports = function (t, a) {
	t = t.call;
	a.deep(t(f, 1, 2)(3, 4), [3, 4, 1, 2]);
};
