// Return date's month days count
// e.g. for January it'll be 31

'use strict';

var isDate = require('../is-date');

module.exports = function () {
	if (!isDate(this)) {
		throw new TypeError("this is not a Date object");
	}
	switch (this.getMonth()) {
		case 1:
		return this.getFullYear()%4 ? 28 : 29;
		case 3:
		case 5:
		case 8:
		case 10:
		return 30;
		default:
		return 31;
	}
};
