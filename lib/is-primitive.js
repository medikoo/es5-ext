'use strict';

var map = { boolean: true, number: true, string: true };

module.exports = function (x) {
	return map[typeof x] || (x == null);
};
