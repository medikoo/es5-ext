// Floor date to beginning of year

'use strict';

var monthFloor = require('./month-floor');

module.exports = function () {
	monthFloor.call(this); this.setMonth(0);
	return this;
};
