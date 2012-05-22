'use strict';

var valid = require('../../valid-value');

module.exports = function () {
	var i, l;
	valid(this);
	if (!(l = (this.length >>> 0))) {
		return null;
	}
	i = l - 1;
	while (!this.hasOwnProperty(i)) {
		if (--i === -1) {
			return null;
		}
	}
	return i;
};
