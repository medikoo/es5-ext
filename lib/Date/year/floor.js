// Floor date to beginning of year

'use strict';

var f          = require('../../Function/functionalize')
  , monthFloor = require('../month/floor').call;

module.exports = f(function () {
	monthFloor(this); this.setMonth(0);
	return this;
});
