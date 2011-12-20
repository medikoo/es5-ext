// Search object properties for value

'use strict';

var some = require('./some');

module.exports = function (searchValue) {
	var r;
	return some.call(this, function (value, name) {
		if (value === searchValue) {
			r = name;
			return true;
		}
		return false;
	}) ? r : null;
};
