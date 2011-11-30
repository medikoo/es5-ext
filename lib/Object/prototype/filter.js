// Analogous to Array.prototype.filter
//
// Creates a new object with all of the properites of this object for which the
// provided filtering function returns true.

'use strict';

var forEach = require('../plain/for-each').call;

module.exports = function (callback, scope) {
	var o = {};
	forEach(this, function (value, key) {
		if (callback.call(scope, value, key)) {
			o[key] = this[key];
		}
	}, this);
	return o;
};
