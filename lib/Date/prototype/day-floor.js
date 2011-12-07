// Floor date to beginning of day

'use strict';

var isDate = require('../is-date');

module.exports = function () {
	if (!isDate(this)) {
		throw new TypeError("this is not a Date object");
	}
	this.setHours(0, 0, 0, 0);
	return this;
};
