// Return count of properties

'use strict';

var keys = Object.keys;

module.exports = function () {
	return keys(this).length;
};
