// Throw error

'use strict';

var isError = require('../is-error');

module.exports = function () {
	if (!isError(this)) {
		throw new TypeError("this is not an Error object");
	}
	throw this;
};
