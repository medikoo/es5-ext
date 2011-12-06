'use strict';

var toArray = require('../../../lib/Object/prototype/to-array')

  , f;

f = function (a, b, c) {
	return toArray.call(arguments);
};

module.exports = function (t, a) {
	a.deep(t.call(f, 1)(2, 3), [1, 2, 3]);
};
