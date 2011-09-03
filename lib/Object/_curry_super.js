// Internal method used by 'extend' and 'override' methods

'use strict';

var callBind   = require('../Function/call/bind')
  , curry      = require('../Function/curry').call
  , isFunction = require('../Function/is-function')

  , pattern, map;

pattern = /^\s*function\s*\(\s*(_super|_proto)\s*(?:,\s*(_super|_proto)\s*)?[,)]/;

map = {
	'_super': function (from, proto) {
		return callBind(from);
	},
	'_proto': function (from, proto) {
		return proto;
	}
};

module.exports = function (from, to, proto) {
	var match, a1, a2;
	if (isFunction(from) && isFunction(to) &&
		 (match = to.toString().match(pattern))) {
		if (match[2]) {
			return curry(to, map[match[1]](from, proto), map[match[2]](from, proto));
		} else {
			return curry(to, map[match[1]](from, proto));
		}
	} else {
		return to;
	}
};
