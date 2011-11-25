'use strict';

var slice   = Array.prototype.slice
  , toArray = require('../../lib/Array/to-array')

  , f, g;

f = function (b) {
	return ["A"].concat(b, slice.call(arguments, 1));
};
g = function () {
	return ["B"].concat(toArray(arguments));
};

module.exports = function (t, a) {
	t = t.call;
	a(t(f, g)(1,2).toString(), ["A", "B", 1, 2, 1, 2].toString());
};
