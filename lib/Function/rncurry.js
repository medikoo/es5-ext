// Same as rcurry, except only applies the function when all n arguments are
// saturated.
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var curry = require('./curry')
  , slice = require('../List/slice').call

  , hold = function hold (f, n, args) {
		args = slice(arguments, 3, 3 + n - args.length).concat(args);
		return args.length === n ? f.apply(this, args) : curry(hold, f, n, args);
	};

module.exports = function (f, n) {
	return curry(hold, f, n, slice(arguments, 2).slice(0, n));
};
