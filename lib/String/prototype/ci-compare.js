// Case insensitive compare

'use strict';

module.exports = function (other) {
	return String(this).toLowerCase().localeCompare(String(other).toLowerCase());
};
