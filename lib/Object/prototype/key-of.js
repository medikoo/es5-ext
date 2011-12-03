// Search object properties for value

'use strict';

var some = require('./some');

module.exports = function (needle) {
	var r;
	return some.call(this, function (value, name) {
		if (value === needle) {
			r = name;
			return true;
		}
		return false;
	}) ? r : null;
};
