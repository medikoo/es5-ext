// localeCompare case insensitive

'use strict';

module.exports = function (other) {
	return String(this).toLowerCase().localeCompare(String(other).toLowerCase());
};
