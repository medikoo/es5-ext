// Converts value to unsigned 32 bit integer.
// This type is used for array lengths, see:
// http://www.2ality.com/2012/02/js-integers.html

'use strict';

module.exports = function (value) {
	return value >>> 0;
};
