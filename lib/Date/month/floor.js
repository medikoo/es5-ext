// Floor date to beginning of month

'use strict';

var f        = require('../../Function/functionalize')
  , dayFloor = require('../day/floor').call;

module.exports = f(function () {
	dayFloor(this); this.setDate(1);
	return this;
});
