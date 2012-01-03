// Find first index of array

'use strict';

var assertNotNull = require('../../assert-not-null');

module.exports = function () {
	var i, l;
	assertNotNull(this);
	if (!(l = (this.length >>> 0))) {
		return null;
	}
	i = 0;
	while (!this.hasOwnProperty(i)) {
		if (i++ === l) {
			return null;
		}
	}
	return i;
};
