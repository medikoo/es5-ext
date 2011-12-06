// Internal method used by 'extend' and 'override' methods

'use strict';

var call       = Function.prototype.call
  , curry      = require('../../Function/prototype/curry')
  , isFunction = require('../../Function/is-function')
  , isCallable = require('../is-callable')

  , pattern, map;

pattern =
	/^\s*function\s*\(\s*(_super|_proto)\s*(?:,\s*(_super|_proto)\s*)?[,)]/;

map = {
	'_super': function (from, proto) {
		return call.bind(from);
	},
	'_proto': function (from, proto) {
		return proto;
	}
};

module.exports = function (from, to, proto) {
	var match, a1, a2;
	if (isCallable(from) && isFunction(to) &&
		 (match = to.toString().match(pattern))) {
		if (match[2]) {
			return curry.call(to, map[match[1]](from, proto),
				map[match[2]](from, proto));
		} else {
			return curry.call(to, map[match[1]](from, proto));
		}
	} else {
		return to;
	}
};
