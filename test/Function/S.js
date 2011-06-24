'use strict';

var concat = require('../../lib/List/concat').call
  , slice = require('../../lib/List/slice').call

  , f, g;

f = function (b) {
	return ["A"].concat(b, slice(arguments, 1));
};
g = function () {
	return concat(["B"], arguments);
};

module.exports = function (t, a) {
	a.equal(t(f, g)(1,2).toString(), ["A", "B", 1, 2, 1, 2].toString());
};
