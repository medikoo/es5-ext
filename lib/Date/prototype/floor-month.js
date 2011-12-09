// Floor date to beginning of month

'use strict';

var floorDay = require('./floor-day');

module.exports = function () {
	floorDay.call(this); this.setDate(1);
	return this;
};
