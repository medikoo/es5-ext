// Analogous to Array.prototype.filter
//
// Creates a new object with all of the properites of this object for which the
// provided filtering function returns true.

'use strict';

var forEach = require('./for-each');

module.exports = function (cb, thisArg) {
	var o = {};
	forEach.call(this, function (value, key) {
		if (cb.call(thisArg, value, key)) {
			o[key] = this[key];
		}
	}, this);
	return o;
};
