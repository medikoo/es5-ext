'use strict';

var toArray = require('../../lib/List/to-array').call
  , slice   = require('../../lib/List/slice').call

  , f, g;

f = function (b) {
	return ["A"].concat(b, slice(arguments, 1));
};
g = function () {
	return ["B"].concat(toArray(arguments));
};

module.exports = function (t, a) {
	t = t.call;
	a(t(f, g)(1,2).toString(), ["A", "B", 1, 2, 1, 2].toString());
};
