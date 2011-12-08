// Throw error if given object is null or undefined

'use strict';

module.exports = function (value) {
	if (value == null) {
		throw new TypeError("Cannot use null or undefined")
	}
};
