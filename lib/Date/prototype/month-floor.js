// Floor date to beginning of month

'use strict';

var dayFloor = require('./day-floor');

module.exports = function () {
	dayFloor.call(this); this.setDate(1);
	return this;
};
