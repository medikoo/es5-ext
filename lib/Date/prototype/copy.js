// Copy date into other Date object

'use strict';

var isDate = require('../is-date');

module.exports = function () {
	if (!isDate(this)) {
		throw new TypeError("this is not a Date object");
	}
	return new Date(this.getTime());
};
