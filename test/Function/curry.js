'use strict';

var toArray = require('../../lib/List/to-array').call

  , f;

f = function (a, b, c) {
	return toArray(arguments);
};

module.exports = function (t, a) {
	a.equal(t(f, 1)(2, 3).toString(), [1, 2, 3].toString());
};
