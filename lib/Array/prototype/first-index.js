'use strict';

var valid = require('../../valid-value');

module.exports = function () {
	var i, l;
	valid(this);
	if (!(l = (this.length >>> 0))) {
		return null;
	}
	i = 0;
	while (!this.hasOwnProperty(i)) {
		if (++i === l) {
			return null;
		}
	}
	return i;
};
