// Floor date to beginning of day

'use strict';

module.exports = function () {
	this.setHours(0, 0, 0, 0);
	return this;
};
