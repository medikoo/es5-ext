// Analogous to Array.prototype.filter
//
// Creates a new object with all of the properites of this object for which the
// provided filtering function returns true.

'use strict';

var forEach = require('./for-each');

module.exports = function (obj, cb, thisArg) {
	var o = {};
	forEach(obj, function (value, key) {
		if (cb.call(thisArg, value, key)) {
			o[key] = obj[key];
		}
	});
	return o;
};
