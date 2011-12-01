// Flatten object properties into one object
//
// flatten.call({ a: { b: 1, c: 1 }, d: { e: 1, f: 1 } })
//                 =def { b: 1, c: 1, e: 1, f: 1 }

'use strict';

var isPlainObject = require('../is-plain-object')
  , forEach       = require('./for-each')

  , process;

process = function self (value, key) {
	if (isPlainObject(value)) {
		forEach.call(value, self, this);
	} else {
		this[key] = value;
	}
};

module.exports = function () {
	var flattened = {};
	forEach.call(this, process, flattened);
	return flattened;
};
