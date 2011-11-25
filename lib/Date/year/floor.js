// Floor date to beginning of year

'use strict';

var f          = require('../../Function/functionalize')
  , monthFloor = require('../prototype/month-floor');

module.exports = f(function () {
	monthFloor.call(this); this.setMonth(0);
	return this;
});
