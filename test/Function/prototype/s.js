'use strict';

var slice   = Array.prototype.slice
  , toArray = require('../../../lib/Object/prototype/to-array')

  , f, g;

f = function (b) {
	return ["A"].concat(b, slice.call(arguments, 1));
};
g = function () {
	return ["B"].concat(toArray.call(arguments));
};

module.exports = function (t, a) {
	a(t.call(f, g)(1,2).toString(), ["A", "B", 1, 2, 1, 2].toString());
};
