// Analogous to Array.prototype.filter
//
// Creates a new object with all of the properites of this object for which the
// provided filtering function returns true.

'use strict';

var f       = require('../../Function/functionalize')
  , oForEach = require('./for-each').call;

module.exports = f(function (callback, scope) {
	var o = {};
	oForEach(this, function (value, key) {
		if (callback.call(scope, value, key)) {
			o[key] = this[key];
		}
	}, this);
	return o;
});
