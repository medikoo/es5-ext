'use strict';

var toArray = require('../../../array/from')

  , f = function () { return toArray(arguments); };

module.exports = function (t, a) {
	a.deep(t.call(f, 1)(2, 3), [1, 2, 3]);
};
