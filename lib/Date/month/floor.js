// Floor date to beginning of month

'use strict';

var f        = require('../../Function/functionalize')
  , dayFloor = require('../prototype/day-floor');

module.exports = f(function () {
	dayFloor.call(this); this.setDate(1);
	return this;
});
