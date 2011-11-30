// Search object properties for value

'use strict';

var some = require('../plain/some').call;

module.exports = function (needle) {
	var r;
	return some(this, function (value, name) {
		if (value === needle) {
			r = name;
			return true;
		}
		return false;
	}) ? r : null;
};
