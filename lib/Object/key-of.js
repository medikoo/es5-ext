// Search object properties for value

'use strict';

var some = require('./some');

module.exports = function (obj, searchValue) {
	var r;
	return some(obj, function (value, name) {
		if (value === searchValue) {
			r = name;
			return true;
		}
		return false;
	}) ? r : null;
};
