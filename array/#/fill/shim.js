// Taken from: https://github.com/paulmillr/es6-shim/

'use strict';

var validValue = require('../../../object/valid-value')
  , toInteger  = require('../../../number/to-integer')

  , max = Math.max, min = Math.min;

module.exports = function (value/*, start, end*/) {
	var o = validValue(this), start = arguments[1], end = arguments[2]
	  , l = o.length >>> 0, relativeStart, i;

	start = (start === undefined) ? 0 : toInteger(start);
	end = (end === undefined) ? l : toInteger(end);

	relativeStart = start < 0 ? max(l + start, 0) : min(start, l);
	for (i = relativeStart; i < l && i < end; ++i) o[i] = value;
	return o;
};
