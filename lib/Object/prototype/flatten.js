// Flatten object properties into one object
//
// flatten.call({ a: { b: 1, c: 1 }, d: { e: 1, f: 1 } })
//                 =def { b: 1, c: 1, e: 1, f: 1 }

'use strict';

var isPlainObject = require('../plain/is-plain-object').call
  , forEach       = require('../plain/for-each').call

  , process;

process = function self (value, key) {
	if (isPlainObject(value)) {
		forEach(value, self, this);
	} else {
		this[key] = value;
	}
};

module.exports = function () {
	var flattened = {};
	forEach(this, process, flattened);
	return flattened;
};
