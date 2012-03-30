// Find last valid index of array

'use strict';

var assertNotNull = require('../../assert-not-null');

module.exports = function () {
	var i, l;
	assertNotNull(this);
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
